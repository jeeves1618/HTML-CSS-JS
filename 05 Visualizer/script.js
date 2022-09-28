"use strict";
import weights from "./weights.json" assert { type: "json" };
let politicalStabilityIndex;
let yuanExRate;
let goodsAndServices;
let gdpGrowth;
let gdpPerCapita;
let inflation;
let unemployment;
let fdiGDP;
let cpiIndex;

let formatAmount = function (amount, currencySymbol) {
  let amountString = amount; //.toFixed(2).toString();
  let lengthOfString = amountString.length;
  let amountFormatter = [
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
    ",",
    "n",
    "n",
    "n",
  ];
  let amountFormatterItr = 0;
  let cAmountString = " ";
  let charAtString;

  for (let i = lengthOfString - 1; i >= 0; i--) {
    if (
      amountFormatter[amountFormatterItr] === "n" ||
      amountFormatter[amountFormatterItr] === "."
    ) {
      charAtString = amountString.charAt(i);
      console.log(
        "for" +
          " " +
          i +
          " " +
          charAtString +
          " " +
          amountFormatterItr +
          " " +
          amountFormatter[amountFormatterItr]
      );
    } else {
      console.log("comma");
      charAtString = amountFormatter[amountFormatterItr];
      cAmountString = charAtString + cAmountString;
      charAtString = amountString.charAt(i);
      amountFormatterItr++;
    }
    cAmountString = charAtString + cAmountString;
    amountFormatterItr++;
  }
  cAmountString = currencySymbol + cAmountString;
  return cAmountString;
};
// Setting the slider value for Consumer Price Index
let slider = document.getElementById("cpiRange");
let output = document.getElementById("cpiRangeValue");
output.innerHTML = slider.value;
cpiIndex = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  cpiIndex = this.value;
};

// Setting the slider value for Foreign Direct Investment as % of GDP
let slider2 = document.getElementById("fdiGDPRange");
let output2 = document.getElementById("fdiGDPRangeValue");
output2.innerHTML = slider2.value + `%`;
fdiGDP = slider2.value / 100;
// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function () {
  output2.innerHTML = this.value + `%`;
  fdiGDP = this.value / 100;
};

// Setting the slider value for Unemployment Percentage
let slider3 = document.getElementById("unemploymentRange");
let output3 = document.getElementById("unemploymentRangeValue");
output3.innerHTML = slider3.value + `%`;
unemployment = slider3.value / 100;
// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function () {
  output3.innerHTML = this.value + `%`;
  unemployment = this.value / 100;
};

// Setting the slider value for Annual Inflation Percentage
let slider4 = document.getElementById("inflationRange");
let output4 = document.getElementById("inflationRangeValue");
output4.innerHTML = slider4.value + `%`;
inflation = slider4.value / 100;
// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function () {
  output4.innerHTML = this.value + `%`;
  inflation = this.value / 100;
};

// Setting the slider value for GDP per Capita
let slider5 = document.getElementById("gdpPerCapitaRange");
let output5 = document.getElementById("gdpPerCapitaRangeValue");
output5.innerHTML = formatAmount(slider5.value, "$");
gdpPerCapita = slider5.value;
// Update the current slider value (each time you drag the slider handle)
slider5.oninput = function () {
  output5.innerHTML = formatAmount(this.value, "$");
  gdpPerCapita = this.value;
};

// Setting the slider value for GDP growth in Percentage
let slider6 = document.getElementById("gdpGrowthRange");
let output6 = document.getElementById("gdpGrowthRangeValue");
output6.innerHTML = slider6.value + `%`;
gdpGrowth = slider6.value / 100;
// Update the current slider value (each time you drag the slider handle)
slider6.oninput = function () {
  output6.innerHTML = this.value + `%`;
  gdpGrowth = this.value / 100;
};

// Setting the slider value for Exports of Goods and Services
let slider7 = document.getElementById("goodsAndServicesRange");
let output7 = document.getElementById("goodsAndServicesRangeValue");
output7.innerHTML = slider7.value + " Trillion USD";
goodsAndServices = slider7.value * 1000000000000;

// Update the current slider value (each time you drag the slider handle)
slider7.oninput = function () {
  output7.innerHTML = this.value + " Trillion USD";
  goodsAndServices = this.value * 1000000000000;
};

// Setting the slider value for Exchange rate of Yuan against USD
let slider8 = document.getElementById("yuanExchangeRange");
let output8 = document.getElementById("yuanExchangeRangeValue");
output8.innerHTML = formatAmount(slider8.value, "¥");
yuanExRate = slider8.value;

// Update the current slider value (each time you drag the slider handle)
slider8.oninput = function () {
  output8.innerHTML = formatAmount(this.value, "¥");
  yuanExRate = this.value;
};

// Setting the slider value for Political Stability Index
let slider9 = document.getElementById("politicalStabilityRange");
let output9 = document.getElementById("politicalStabilityRangeValue");
output9.innerHTML = slider9.value;
politicalStabilityIndex = slider9.value;
// Update the current slider value (each time you drag the slider handle)
slider9.oninput = function () {
  output9.innerHTML = this.value;
  politicalStabilityIndex = this.value;
};

document.querySelector(".submitInput").addEventListener(
  "click",

  function () {
    console.log("Consumer Price Index      :" + cpiIndex);
    console.log("Foreign Direct Investment%:" + fdiGDP);
    console.log("Unemployment Percentage   :" + unemployment);
    console.log("Annual Inflation %        :" + inflation);
    console.log("GDP per Capita            :" + gdpPerCapita);
    console.log("GDP growth %              :" + gdpGrowth);
    console.log("Exports of Goods and Svcs :" + goodsAndServices);
    console.log("Exchange rate of Yuan     :" + yuanExRate);
    console.log("Political Stability Index :" + politicalStabilityIndex);
    console.log(weights);
  }
);
