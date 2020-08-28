package handlers

import (
	"angular-code-share/api/database"
	"angular-code-share/api/docker"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
)

type share struct {
	Code    string `json:"code"`
	Mutable bool   `json:"mutable"`
}

type containerStatus struct {
	ID     string `json:"ID"`
	Names  string `json:"Names"`
	Status string `json:"Status"`
	Ports  string `json:"Ports"`
}

func setHeaders(w http.ResponseWriter, contentType string) {
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
	w.Header().Set("Content-Type", contentType)
}

// Create handles the endpoint to insert a new Share
// into the database
func Create(w http.ResponseWriter, r *http.Request) {
	mutability := false
	if r.PostFormValue("mutable") == "true" {
		mutability = true
	}
	shareID, _ := database.InsertShare(r.PostFormValue("code"), mutability)
	setHeaders(w, "text/plain")
	fmt.Fprintf(w, "%d", shareID)
}

// GetByID handles the endpoint to search the database for
// a share provided a share's id.
func GetByID(w http.ResponseWriter, r *http.Request) {
	snip := share{"", false}
	database.GetShareByID(r.URL.Query().Get("id")).Scan(&(snip.Code), &(snip.Mutable))
	setHeaders(w, "application/json")
	json.NewEncoder(w).Encode(snip)
}

// UpdateByID handles the endpoint to perform a database update
// on an existing share using its id.
func UpdateByID(w http.ResponseWriter, r *http.Request) {
	mutability := false
	if r.PostFormValue("mutable") == "true" {
		mutability = true
	}
	database.UpdateShareByID(r.PostFormValue("code"), r.URL.Query().Get("id"), mutability)
	setHeaders(w, "text/plain")
}

func RunDockerPS(w http.ResponseWriter, r *http.Request) {
	result := docker.Status()
	statusLines := strings.Split(result, "\n")
	containers := make([]containerStatus, 0)
	for j := 0; j < len(statusLines)-1; j++ {
		log.Print(statusLines[j])
		fields := strings.Split(statusLines[j], ",")
		log.Print(len(fields))
		if len(fields) >= 4 {
			containers = append(containers, containerStatus{
				ID:     fields[0],
				Names:  fields[1],
				Status: fields[2],
				Ports:  fields[3],
			})
		}
	}
	setHeaders(w, "application/json")
	json.NewEncoder(w).Encode(containers)
}
