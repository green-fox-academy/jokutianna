'use strict'

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let replaceUrl: string = url.replace('bots','odds');
//let firstPartUrl: string = replaceUrl.slice(0,7) + ':';
let newUrl: string = replaceUrl.replace('https//','https//:');
console.log(newUrl);