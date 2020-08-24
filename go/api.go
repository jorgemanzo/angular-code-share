package main

import (
    "log"
    "net/http"
    "encoding/json"
)

type Share struct {
    Code string `json:"code"`
    Mutable bool `json:"mutable"`
}

func main() {
    http.HandleFunc("/create", func(w http.ResponseWriter, r *http.Request) {
        share := Share {
            Code: "printf()",
            Mutable: false,
        }
        json.NewEncoder(w).Encode(share)
    })

    log.Fatal(http.ListenAndServe(":8081", nil))
}