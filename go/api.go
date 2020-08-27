package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type share struct {
	Code    string `json:"code"`
	Mutable bool   `json:"mutable"`
}

func setHeaders(w http.ResponseWriter, contentType string) {
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
	w.Header().Set("Content-Type", contentType)
}

const mySQLInfo = "admin:password@(127.0.0.1:3306)/code_share"

func getByID(w http.ResponseWriter, r *http.Request) {
	const stmt = "SELECT code, mutable FROM shares WHERE share_id = ?"
	snip := share{"", false}

	db, _ := sql.Open("mysql", mySQLInfo)
	db.QueryRow(stmt, r.URL.Query().Get("id")).Scan(&(snip.Code), &(snip.Mutable))
	db.Close()

	setHeaders(w, "application/json")
	json.NewEncoder(w).Encode(snip)
}

func create(w http.ResponseWriter, r *http.Request) {
	const stmt = "INSERT shares (code, mutable) VALUES ( ?, ?)"
	mutability := false
	if r.PostFormValue("mutable") == "1" {
		mutability = true
	}

	db, _ := sql.Open("mysql", mySQLInfo)
	result, _ := db.Exec(stmt, r.PostFormValue("code"), mutability)
	db.Close()

	shareID, _ := result.LastInsertId()
	setHeaders(w, "text/plain")
	fmt.Fprintf(w, "%d", shareID)
}

func main() {

	http.HandleFunc("/get_by_id", getByID)

	http.HandleFunc("/create", create)

	http.ListenAndServe(":8081", nil)

}
