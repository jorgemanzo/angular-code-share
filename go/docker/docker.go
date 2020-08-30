package docker

import (
	"fmt"
	"io"
	"log"
	"os/exec"
)

// Status runs docker ps in a predictable format to be turned into
// an array of containerStatus.
func Status() string {
	cmdOutput, err := exec.Command("docker", "ps", "--format", "{{.ID}},{{.Names}},{{.Status}},{{.Ports}}").Output()
	if err != nil {
		log.Fatal(err)
	}
	return fmt.Sprintf("%s", cmdOutput)
}

// StopByID runs docker stop with the given container ID.
// Returns an error, which will be nil if everything executed fine.
func StopByID(ID string) error {
	_, err := exec.Command("docker", "stop", ID).Output()
	return err
}

func DockerRun(commandWithParameters []string, stdinStr string) (string, error) {
	if len(stdinStr) > 0 {
		log.Print("Using STDIN")
		commandWithParameters = append(commandWithParameters, "-")
	}
	log.Print(commandWithParameters)

	cmd := exec.Command("docker", commandWithParameters...)

	if len(stdinStr) > 0 {

		stdin, err := cmd.StdinPipe()
		if err != nil {
			return "", err
		}

		go func() {
			defer stdin.Close()
			io.WriteString(stdin, stdinStr)
		}()

	}

	out, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Sprintf("%s\n", out), err
	}

	return fmt.Sprintf("%s\n", out), nil
}
