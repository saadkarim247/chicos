// const mongoose = require("mongoose");
// const app = require("./server");

// const cron = require("node-cron");
// const dotenv = require("dotenv");
// const axios = require("axios");
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const logger = require("./config/logger.cjs");
const express = require("express");
// const orderParser = require("./utils/orderParser.js");

// dotenv.config();

const app = express();

app.use((req,res,next) => {
  logger.info(req);

  next();
  
})

app.get("/", (req,res) => {
  res.send("Landing page!");
})
app.post('/customer/create', (req,res) => {
  res.send("create_customer");
})

app.get('/customer/:id', (req,res) => {
  res.send(req.params.id);
})

app.post("/payment", (req,res) => {
  res.send("Initiating payment");
})

app.post("/payment/authorize-with-instrument", (req,res) => {
  res.send("Authorize payments!");
})

app.get("/payment/:id" , (req,res) => {
  res.send(req.params.id);
})

app.get("/payment/:id/void" , (req,res) => {
  res.send(`Payment id: ${req.params.id}  has been voided!`);
  
})

app.post("/payment/:id/capture " , (req,res) => {
  res.send(`Payment id: ${req.params.id}  has been captured!`);
})

app.post("/payment/:id/refund " , (req,res) => {
  res.send(`Payment id: ${req.params.id}  has been refunded!`);
})
// mongoose
//   .connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true })
//   .then(() => {
//     app.listen(5000, () => {
//       console.log("Server has started!");
//     });
//   });

// //DEFAULT DELAY 5 SECONDS
// let seconds = process.env.SCHEDULAR_DELAY_SECONDS || 5;

// var data = JSON.stringify({
//   offset: 0,
//   limit: 5,
//   sortBy: "createdAt",
//   sortDirection: "desc",
//   filters: {
//     date: {
//       gte: "2020-05-03T00:00:00.000Z",
//       lte: "2021-12-30T23:59:59.999Z",
//     },
//     status: [
//       "ORDER_CREATED",
//       "ORDER_CONFIRMED",
//       "ORDER_CANCELLED",
//       "ORDER_PARTIALLY_SHIPPED",
//       "ORDER_SHIPPED",
//       "ORDER_PARTIALLY_DELIVERED",
//       "ORDER_DELIVERED",
//       "ORDER_RETURNED",
//       "ORDER_PARTIALLY_RETURNED",
//       "ORDER_PAYMENT_AUTHORIZED",
//       "ORDER_PAYMENT_INVALID",
//     ],
//   },
// });

// var get_orders_config = {
//   method: "post",
//   url: "https://uat01-apigw.unilacrosse.fabric.zone/api-order/orders/query",
//   headers: {
//     "x-site-context":
//       '{"date": "2022-04-08T18:24:28.728Z", "channel": 12, "account":"60f9d3d2616c7b0008862c6a", "stage":"sandbox"}',
//     "x-api-key": "mJhr9nSQlv8TMbTjsHy9O2zUkdriXhQT5aN0Otlv",
//     "Content-Type": "application/json",
//   },
//   data: data,
// };

// const getOrdersData = async () => {
//   axios(get_orders_config)
//     .then(function (response) {
//       //Main Array for output orders after parsing/mapping
//       const parsedOrders = orderParser.parse(response?.data.orders);

//       //TODO
//       //implementation of sending wallmart orders to endpoint
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// //SCHEDULAR FOR ORDERS DATA
// cron.schedule(`*/${seconds} * * * * *`, getOrdersData);

//FUNCTION FOR LOGGING REQUEST DETAILS
// const logger2 = (log_details, log_type) => {
//   const path = "./logs.txt";

//   if (!fs.existsSync(path)) {
//     fs.open("logs.txt", "w", function (err, file) {
//       if (err) throw err;
//     });
//   }

//   const ERROR = {
//     Date: new Date().toUTCString(),
//     log_type: log_type,
//     log_details: log_details,
//   };
//   // const check = JSON.stringify(ERROR);
//   // console.log(check);
//   fs.appendFile("logs.txt", JSON.stringify(ERROR) + "\n", function (err) {
//     if (err) throw err;
//     // console.log('Updated!');
//   });
// };
const PORT = 6010
app.listen(PORT, () => {
  // Put some preprocessing here.logger("info", JSON.stringgy(req))
  // logger.info(`This is my nameeeeee`);
  // next();
  console.log(`Server listening on ${PORT}`);
});
