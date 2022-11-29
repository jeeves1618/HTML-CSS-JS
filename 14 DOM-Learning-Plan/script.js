let bodyElement = document.querySelector("body");
console.log(bodyElement);
let headerElement = document.createElement("header");
let mainElement = document.createElement("main");
let footerElement = document.createElement("footer");

bodyElement.append(headerElement);
bodyElement.append(mainElement);
bodyElement.append(footerElement);

bodyElement.style.backgroundColor = "rgb(228,206,182)";
headerElement.style.backgroundColor = "rgb(44,41,38)";
headerElement.style.color = "rgb(238,164,80)";
headerElement.style.padding = "20px";

let headerHeading = document.createElement("h1");
headerElement.append(headerHeading);
headerHeading.textContent = "2023 Learning Priorities";
headerHeading.style.textAlign = "center";
let horizontalLine = document.createElement("hr");
headerElement.append(horizontalLine);
horizontalLine.style.background = "rgb(238,164,80)";
horizontalLine.style.height = "2px";
let olMainElement = document.createElement("ol");
mainElement.append(olMainElement);

let h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
let liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Type Script";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Node JS";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "React JS";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Spring Boot and React JS";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Spring Security";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Spring Batch";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Apache Kafka";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainElement.textContent = "Docker and Kubernates";
horizontalLine = document.createElement("hr");
mainElement.append(horizontalLine);
horizontalLine.style.background = "rgb(238,164,80)";
horizontalLine.style.height = "2px";
horizontalLine.style.margin = "20px";
