package controllers

import (
	"net/http"
)

func UserLogin(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Yupp this is also working...."))
}

func UsersRegister(w http.ResponseWriter, r *http.Request) {

	w.Write([]byte("Yupp this is login...."))
}


func GetUsers(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("You get the users here"))
}


func GetUser(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("You get the users here based on ID"))
}