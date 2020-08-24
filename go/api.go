package main

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type share struct {
	code    string `json:"code"`
	mutable bool   `json:"mutable"`
}

func allowCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
}

func main() {

	/*
		http.HandleFunc("/get_by_id", func(w http.ResponseWriter, r *http.Request) {
			sql := "SELECT code, mutable FROM shares WHERE share_id = ?"
			code := ""
			mutability := false
			err := db.QueryRow(sql, r.URL.Query().Get("id")).Scan(&code, &mutability)
			log.Printf(err.Error())
			snippet := share{
				code:    code,
				mutable: mutability,
			}
			allowCORS(w)
			json.NewEncoder(w).Encode(snippet)
		})
	*/

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

		allowCORS(w)
		fmt.Fprintf(w, "%d", shareID)
	})

	http.ListenAndServe(":8081", nil)

}
