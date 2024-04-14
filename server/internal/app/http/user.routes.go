package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"

	"dhanasaitholeti/builder.io/internal/app/controllers"
)

func UserRoutes() http.Handler {
	r := chi.NewRouter()
	    // Define authentication routes
		r.Post("/login",controllers.LoginHandler)
		r.Post("/register",controllers.RegisterHandler)
	
		return r
}
