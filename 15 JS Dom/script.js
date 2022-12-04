let inputElement = document.querySelector("input");
inputElement.addEventListener("input", logtheinput);

function logtheinput(defaultEventFromBrowser) {
  console.log(document.querySelector("span").textContent);
  //console.log(inputElement.value);
  //console.log(defaultEventFromBrowser.data);
  //console.dir(document);

  document.querySelector("#char-remaining").textContent =
    document.body.children[0][0].attributes.maxlength.textContent -
    defaultEventFromBrowser.target.value.length;

  if (
    document.body.children[0][0].attributes.maxlength.textContent -
      defaultEventFromBrowser.target.value.length <
    100
  ) {
    document.getElementById("char-remaining").style.color = "red";
    //inputElement.style.backgroundColor = "rgb(228, 150, 160);";
    //inputElement.className = "warning"; Class name is a problem because it overrides existing classes.
    inputElement.classList.add("warning");
    //inputElement.classList.remove("warning"); you can also remove a specific class from the class list
  }
  //console.log(defaultEventFromBrowser);
}
