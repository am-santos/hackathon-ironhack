'use strict';

const express = require('express');


const storeRouter = new express.Router();


storeRouter.get('/create', (req, res) => {
  res.render('stores/create');
});

storeRouter.get('/list', (req, res) => {
  res.render('stores/list');
});

module.exports = storeRouter;
