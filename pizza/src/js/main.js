const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
cartButton.addEventListener("click", function (event) {
   modal.classList.add("is-open");
});

const close = document.querySelector(".modal-close");
close.addEventListener("click", function (event) {
   modal.classList.remove("is-open");
});
