package main

import (
	"angular-code-share/api/handlers"
	"net/http"
)

func main() {
	http.HandleFunc("/create", handlers.Create)

	http.HandleFunc("/get_by_id", handlers.GetByID)

	http.HandleFunc("/update_by_id", handlers.UpdateByID)

	http.HandleFunc("/get_status_for_all", handlers.GetStatusForAll)

	http.ListenAndServe(":8081", nil)

}
