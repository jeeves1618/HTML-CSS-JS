"use strict";
import weights from "./weights.json" assert { type: "json" };
let politicalStabilityIndex;
let yuanExRate;
let exports;
let imports;
let cad;
let gdpGrowth;
let gdpPerCapita;
let inflation;
let unemployment;
let fdiGDP;
let cpiIndex;

let netSales = 0;
let grossProfit = 0;
let totalSGandA = 0;
let membershipAndOtherIncome = 0;
let segmentOperatingIncome = 0;

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
    } else {
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
fdiGDP = slider2.value;
// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function () {
  output2.innerHTML = this.value + `%`;
  fdiGDP = this.value;
};

// Setting the slider value for Unemployment Percentage
let slider3 = document.getElementById("unemploymentRange");
let output3 = document.getElementById("unemploymentRangeValue");
output3.innerHTML = slider3.value + `%`;
unemployment = slider3.value;
// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function () {
  output3.innerHTML = this.value + `%`;
  unemployment = this.value;
};

// Setting the slider value for Annual Inflation Percentage
let slider4 = document.getElementById("inflationRange");
let output4 = document.getElementById("inflationRangeValue");
output4.innerHTML = slider4.value + `%`;
inflation = slider4.value;
// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function () {
  output4.innerHTML = this.value + `%`;
  inflation = this.value;
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
gdpGrowth = slider6.value;
// Update the current slider value (each time you drag the slider handle)
slider6.oninput = function () {
  output6.innerHTML = this.value + `%`;
  gdpGrowth = this.value;
};

// Setting the slider value for Exports of Goods and Services
let slider7 = document.getElementById("exportsRange");
let output7 = document.getElementById("exportsRangeValue");
output7.innerHTML = slider7.value + " Trillion USD";
exports = slider7.value * 1000000000000;

// Update the current slider value (each time you drag the slider handle)
slider7.oninput = function () {
  output7.innerHTML = this.value + " Trillion USD";
  exports = this.value * 1000000000000;
};

// Setting the slider value for imports of Goods and Services
let slider1 = document.getElementById("importsRange");
let output1 = document.getElementById("importsRangeValue");
output1.innerHTML = slider1.value + " Trillion USD";
imports = slider1.value * 1000000000000;

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
  output1.innerHTML = this.value + " Trillion USD";
  imports = this.value * 1000000000000;
};

// Setting the slider value for imports of Goods and Services
let slider0 = document.getElementById("cadRange");
let output0 = document.getElementById("cadRangeValue");
output0.innerHTML = slider0.value + " Billion USD";
cad = slider0.value * 1000000000;

// Update the current slider value (each time you drag the slider handle)
slider0.oninput = function () {
  output0.innerHTML = this.value + " Billion USD";
  cad = this.value * 1000000000;
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

console.log(netSales);
document.getElementById("output1").innerHTML = formatAmount(netSales, "$");
document.getElementById("output2").innerHTML = formatAmount(grossProfit, "$");
document.getElementById("output3").innerHTML = formatAmount(totalSGandA, "$");
document.getElementById("output4").innerHTML = formatAmount(
  membershipAndOtherIncome,
  "$"
);
document.getElementById("output5").innerHTML = formatAmount(
  segmentOperatingIncome,
  "$"
);
document.getElementById("output_title").innerHTML =
  "Please click on submit to get the predicted values";

document.querySelector(".submitInput").addEventListener(
  "click",

  function () {
    console.log("Consumer Price Index      :" + cpiIndex);
    console.log("Foreign Direct Investment%:" + fdiGDP);
    console.log("Unemployment Percentage   :" + unemployment);
    console.log("Annual Inflation %        :" + inflation);
    console.log("GDP per Capita            :" + gdpPerCapita);
    console.log("GDP growth %              :" + gdpGrowth);
    console.log("Exports of Goods and Svcs :" + exports);
    console.log("Imports of Goods and Svcs :" + imports);
    console.log("Current Account Deficit   :" + cad);
    console.log("Exchange rate of Yuan     :" + yuanExRate);
    console.log("Political Stability Index :" + politicalStabilityIndex);
    console.log("Intercept :" + weights[0].intercept);

    netSales = (
      (cpiIndex * weights[0].cpi +
        fdiGDP * weights[0].fdi +
        unemployment * weights[0].unemployment +
        inflation * weights[0].inflation +
        gdpPerCapita * weights[0].gdpPerCapita +
        gdpGrowth * weights[0].gdpGrowth +
        exports * weights[0].exports +
        imports * weights[0].imports +
        cad * weights[0].cad +
        yuanExRate * weights[0].exchangeRate +
        politicalStabilityIndex * weights[0].PSI +
        weights[0].intercept) *
      1000000
    ).toFixed();
    console.log("Predicted netSales : " + netSales);
    document.getElementById("output1").innerHTML = formatAmount(
      netSales.toString(),
      "$"
    );
    grossProfit = (
      (cpiIndex * weights[1].cpi +
        fdiGDP * weights[1].fdi +
        unemployment * weights[1].unemployment +
        inflation * weights[1].inflation +
        gdpPerCapita * weights[1].gdpPerCapita +
        gdpGrowth * weights[1].gdpGrowth +
        exports * weights[1].exports +
        imports * weights[1].imports +
        cad * weights[1].cad +
        yuanExRate * weights[1].exchangeRate +
        politicalStabilityIndex * weights[1].PSI +
        weights[1].intercept) *
      1000000
    ).toFixed();
    document.getElementById("output2").innerHTML = formatAmount(
      grossProfit.toString(),
      "$"
    );
    totalSGandA = (
      (cpiIndex * weights[2].cpi +
        fdiGDP * weights[2].fdi +
        unemployment * weights[2].unemployment +
        inflation * weights[2].inflation +
        gdpPerCapita * weights[2].gdpPerCapita +
        gdpGrowth * weights[2].gdpGrowth +
        exports * weights[2].exports +
        imports * weights[2].imports +
        cad * weights[2].cad +
        yuanExRate * weights[2].exchangeRate +
        politicalStabilityIndex * weights[2].PSI +
        weights[2].intercept) *
      1000000
    ).toFixed();
    document.getElementById("output3").innerHTML = formatAmount(
      totalSGandA.toString(),
      "$"
    );
    membershipAndOtherIncome = (
      (cpiIndex * weights[3].cpi +
        fdiGDP * weights[3].fdi +
        unemployment * weights[3].unemployment +
        inflation * weights[3].inflation +
        gdpPerCapita * weights[3].gdpPerCapita +
        gdpGrowth * weights[3].gdpGrowth +
        exports * weights[3].exports +
        imports * weights[3].imports +
        cad * weights[3].cad +
        yuanExRate * weights[3].exchangeRate +
        politicalStabilityIndex * weights[3].PSI +
        weights[3].intercept) *
      1000000
    ).toFixed();
    document.getElementById("output4").innerHTML = formatAmount(
      membershipAndOtherIncome.toString(),
      "$"
    );
    segmentOperatingIncome = (
      (cpiIndex * weights[4].cpi +
        fdiGDP * weights[4].fdi +
        unemployment * weights[4].unemployment +
        inflation * weights[4].inflation +
        gdpPerCapita * weights[4].gdpPerCapita +
        gdpGrowth * weights[4].gdpGrowth +
        exports * weights[4].exports +
        imports * weights[4].imports +
        cad * weights[4].cad +
        yuanExRate * weights[4].exchangeRate +
        politicalStabilityIndex * weights[4].PSI +
        weights[4].intercept) *
      1000000
    ).toFixed();
    document.getElementById("output5").innerHTML = formatAmount(
      segmentOperatingIncome.toString(),
      "$"
    );
    document.getElementById("output_title").innerHTML =
      "Here are the predicted values based on macro economic inputs provided";
  }
);
