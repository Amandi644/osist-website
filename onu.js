document.addEventListener("DOMContentLoaded",()=>{
  const onuImgs = document.querySelectorAll(".palm.jg")
  // Call a variable with if Statement:
const buttonElement = document.querySelector(".button");
if (buttonElement){
  buttonElement.addEventListener("click", (value) => {
    buttonElement.textContent = "Processing Order...Finalizing your order!";
  });
}

onuImgs.forEach((img) => {
    onuImgs.addEventListener("click", () => {
      if (img.src.includes("onuMill4.jpg")) {
        img.src = "mil.jpg";
      } else if (img.src.includes("onuMill.jpg")) {
        img.src = "onuMill2.jpg";
      } else {
        img.src = "palm.jpg";
      }

      img.classList.add("active");
    });
  });

  const onuButton = document.querySelector(".button");

  if (onuButton) {
    if (onuButton.textContent === "You can not drive") {
      onuButton.textContent = "Onu Mill Production makes quality Oil";
      onuButton.classList.add("active");
    }
  }

  const amandiOnu = document.querySelector(".youtube");

  if (amandiOnu) {
    if (amandiOnu.textContent === "Subscribe") {
      amandiOnu.textContent = "Subscribed now!";
    } else {
      amandiOnu.textContent = "Republic of Oil!";
    }

    amandiOnu.addEventListener("click", () => {
      amandiOnu.textContent = "Subscribed now";
      amandiOnu.classList.add("active");
    });
  }

  const paypalBill = document.getElementById("paypal");

  if (paypalBill) {
    paypalBill.addEventListener("click", () => {
      paypalBill.textContent =
        "We are assuring you to pay with Onu Mill Production";
    });
  }

  const onuElement = document.getElementById("onupay");

  if (onuElement) {
    onuElement.addEventListener("click", () => {
      onuElement.textContent = "Onu Mill Production";
    });
  }

  const productElement = document.getElementById("product");

  if (productElement) {
    productElement.addEventListener("click", () => {
      productElement.textContent = "Call me now!";
    });
  }
});
