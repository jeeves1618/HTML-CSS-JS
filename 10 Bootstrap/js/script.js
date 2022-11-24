function sayHello(event) {
  console.log("Say Hello!");
  console.log(this);
  console.log(event.clientX);
  console.log(event.shiftKey);
}

document.querySelector(".btn-primary").addEventListener("mouseover", sayHello);
