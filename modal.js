const containerModal = document.querySelector(".modal");
const btnModalOpen = document.querySelector(".btn-modal-open");
const btnModalClose = document.querySelector(".btn-modal-close");

const openModelHandler = () => {
    containerModal.style.display = "flex";
    btnModalOpen.style.display = "none";
}
const closeModelHandler = () => {
    containerModal.style.display = "none";
    btnModalOpen.style.display = "block";
}

btnModalOpen.addEventListener("click", openModelHandler)
btnModalClose.addEventListener("click", closeModelHandler)




