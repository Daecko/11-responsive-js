const rating_wrap = document.querySelector(".rate-wrap");
const thanking_wrap = document.querySelector(".thank-wrap");

const submit = document.getElementById("submit-btn");
const rating = document.getElementById("rating-n");
const rate_btn = document.querySelectorAll(".rate-btn")
console.log(thanking_wrap.classList)

submit.addEventListener("click", () => {
    if(rating.innerHTML > 0){
        thanking_wrap.style.display = "flex";
        rating_wrap.style.display = "none";

    } else {
        alert("chose a rating option before submitting.")
    }
})

rate_btn.forEach((rate) => {
    rate.addEventListener("click", () => {
        rate_btn.forEach(btn => btn.style.background = '#262E38');
        rate.style.background = '#FC7614';
        rate.style.color = '#FFF';
        rating.innerHTML = rate.innerHTML;
        console.log(rating)
        setTimeout(() => {
            window.location.reload(1)
        }, 5000);
    })
})