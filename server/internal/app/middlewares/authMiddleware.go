package middlewares

import "net/http"

func Authenticate(h http.Handler) http.Handler {
	return h
}