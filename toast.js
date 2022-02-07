const openToastBtn = document.querySelector("#toast-btn");
const toastMsg = document.querySelector("#toast-msg");

const openToastHandler = () => {
    toastMsg.style.display = "center";
    setTimeout(()=>{
        toastMsg.style.display = "none"
    },2500)
}

openToastBtn.addEventListener("click", openToastHandler);

