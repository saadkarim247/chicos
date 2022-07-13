
const parse = (orders) =>{
    const wallmartObjTemplate = {
        "_id": "",
        "shippingInformation": [
            {
                "test": ""
            }
        ],
        "channel": 1,
        "orderNumber": "",
        "type": "",
        "orderDate": "",
        "locationNum": 24536,
        "associateId": "g245g2",
        "orderSubTotal": 123515,
        "orderDiscount": 12351235,
        "orderTotal": 36838,
        "taxTotal": 368368,
        "fees": [
            {
                "_id": "622110d4bf6903000979a2f4",
                "type": "v3vq",
                "value": 124,
                "id": "622110d4bf6903000979a2f4"
            }
        ],
        "currency": "USD",
        "statusCode": "ORDER_CREATED",
        "statusDescription": "test",
        "attributes": {
            "test": "test"
        },
        "promotions": [
            {
                "_id": "622110d4bf6903000979a2f5",
                "id": "vw45gw4",
                "code": "fq3gqg",
                "discountType": "PERCENTAGE_OFF",
                "amount": 3,
                "description": "test",
                "type": "PRICE_PROMOTION"
            }
        ],
        "customer": [
            {
                "_id": "622110d4bf6903000979a2f6",
                "name": {
                    "first": "Chicos",
                    "middle": "Customer",
                    "last": "Example"
                },
                "userId": "14gf13B9D5KY84TEFU4H0UFX",
                "accountId": "qf24f",
                "email": "email@email.com",
                "phone": {
                    "number": "5555-5555-5555",
                    "type": "MOBILE"
                },
                "id": "622110d4bf6903000979a2f6"
            }
        ],
        "payments": [
            {
                "billToAddress": {
                    "name": {
                        "first": "Chicos",
                        "middle": "Customer",
                        "last": "Example"
                    },
                    "phone": {
                        "number": "5555-5555-5555",
                        "type": "MOBILE"
                    },
                    "email": "email@email.com",
                    "address1": "street 1",
                    "address2": "street 2",
                    "address3": "street 3",
                    "address4": "street 4",
                    "city": "Boston",
                    "state": "example",
                    "country": "USA",
                    "postalCode": "1234",
                    "type": "bill address"
                },
                "shipToId": [
                    124
                ],
                "_id": "622110d4bf6903000979a2f7",
                "paymentDate": "01/01/2022",
                "billToId": 2623546,
                "paymentIdentifier": {
                    "cardIdentifier": 67956
                },
                "paymentProvider": "Stripe",
                "attributes": {
                    "requestedDate": "03/02/2022",
                    "expirationMonth": 12,
                    "expirationYear": 2022,
                    "referenceId": 1235,
                    "authCode": 3547383,
                    "authExpirationDate": "fq34f",
                    "softDecline": false,
                    "omniToken": "fq34q",
                    "payerId": "qv34vq",
                    "paypalToken": "fq3fq"
                },
                "paymentToken": {
                    "token": 3462
                },
                "paymentType": "credit card",
                "amount": 23452346,
                "currency": "USD",
                "conversion": 89578,
                "paymentStatus": "Paid",
                "id": "622110d4bf6903000979a2f7"
            }
        ],
        "items": [
            {
                "_id": "622110d4bf6903000979a2f8",
                "lineItemId": 76,
                "itemId": 2345,
                "sku": 234,
                "skuName": "34f34",
                "quantity": 1235,
                "fees": [
                    {
                        "_id": "622110d4bf6903000979a2f9",
                        "type": "cq4f",
                        "value": 123,
                        "id": "622110d4bf6903000979a2f9"
                    }
                ],
                "price": 100,
                "discount": 50,
                "currency": "USD",
                "shipToId": 12511,
                "tax": 2562,
                "promotions": [
                    {
                        "_id": "622110d4bf6903000979a2fa",
                        "id": "AEWFAWE",
                        "code": "dq23",
                        "amount": 12351,
                        "discountType": "PERCENTAGE_OFF",
                        "description": "d23d",
                        "type": "PRICE_PROMOTION"
                    }
                ],
                "total": 876,
                "UOM": "rf33",
                "backOrdered": true,
                "taxCode": "fq34",
                "attributes": {
                    "test": "test"
                },
                "status": "CANCELLED",
                "id": "622110d4bf6903000979a2f8"
            }
        ],
        "itemAdjustments": [
            {
                "_id": "fw45gw",
                "paymentToken": {
                    "token": "gq34gw43",
                    "type": "CARD_STRIPE"
                },
                "amount": 5,
                "success": true,
                "response": {
                    "test": "test"
                },
                "lineItems": {
                    "lineItemId": 65,
                    "quantity": 23
                },
                "type": "REFUND",
                "id": "fw45gw"
            }
        ],
        "orderAdjustments": [
            {
                "_id": "dqwed",
                "paymentToken": {
                    "token": "cq3cq",
                    "type": "CARD_STRIPE"
                },
                "amount": "5",
                "success": true,
                "response": {
                    "test": "test"
                },
                "type": "REFUND",
                "id": "dqwed"
            }
        ],
        "createdAt": "2022-03-03T19:02:44.811Z",
        "updatedAt": "2022-03-03T19:02:44.811Z",
        "__v": 0
    };
    const paymentsObjTemplate = {
      "billToAddress": {
          "name": {
              "first": "",
              "middle": "",
              "last": ""
          },
          "phone": {
              "number": "",
              "type": ""
          },
          "email": "",
          "address1": "",
          "address2": "",
          "address3": "",
          "address4": "",
          "city": "",
          "state": "",
          "country": "",
          "postalCode": "",
          "type": ""
      },
      "shipToId": [
          
      ],
      "_id": "",
      "paymentDate": "",
      "billToId": 0,
      "paymentIdentifier": {
          "cardIdentifier": 0
      },
      "paymentProvider": "",
      "attributes": {
          "requestedDate": "",
          "expirationMonth": 0,
          "expirationYear": 0,
          "referenceId": 0,
          "authCode": 0,
          "authExpirationDate": "",
          "softDecline": false,
          "omniToken": "",
          "payerId": "",
          "paypalToken": ""
      },
      "paymentToken": {
          "token": 0
      },
      "paymentType": "",
      "amount": 0,
      "currency": "",
      "conversion": 0,
      "paymentStatus": "",
      "id": ""
    };
    const itemsObjTemplate =  {
        "_id": "622110d4bf6903000979a2f8",
        "lineItemId": 76,
        "itemId": 2345,
        "sku": 234,
        "skuName": "34f34",
        "quantity": 1235,
        "fees": [
            {
                "_id": "622110d4bf6903000979a2f9",
                "type": "cq4f",
                "value": 123,
                "id": "622110d4bf6903000979a2f9"
            }
        ],
        "price": 100,
        "discount": 50,
        "currency": "USD",
        "shipToId": 12511,
        "tax": 2562,
        "promotions": [
            {
                "_id": "622110d4bf6903000979a2fa",
                "id": "AEWFAWE",
                "code": "dq23",
                "amount": 12351,
                "discountType": "PERCENTAGE_OFF",
                "description": "d23d",
                "type": "PRICE_PROMOTION"
            }
        ],
        "total": 876,
        "UOM": "rf33",
        "backOrdered": true,
        "taxCode": "fq34",
        "attributes": {
            "test": "test"
        },
        "status": "CANCELLED",
        "id": "622110d4bf6903000979a2f8"
    };
    const itemAdjustmentsTemplate = {
        "_id": "fw45gw",
        "paymentToken": {
            "token": "gq34gw43",
            "type": "CARD_STRIPE"
        },
        "amount": 5,
        "success": true,
        "response": {
            "test": "test"
        },
        "lineItems": {
            "lineItemId": 65,
            "quantity": 23
        },
        "type": "REFUND",
        "id": "fw45gw"
    };

    let wallmartArray = [];

    orders.forEach(order => {
        let wallmartObj = wallmartObjTemplate;
  
        // wallmartObj.shippingInformation.test       //Is it correct format? what is test?
        wallmartObj.channel = order?.channel;
        wallmartObj.orderNumber = order?.orderId;
        // wallmartObj.type = ""                     // Can't find in OMS Order
        // wallmartObj.orderDate = ""                // Can't find in OMS Order
        // wallmartObj.locationNum = ""              // Can't find in OMS Order
        // wallmartObj.associateId = ""              // Can't find in OMS Order
        // wallmartObj.orderSubTotal = 0             // Can't find in OMS Order          
        // wallmartObj.orderDiscount = 0             // Can be calculated by adding discounts in all items
        wallmartObj.orderTotal = order?.orderTotal;
        wallmartObj.taxTotal = order?.taxTotal;
        // wallmartObj.fees._id =                    Can't find in OMS Order
        // wallmartObj.fees.type =
        // wallmartObj.fees.value =
        // wallmartObj.fees.id =
        wallmartObj.currency = order?.orderCurrency;
        wallmartObj.statusCode = order?.status
        wallmartObj.statusDescription = order?.statusLog;
        // wallmartObj.attributes.test =              Is this correct format? can't find test attribute
        // wallmartObj.promotions._id =               
        // wallmartObj.promotions.code
        // wallmartObj.promotions.discountType         Can't find Promotion related data
        // wallmartObj.promotions.amount
        // wallmartObj.promotions.description
        // wallmartObj.promotions.type
        wallmartObj.customer._id = order?.customerUserId;       //Not Sure since there's no proper Customer Object
        // wallmartObj.customer.name.first = 
        // wallmartObj.customer.name.middle
        // wallmartObj.customer.name.last
        wallmartObj.customer.userId = order?.customerUserId;
        // wallmartObj.customer.accountId =                        Can't find in OMS Order
        wallmartObj.customer.email = order?.customerEmail;
        wallmartObj.customer.phone.number = order?.customerPhone?.number;
        wallmartObj.customer.phone.type = order?.customerPhone?.kind;
        wallmartObj.customer.id = order?.customerUserId;      //Not Sure since there's no proper Customer Object
        
        let paymentsArray = [];
        order?.payments?.forEach(payment => {
          let paymentsObj = paymentsObjTemplate;
  
          paymentsObj.billToAddress.name.first = payment.billToAddress.name.first;
          // paymentsObj.billToAddress.name.middle = "";       Can't find in OMS Order 
          paymentsObj.billToAddress.name.last = payment.billToAddress.name.last;
          paymentsObj.billToAddress.phone.number = payment.billToAddress.phone.number;
          paymentsObj.billToAddress.phone.type = payment.billToAddress.phone.kind;
          paymentsObj.billToAddress.email = payment.billToAddress.email;
          paymentsObj.billToAddress.address1 = payment.billToAddress.street1;
          paymentsObj.billToAddress.address2 = payment.billToAddress.street2;
          // paymentsObj.billToAddress.address3 = "";           Can't find in OMS Order
          // paymentsObj.billToAddress.address4 = "";           Can't find in OMS Order
          paymentsObj.billToAddress.city = payment.billToAddress.city;
          paymentsObj.billToAddress.state = payment.billToAddress.state;
          paymentsObj.billToAddress.country = payment.billToAddress.country;
          paymentsObj.billToAddress.postalCode = payment.billToAddress.zipCode;
          // paymentsObj.billToAddress.type = ""
          paymentsObj.shipToId.push(payment.billToAddress.shipToId);
          paymentsObj._id = payment._id;
          // paymentsObj.paymentDate =                      Can't find in OMS Order
          // paymentsObj.billToId =                         Can we use shipToId from OMS orders?
          paymentsObj.paymentIdentifier.cardIdentifier = payment.paymentIdentifier.cardIdentifier;
          paymentsObj.paymentProvider =  payment.paymentKind;   //Needs confirmation
          // paymentsObj.attributes.requestedDate =             Can't find in OMS Order
          // paymentsObj.attributes.expirationMonth =           Can't find in OMS Order
          // paymentsObj.attributes.expirationYear =            Can't find in OMS Order
          // paymentsObj.attributes.referenceId =               Can't find in OMS Order
          // paymentsObj.attributes.referenceId =               Can't find in OMS Order
          // paymentsObj.attributes.authCode =                  Can't find in OMS Order
          // paymentsObj.attributes.authExpirationDate =        Can't find in OMS Order
          // paymentsObj.attributes.softDecline =               Can't find in OMS Order
          // paymentsObj.attributes.omniToken =                 Can't find in OMS Order
          // paymentsObj.attributes.payerId =                   Can't find in OMS Order
          // paymentsObj.attributes.paypalToken =               Can't find in OMS Order
          // paymentsObj.paymentToken.token =                   Can't find in OMS Order
          paymentsObj.paymentType = payment.paymentMethod;
          paymentsObj.amount = payment.amount;
          paymentsObj.currency = payment.currency;
          paymentsObj.conversion = payment.conversion;
          paymentsObj.paymentStatus = payment.paymentStatus;
          paymentsObj.id = payment.id;
  
          paymentsArray.push(paymentsObj);
        });
        wallmartObj.payments = paymentsArray;
  
        let itemsArray = [];
        order?.items.forEach(item => {
          let itemsObj = itemsObjTemplate;
  
          itemsObj._id = item._id;
          itemsObj.lineItemId = item.lineItemId;
          itemsObj.itemId = item.itemId;
          itemsObj.sku = item.sku;
          // itemsObj.skuName =                                 Can't find in OMS Order
          itemsObj.quantity = item.quantity;
          // itemsObj.fees._id =                                Can't find in OMS Order
          // itemsObj.fees.type =                               Can't find in OMS Order
          // itemsObj.fees.value =                              Can't find in OMS Order
          // itemsObj.fees.id =                                 Can't find in OMS Order
          itemsObj.price = item.price;
          itemsObj.discount = item.discount;
          itemsObj.currency = item.currency;
          itemsObj.shipToId = item.shipToId?.length ? item.shipToId[0] : NaN;
          itemsObj.tax = item.estimatedTax;       //Needs confirmation
          // itemsObj.promotions._id = 
          // itemsObj.promotions.id = 
          // itemsObj.promotions.code = 
          // itemsObj.promotions.amount = 
          // itemsObj.promotions.discountType = 
          // itemsObj.promotions.description = 
          // itemsObj.promotions.type = 
          itemsObj.total = item.total;
          // itemsObj.UOM =  
          // itemsObj.backOrdered = 
          // itemsObj.taxCode = 
          // itemsObj.attributes.test = 
          // itemsObj.status = 
          itemsObj.id = item.id;
  
          itemsArray.push(itemsObj);
        });
        wallmartObj.items = itemsArray;
  
        // wallmartObj.itemAdjustments            Both objects or related data not found in OMS order
        // wallmartObj.orderAdjustments
  
        wallmartObj.createdAt = order?.createdAt;
        wallmartObj.updatedAt = order?.updatedAt;
        wallmartArray.push(wallmartObj);
      });

      return wallmartArray;

};


module.exports = { parse };