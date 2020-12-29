'use strict';

let map2 = {
  "978-1-60309-452-8": `A Letter to Jo`,
  "978-1_60309_444_3": `Lupus`,
  "978-1-60309-444-3": `Red Panda and Moon Bear`,
  "978-1-60309-461-0": `The Lab`
}
console.log(map2);

//Print all the keys
for (let keys in map2) {
  console.log(keys);
}

//Print all the values
for (let values in map2) {
  console.log(values);
}