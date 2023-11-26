"use strict";
const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get("Genre"));
document.getElementById("topic-title-books").innerHTML =
  `<h2>` + searchParams.get("Genre") + `</h2>`;

let templateGenerator = function (book) {
  document.getElementById("dmenu").innerHTML +=
    `
      <div class="book-list col-md-6 col-sm-12">
      <div class="book-title-tile">` +
    book.bookTitle +
    `</div>
      <div class="row section-tile">
        <div class="col-sm-5 book-tile">
          <a href="books.html?Genre=` +
    book.bookGenre +
    `">
            <div>
              <img
                width="200"
                height="250"
                src="/static` +
    book.imageFileName +
    `"
                alt=` +
    book.bookTitle +
    `
              />
            </div>
          </a>
        </div>
        <div class="book-description col-sm-7">
          <i class="bi bi-vector-pen"></i>
          <p>
            <span>` +
    book.authorFirstName +
    `</span
            ><span>` +
    book.authorLastName +
    `</span>
          </p>
          <hr />

          <p>` +
    book.publisherName +
    `</p>
          <p>` +
    book.dateOfPurchase +
    `</p>
          <p>` +
    book.costInLocalCurrencyFmtd +
    `</p>
          <p>` +
    book.typeOfBinding +
    `</p>
        </div>
      </div>
    </div>
    `;
};
let formatPage = function (books) {
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    if (books[i].bookGenre === searchParams.get("Genre")) {
      templateGenerator(books[i]);
    }
  }
};

const getTopics = function () {
  fetch(
    `https://raw.githubusercontent.com/jeeves1618/Spring-Learnings/master/Librarian%202.0/src/main/resources/book-list.json`
  )
    .then(function (ajaxResponse) {
      console.log(ajaxResponse);
      //ajaxResponse can't be read since it is a readstream.
      //So, you have to use a json method, which itself is an async function returning a promisr
      return ajaxResponse.json();
    })
    .then(function (formatedData) {
      console.log(formatedData);
      formatPage(formatedData);
    });
};

getTopics();
