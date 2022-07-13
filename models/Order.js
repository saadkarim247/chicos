const mongoose = require("mongoose");

const schema = mongoose.Schema({
    
        "_id": {
          "type": "ObjectId"
        },
        "isSugarRefunded": {
          "type": "Boolean"
        },
        "tags": {
          "type": [
            "String"
          ]
        },
        "cartId": {
          "type": "ObjectId"
        },
        "customerUserId": {
          "type": "ObjectId"
        },
        "attributes": {
          "type": "Array"
        },
        "customerEmail": {
          "type": "String"
        },
        "customerPhone": {
          "number": {
            "type": "String"
          },
          "kind": {
            "type": "String"
          }
        },
        "orderCurrency": {
          "type": "String"
        },
        "orderTotal": {
          "type": "Number"
        },
        "taxTotal": {
          "type": "Number"
        },
        "channel": {
          "type": "Number"
        },
        "status": {
          "type": "String"
        },
        "statusLog": {
          "type": "String"
        },
        "orderReference": {
          "type": "String"
        },
        "orderId": {
          "type": "String"
        },
        "shipTo": {
          "type": [
            "Mixed"
          ]
        },
        "items": {
          "type": [
            "Mixed"
          ]
        },
        "shipments": {
          "type": [
            "Mixed"
          ]
        },
        "payments": {
          "type": [
            "Mixed"
          ]
        },
        "revision": {
          "type": "Number"
        },
        "totalQuantity": {
          "type": "Number"
        },
        "statusDescriptions": {
          "type": "Array"
        },
        "events": {
          "type": "Array"
        },
        "pickups": {
          "type": "Array"
        },
        "partialRefunds": {
          "type": "Array"
        },
        "createdAt": {
          "type": "Date"
        },
        "updatedAt": {
          "type": "Date"
        },
        "__v": {
          "type": "Number"
        }
      
});

module.exports = mongoose.model("Order", schema);