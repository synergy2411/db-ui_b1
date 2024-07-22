window.onload = function () {
  const txtBody = document.getElementById("body");
  const txtAuthor = document.querySelector("#author");
  const btnAdd = document.getElementById("btn-add");
  const sectionEl = document.getElementById("blog-section");

  btnAdd.addEventListener("click", function (event) {
    event.preventDefault();

    const articleEl = document.createElement("article");
    const blockquoteEl = document.createElement("blockquote");
    const citeEl = document.createElement("cite");

    citeEl.innerText = txtAuthor.value;
    blockquoteEl.innerHTML = txtBody.value;

    blockquoteEl.appendChild(citeEl);
    articleEl.appendChild(blockquoteEl);
    sectionEl.appendChild(articleEl);

    txtBody.value = "";
    txtAuthor.value = "";
  });
};
