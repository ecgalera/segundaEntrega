import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";

import viewsRouter from "./router/viewsRouter/viewsRouter.js";
import productRouter from "./router/mongodb/productRouter.js";
import cartRouter from "./router/mongodb/cartRouter.js";
import ProductsRouter from "./router/fs_router/ProductRouter.js"
import cartsRouter from "./router/fs_router/cartRouter.js"


const app = express();
const connection = mongoose.connect("mongodb+srv://egalera:123@cluster0.y0qkwla.mongodb.net/trabInteg?retryWrites=true&w=majority")

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({extended:true}));


app.use("/", viewsRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/carts", cartsRouter);

const server = app.listen(8080, ()=>{
    console.log("Listen on port: 8080")
});

