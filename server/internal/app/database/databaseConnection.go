package database

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func DBInstance() *mongo.Client {
	err := godotenv.Load(".env")
	if err!=nil {
		log.Fatal("Err loading .env file")
	}

	MongoDb := os.Getenv("DATABASE_URL");

	ctx,cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(MongoDb))

	if err!=nil {
		log.Fatal(err) 
	}

	fmt.Println("Connected to MongoDb")

	return client
}


var Client *mongo.Client = DBInstance();



func OpenCollection(client *mongo.Client, collectionName string) *mongo.Collection {
	var collection *mongo.Collection = client.Database("dbname").Collection(collectionName)
	return collection
}