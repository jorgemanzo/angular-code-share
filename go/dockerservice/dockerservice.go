package dockerservice

import (
	"angular-code-share/api/docker"
	"fmt"
	"strings"
)

type containerStatus struct {
	ID     string `json:"ID"`
	Names  string `json:"Names"`
	Status string `json:"Status"`
	Ports  string `json:"Ports"`
}

type executionMessage struct {
	Message string `json:"Message"`
	OK      bool   `json:"OK"`
}

type commandOption struct {
	ID        int    `json:"ID"`
	Parameter string `json:"parameter"`
	Value     string `json:"value"`
}

type BuildOrder struct {
	DockerFile     string          `json:"dockerFile"`
	CommandOptions []commandOption `json:"commandOptions"`
}

func RunDockerPS() []containerStatus {
	result := docker.Status()
	statusLines := strings.Split(result, "\n")
	containers := make([]containerStatus, 0)
	for _, statusLine := range statusLines {
		fields := strings.Split(statusLine, ",")
		if len(fields) >= 4 {
			containers = append(containers, containerStatus{
				ID:     fields[0],
				Names:  fields[1],
				Status: fields[2],
				Ports:  fields[3],
			})
		}
	}
	return containers
}

func StopByID(ID string) executionMessage {
	err := docker.StopByID(ID)
	var reply executionMessage
	if err != nil {
		reply = executionMessage{
			Message: fmt.Sprint(err),
			OK:      false,
		}
	} else {
		reply = executionMessage{
			Message: "",
			OK:      true,
		}
	}
	return reply
}

func StartBuild(order BuildOrder) executionMessage {
	var strs []string
	strs = append(strs, "build")
	for _, commandOption := range order.CommandOptions {
		strs = append(strs, commandOption.Parameter)
		strs = append(strs, commandOption.Value)
	}
	output, err := docker.DockerRun(strs, order.DockerFile)
	var reply executionMessage
	if err != nil {
		reply = executionMessage{
			Message: strings.Join([]string{fmt.Sprint(output), fmt.Sprint(err)}, "\n"),
			OK:      false,
		}
	} else {
		reply = executionMessage{
			Message: output,
			OK:      true,
		}
	}
	return reply
}
