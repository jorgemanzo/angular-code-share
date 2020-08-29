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

func RunDockerPS() []containerStatus {
	result := docker.Status()
	statusLines := strings.Split(result, "\n")
	containers := make([]containerStatus, 0)
	for j := 0; j < len(statusLines)-1; j++ {
		fields := strings.Split(statusLines[j], ",")
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
