package main

import (
	"angular-code-share/api/handlers"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/create", handlers.Create)

	http.HandleFunc("/get_by_id", handlers.GetByID)

	http.HandleFunc("/update_by_id", handlers.UpdateByID)

	http.HandleFunc("/get_status_for_all", handlers.GetStatusForAll)

	http.HandleFunc("/stop_container_by_id", handlers.StopContainerByID)

	http.HandleFunc("/submit_build_order", handlers.SubmitBuildOrder)

	err := http.ListenAndServe(":8081", nil)
	if err != nil {
		log.Fatal(err)
	}

}
