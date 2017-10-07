"use strict";
const dom = require('./dom');
let badgeData = [];

$.get('https://teamtreehouse.com/amberstuart3.json').done((data) => {
  badgeData = data.badges;
  dom.createDomString(getBadges());
}).fail((error) => {
  console.log(error);
});

const getBadges = () => {
  return badgeData;
};

module.exports = { getBadges };