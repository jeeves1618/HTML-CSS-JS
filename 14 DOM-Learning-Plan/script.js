let bodyElement = document.querySelector("body");
console.log(bodyElement);
let headerElement = document.createElement("header");
let mainElement = document.createElement("main");
let footerElement = document.createElement("footer");

bodyElement.append(headerElement);
bodyElement.append(mainElement);
bodyElement.append(footerElement);

bodyElement.style.backgroundColor = "rgb(228,206,182)";
bodyElement.style.padding = "1% 1%";
mainElement.style.margin = "0 0 10px -30px";
headerElement.style.backgroundColor = "rgb(44,41,38)";
headerElement.style.color = "rgb(238,164,80)";
headerElement.style.padding = "20px";

let headerHeading = document.createElement("h1");
headerElement.append(headerHeading);
headerHeading.textContent = "2023 Learning Priorities";
headerHeading.style.textAlign = "center";
let horizontalLine = document.createElement("hr");

horizontalLine.style.background = "rgb(238,164,80)";
horizontalLine.style.height = "2px";
let olMainElement = document.createElement("ol");
mainElement.append(olMainElement);

let h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
let liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
let liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.style.padding = "0";
liMainElement.style.margin = "0";
liMainElement.textContent = "Type Script";
liMainTimeElement.textContent = "20-Dec To 26-Dec";

liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Node JS";
liMainTimeElement.textContent = "27-Dec To 21-Jan";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "React JS";
liMainTimeElement.textContent = "22-Jan To 19-Feb";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Spring/React";
liMainTimeElement.textContent = "20-Feb To 11-Mar";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Security";
liMainTimeElement.textContent = "12-Mar To 31-Mar";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Spring Batch";
liMainTimeElement.textContent = "01-Apr To 15-Apr";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Kafka";
liMainTimeElement.textContent = "16-Apr To 30-Apr";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Kubernates";
liMainTimeElement.textContent = "01-May To 31-May";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

footerElement.style.height = "3px";
footerElement.style.background = "rgb(44,41,38)";

//Move the element
//liMainElement.parentElement.append(liMainElement);
