"use strict";
const badges = require('./xhr');


$('.btn-info').click(() => {
  $('body').addClass('dance');
  $('.badgeCard').removeClass('flip').addClass('rubberBand infinite');
  $('.btn-info').addClass('hidden');
  $('.byeBtn').removeClass('hidden');
});

$('.byeBtn').click(() => {
  $('.badgeCard').removeClass('rubberBand infinite').addClass('bounceOut');
  $('.btn-info').removeClass('hidden');
  $('.byeBtn').addClass('hidden');
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