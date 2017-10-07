"use strict";
const badges = require('./xhr');


$('.btn-info').click(() => {
  $('body').addClass('dance');
  $('.badgeCard').removeClass('flip').addClass('rubberBand infinite');
});

const createDomString = (badgeData) => {
  let badgeString = '';
  for (let i = 0; i < badgeData.length; i++) {
    let newBadge = `<div class="badgeCard animated flip">      
                      <div><img class="badgeImage" src="${badgeData[i].icon_url}"></div>
                      </div>`;
    badgeString += newBadge;
  }
  printToDom(badgeString);
};

const printToDom = (badgeString) => {
  $('#badge-container').html(badgeString);
};

module.exports = { createDomString, printToDom };