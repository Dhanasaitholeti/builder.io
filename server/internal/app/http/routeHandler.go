package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func RouteHandler() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Get("/",func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Dhanasai Server is working.."))
	})	

	r.Mount("/user", UserRoutes())


	return r
}