package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"

	"dhanasaitholeti/builder.io/internal/app/controllers"
)

func UserRoutes() http.Handler {
	r := chi.NewRouter()

	r.Post("/login",controllers.UserLogin)
	r.Post("/register",controllers.UsersRegister)
	
	return r
}
