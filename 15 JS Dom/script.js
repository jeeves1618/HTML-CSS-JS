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
    inputElement.style.backgroundColor = "rgb(228, 150, 160);";
  }
  //console.log(defaultEventFromBrowser);
}
