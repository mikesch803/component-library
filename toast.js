const openToastBtn = document.querySelector("#toast-btn");
const toastMsg = document.querySelector("#toast-msg");

toastMsg.style.display = "none"

const openToastHandler = () => {
    toastMsg.style.display = "flex";
    setTimeout(()=>{
        toastMsg.style.display = "none"
    },2500)
}

openToastBtn.addEventListener("click", openToastHandler);

