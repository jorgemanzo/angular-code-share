package docker

import (
	"fmt"
	"log"
	"os/exec"
)

func Status() string {
	cmdOutput, err := exec.Command("docker", "ps", "--format", "{{.ID}},{{.Names}},{{.Status}},{{.Ports}}").Output()
	if err != nil {
		log.Fatal(err)
	}
	return fmt.Sprintf("%s", cmdOutput)
}
