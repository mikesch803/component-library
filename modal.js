var containerModal = document.querySelector(".modal");
var btnModalOpen = document.querySelector(".btn-modal-open");
var btnModalClose = document.querySelector(".btn-modal-close");

containerModal.style.display = "none";
console.log(containerModal)
console.log(btnModalClose)
console.log(btnModalOpen)
var openModelHandler = () => {
    containerModal.style.display = "flex";
    btnModalOpen.style.display = "none";
    console.log(true)
}

var closeModelHandler = () => {
    containerModal.style.display = "none";
    btnModalOpen.style.display = "block";
    console.log(true)
}

btnModalOpen.addEventListener("click", openModelHandler)
btnModalClose.addEventListener("click", closeModelHandler)




