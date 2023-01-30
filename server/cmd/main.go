package main

import (
	"github.com/gofiber/fiber/v2"
	database "github.com/zezking/random-traveler/db"
)

func main() {
	database.ConnectDb()
	app := fiber.New()

	setupRoutes(app)

	app.Listen(":3000")
}
