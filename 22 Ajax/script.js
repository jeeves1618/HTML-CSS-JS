"use strict";
const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/name/spain");
req.send();
req.addEventListener("load", function () {
  const [data] = JSON.parse(req.responseText);
  console.log(data);
});
