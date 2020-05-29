'use strict';

const { Router } = require('express');
const router = new Router();
// const routeGuard = require('./../middleware/route-guard');

// Landing Page
router.get('/', (req, res, next) => {
  res.render('index');
});

// Supermarket's Categories
router.get('/storelist', (req, res, next) => {
  res.render('stores/store-category');
});

// Supermarkets for specific category
router.get('/storelist/supermaket', (req, res, next) => {
  res.render('stores/store-list');
});

// Supermarket's Page
router.get('/storelist/supermaket/supermakertId', (req, res, next) => {
  res.render('stores/store-view');
});

// Product's Categories
router.get('/storelist/supermaket/supermakertId/categories', (req, res, next) => {
  res.render('stores/product/product-category');
});

// Products for specific category
router.get('/storelist/supermaket/supermakertId/categoryId/products', (req, res, next) => {
  res.render('stores/products/product-list');
});

// Shopping List
// router.get('/storelist/supermaket/supermakertId', (req, res, next) => {
//   res.render('stores/products/product-view');
// });

module.exports = router;
