package dockerservice

import (
	"angular-code-share/api/docker"
	"strings"
)

type containerStatus struct {
	ID     string `json:"ID"`
	Names  string `json:"Names"`
	Status string `json:"Status"`
	Ports  string `json:"Ports"`
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
