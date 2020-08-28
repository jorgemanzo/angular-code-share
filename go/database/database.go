package database

import (
	"database/sql"
	"log"

	// Importing the MySQL driver as per usage
	// docs https://github.com/go-sql-driver/mysql#usage
	_ "github.com/go-sql-driver/mysql"
)

const mySQLInfo = "admin:password@(127.0.0.1:3306)/code_share"
const insertWithValues = "INSERT shares (code, mutable) VALUES ( ?, ?)"
const selectByID = "SELECT code, mutable FROM shares WHERE share_id = ?"
const updateByID = "UPDATE shares SET code = ?, mutable = ? WHERE share_id = ?"

// GetShareByID selects a share from the database, returned
// as a *sql.Row.
func GetShareByID(id string) *sql.Row {
	db, openErr := sql.Open("mysql", mySQLInfo)
	if openErr != nil {
		log.Fatal("GetShareByID(): ", openErr)
	}
	result := db.QueryRow(selectByID, id)
	db.Close()
	return result
}

// InsertShare will perform a database insert with the
// given data. Will return an (int64, error) containing
// the new record's id and any occured errors.
func InsertShare(code string, mutable bool) (int64, error) {
	db, openErr := sql.Open("mysql", mySQLInfo)
	if openErr != nil {
		log.Fatal("InsertShare(): ", openErr)
	}
	result, err := db.Exec(insertWithValues, code, mutable)
	db.Close()
	if err != nil {
		log.Fatal("InsertShare(): ", err)
	}
	return result.LastInsertId()
}

// UpdateShareByID will perform a database update on a share, setting
// the given values on the table row, matching on the share's id.
func UpdateShareByID(code string, id string, mutable bool) (int64, error) {
	db, openErr := sql.Open("mysql", mySQLInfo)
	if openErr != nil {
		log.Fatal("UpdateShareByID(): ", openErr)
	}
	result, err := db.Exec(updateByID, code, mutable, id)
	db.Close()
	if err != nil {
		log.Fatal("UpdateShareByID(): ", err)
	}
	return result.RowsAffected()
}
