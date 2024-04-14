package main

import (
	"fmt"
	"net/http"

	routes "dhanasaitholeti/builder.io/internal/app/http"
)

func main() {
	fmt.Println("Dhanasai Tholeti")

	r:= routes.RouteHandler()


	http.ListenAndServe(":8000", r)

}