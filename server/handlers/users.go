package handlers

import (
	"github.com/gofiber/fiber/v2"
	database "github.com/zezking/random-traveler/db"
	"github.com/zezking/random-traveler/models"
)

func GetUsers(c *fiber.Ctx) error {

	user := new(models.User)
	result := database.DB.Db.Find(&user)

	if err := result.Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
	}

	return c.Status(200).JSON(user)
}

func AddUser(c *fiber.Ctx) error {
	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": err.Error()})
	}

	database.DB.Db.Create(&user)

	return c.Status(200).JSON(user)
}
