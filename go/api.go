package main

import (
	"encoding/json"
	"net/http"
	// _ "github.com/go-sql-driver/mysql"
)

type Share struct {
	Code    string `json:"code"`
	Mutable bool   `json:"mutable"`
}

func allowCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
}

func main() {
	// db, err := sql.Open("mysql", "admin:password@(127.0.0.1:3306)/code_share")

	// if err != nil {
	// 	panic(err)
	// }

	http.HandleFunc("/create", func(w http.ResponseWriter, r *http.Request) {
		// log.Fatal(r.FormValue("code"))
		share := Share{
			Code:    "printf()",
			Mutable: false,
		}
		allowCORS(w)
		json.NewEncoder(w).Encode(share)
	})

	http.ListenAndServe(":8081", nil)

}
