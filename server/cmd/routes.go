package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/zezking/random-traveler/handlers"
)

func setupRoutes(app *fiber.App) {
	app.Get("/users", handlers.GetUsers)
	app.Post("/user", handlers.AddUser)
}
