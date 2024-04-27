package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"

	"dhanasaitholeti/builder.io/internal/app/controllers"
	"dhanasaitholeti/builder.io/internal/app/middlewares"
)

func UserRoutes() http.Handler {
	r := chi.NewRouter()

	r.Post("/login",controllers.UserLogin)
	r.Post("/register",controllers.UsersRegister)

	r.Use(middlewares.Authenticate)

	r.Get("/:id",controllers.UserLogin)
	r.Get("/",controllers.UserLogin)


	return r
}
