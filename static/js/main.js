const viewBox = document.querySelectorAll(".viewbox");
const pop = document.querySelector(".pop");
closeBtn = document.querySelector(".pop-up button")
viewBox.forEach(item => {
  item.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains("view")) {
      pop.classList.add("flx");
    }
  })
})
closeBtn.addEventListener('click', () => {
  pop.classList.remove("flx");
})