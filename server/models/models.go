package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id string `json:"id" gorm:"text;not null;default:null"`
	Name string `json:"name" gorm:"text;not null;default:null"`
	Email string `json:"email" gorm:"text;not null;default:null"`
	Password string `json:password gorm:"text;not null;default:null"`
}