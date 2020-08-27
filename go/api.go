package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type Share struct {
	Code    string `json:"code"`
	Mutable bool   `json:"mutable"`
}

func setHeaders(w http.ResponseWriter, contentType string) {
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
	w.Header().Set("Content-Type", contentType)
}

func main() {

	http.HandleFunc("/get_by_id", func(w http.ResponseWriter, r *http.Request) {
		db, _ := sql.Open("mysql", "admin:password@(127.0.0.1:3306)/code_share")

		const sql string = "SELECT code, mutable FROM shares WHERE share_id = ?"
		snip := Share{"", false}
		db.QueryRow(sql, r.URL.Query().Get("id")).Scan(&(snip.Code), &(snip.Mutable))

		db.Close()

		log.Printf("{%s, %v}\n", snip.Code, snip.Mutable)
		setHeaders(w, "application/json")
		json.NewEncoder(w).Encode(snip)
	})

	http.HandleFunc("/create", func(w http.ResponseWriter, r *http.Request) {
		db, err := sql.Open("mysql", "admin:password@(127.0.0.1:3306)/code_share")

		if err != nil {
			panic(err)
		}

		mutability := false
		if r.PostFormValue("mutable") == "1" {
			mutability = true
		}

		sql := "INSERT shares (code, mutable) VALUES ( ?, ?)"
		result, _ := db.Exec(sql, r.PostFormValue("code"), mutability)
		shareID, _ := result.LastInsertId()

		db.Close()

		setHeaders(w, "text/plain")
		fmt.Fprintf(w, "%d", shareID)
	})

	http.ListenAndServe(":8081", nil)

}
