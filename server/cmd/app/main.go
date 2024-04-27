package main

import (
	"fmt"
	"net/http"
	"os"

	routes "dhanasaitholeti/builder.io/internal/app/routes"
)

func main() {

	port  := os.Getenv("PORT")

	if port=="" {
		port="8000"
	}

	fmt.Println("Dhanasai Tholeti")

	r:= routes.RouteHandler()


	http.ListenAndServe(":"+port, r)

}
