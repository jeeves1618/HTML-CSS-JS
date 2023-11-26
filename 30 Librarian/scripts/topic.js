"use strict";

let formatPage = function (topics) {
  for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);

    document.getElementById("dmenu").innerHTML +=
      `
    <div class="col-md-6 col-sm-12 col-xs-12 col-xxs-12">
              <a
                href="books.html?Genre=` +
      topics[i].bookGenre +
      `"
              >
                <p text="Fiction" class="genre-tile">` +
      topics[i].bookGenre +
      ` (` +
      topics[i].bookCount +
      `)</p>
                <div class="topic-tile">
                  <img
                    width="200"
                    height="380"
                    src="/static` +
      topics[i].imageFileName +
      `"
                    alt="Fiction"
                  />
                </div>
              </a>
            </div>
    `;
  }
};

const getTopics = function () {
  fetch(
    `https://raw.githubusercontent.com/jeeves1618/Spring-Learnings/master/Librarian%202.0/src/main/resources/topic-list.json`
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
