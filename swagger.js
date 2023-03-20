const m2s = require('mongoose-to-swagger')
const User = require('.models/user.model')
const Product = require('./models/product.model')

exports.options = {
    "definitions": {
        User: m2s(User),
        Product: m2s(Product)
    },
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "description": "Products Project Application API",
        "title": "Products CRUD API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "Users",
            "description": "API for users"

        },
        {
            "name": "Users and Products",
            "description": "API for users and their products"
        }
    ],
    "schemes": ["http"],
    "consumes": ["applicatio/json"],
    "produces": ["application/json"],
    "paths": {
        "/api/user/findAll": {
            "get":{
                "tags": [
                    "Users"
                ],
                "parameters":[
                    {
                        "name":"username",
                        "in":"path",
                        "required": true,
                        "description":"Username of user",
                    }
                ],
                "summary": "Get all users from system",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref":"#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/create":{
            "post": {
                "tags": [
                    "Users"
                ],
                "description": "Create new user in app",
                "schema": {
                    "type": "object",
                    "parameters": [
                    {
                        "username": { "type": string },
                        "password": { "type": string },
                        "name": { "type": string },
                        "surname": { "type" : string },
                        "email" : { "type" : string },
                        "address": { 
                            "type": "object",
                            "properties": {
                                "area": { "type" : string },
                                "road": { "type" : string }
                            }
                        },
                        "phone": {
                            "type": "array",
                            "items": {
                                "type"
                            }
                        }
                    }
                ]
            }
        }
    }
}