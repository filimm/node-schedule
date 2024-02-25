const express = require('express');
const router = express.Router(); // para diferenciar controllers do principal usa a constante router

router.get("/hello", (req,res) => {
    console.log("hello world!")
})