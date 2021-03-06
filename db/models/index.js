"use strict";

const Product = require("./product");
const Review = require("./review");
const User = require("./user");

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, User};
