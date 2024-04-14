package controllers

import "net/http"

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Yupp this is also working lol...."))
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Yupp this is login...."))
}
