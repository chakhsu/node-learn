'use strict';

const detailItemArray = ['key', 'count', 'getting', 'setting', 'removing'];

const detailItem = {
  "count": 1081,
  "removing": 0,
  "setting": 0,
  "key": "debug",
  "getting": 1081
};

// let i;
// for (i = 0; i < detailItemArray.length; i++) {
//   console.log(`${detailItemArray[i]} : ${detailItem[detailItemArray[i]]}`);
// }

detailItemArray.map( (item) => {
  console.log(`${item} : ${detailItem[item]}`);
});