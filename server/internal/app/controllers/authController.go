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

