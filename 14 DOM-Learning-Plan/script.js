let bodyElement = document.querySelector("body");
console.log(bodyElement);
let headerElement = document.createElement("header");
let mainElement = document.createElement("main");
let footerElement = document.createElement("footer");
let sectionElementOne = document.createElement("section");

let titleText = document.querySelector("title");
console.log(titleText.textContent);
titleText.textContent = "My Learning";
function changeTitle() {
  if (titleText.textContent == "DOM Manipulation") {
    titleText.textContent = "My Learning";
  } else {
    titleText.textContent = "DOM Manipulation";
  }
}

document.addEventListener("click", changeTitle);

bodyElement.append(headerElement);
bodyElement.append(sectionElementOne);
bodyElement.append(mainElement);

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

sectionElementOne.style.height = "40px";
sectionElementOne.style.margin = "10px 0 10px 0";
sectionElementOne.style.border = "0px solid rgb(44,41,38)";
let h3Element = document.createElement("h3");
sectionElementOne.append(h3Element);
h3Element.textContent = "Udemy Courses";
h3Element.style.textAlign = "center";
h3Element.style.fontSize = "2rem";
h3Element.style.margin = "0";
sectionElementOne.style.backgroundColor = "rgb(238,164,80)";

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

sectionElementOne = document.createElement("section");
bodyElement.append(sectionElementOne);
sectionElementOne.style.height = "40px";
sectionElementOne.style.margin = "10px 0 10px 0";
sectionElementOne.style.border = "0px solid rgb(44,41,38)";
h3Element = document.createElement("h3");
sectionElementOne.append(h3Element);
h3Element.textContent = "Books";
h3Element.style.textAlign = "center";
h3Element.style.fontSize = "2rem";
h3Element.style.margin = "0";
sectionElementOne.style.backgroundColor = "rgb(238,164,80)";

mainElement = document.createElement("main");
bodyElement.append(mainElement);
olMainElement = document.createElement("ol");
mainElement.append(olMainElement);
mainElement.style.margin = "0 0 10px -30px";
h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.style.padding = "0";
liMainElement.style.margin = "0";
liMainElement.textContent =
  "Data Structures and Algorithms in Java by Robert Lafore";
liMainTimeElement.textContent = "01-Dec To 28-Feb";
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
liMainElement.textContent = "Head First Design Patterns by Eric Freeman";
liMainTimeElement.textContent = "01-Mar To 30-Apr";
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
liMainElement.textContent =
  "Fundementals of Software Architecture by Mark Richards";
liMainTimeElement.textContent = "01-May To 30-Jun";
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
liMainElement.textContent =
  "Designing Data Intensive Applications by Martin Klepmann";
liMainTimeElement.textContent = "01-Jul To 31-Aug";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

sectionElementOne = document.createElement("section");
bodyElement.append(sectionElementOne);
sectionElementOne.style.height = "40px";
sectionElementOne.style.margin = "10px 0 10px 0";
sectionElementOne.style.border = "0px solid rgb(44,41,38)";
h3Element = document.createElement("h3");
sectionElementOne.append(h3Element);
h3Element.textContent = "Learning Gaps";
h3Element.style.textAlign = "center";
h3Element.style.fontSize = "2rem";
h3Element.style.margin = "0";
sectionElementOne.style.backgroundColor = "rgb(238,164,80)";

mainElement = document.createElement("main");
bodyElement.append(mainElement);
olMainElement = document.createElement("ol");
mainElement.append(olMainElement);
mainElement.style.margin = "0 0 10px -30px";

h2LiElement = document.createElement("h2");
olMainElement.append(h2LiElement);
liMainElement = document.createElement("li");
h2LiElement.append(liMainElement);
liMainTimeElement = document.createElement("li");
h2LiElement.append(liMainTimeElement);
liMainElement.style.listStyle = "none";
liMainElement.textContent = "Apache Hadoop and Spark";
liMainTimeElement.textContent = "01-Apr To 31-Jul";
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
liMainElement.textContent = "Data Science for Business";
liMainTimeElement.textContent = "01-Aug To 30-Sep";
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
liMainElement.textContent = "Cloud Fundementals";
liMainTimeElement.textContent = "01-Oct To 31-Dec";
liMainTimeElement.style.listStyle = "none";
h2LiElement.style.display = "flex";
h2LiElement.style.justifyContent = "space-between";

bodyElement.append(footerElement);
footerElement.style.height = "3px";
footerElement.style.background = "rgb(44,41,38)";

//Move the element
//liMainElement.parentElement.append(liMainElement);
