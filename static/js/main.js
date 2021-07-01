const viewBox = document.querySelectorAll(".viewbox");
const pop = document.querySelector(".pp");
const closeBtn = document.querySelector(".close");
const rapoClose = document.querySelector(".rapo")
const reportBtn = document.querySelector(".rptBtn")
const registrationBtn = document.querySelector("#regBtn");
const imgUpload = document.querySelector("#uploadimage");
let view = document.querySelectorAll(".view");


rapoClose.addEventListener('click', () => {
  document.querySelector(".reportTop").classList.remove("flx");
})
class NewCar {
  constructor(image, make, model, year, exterior, interior, licence, chassis, vehicleType) {
    this.image = image;
    this.model = model;
    this.make = make;
    this.year = year;
    this.exterior = exterior;
    this.interior = interior;
    this.licence = licence;
    this.chassis = chassis;
    this.vehicleType = vehicleType;

  }
};
if (closeBtn) {
  closeBtn.addEventListener('click', () => pop.classList.remove("flx"));
}
const imgNames = [];
const imageUpload = () => {
  // let img = URL.createObjectURL(imgUpload.files[0])
  const reader = new FileReader();
  const name = imgUpload.files[0].name;

  imgNames.push(name);
  reader.addEventListener('load', () => {

    localStorage.setItem(name, reader.result);

  })

  reader.readAsDataURL(imgUpload.files[0]);


}

function showImg() {
  // let newImg;

  let rs = imgNames[imgNames.length - 1];
  return rs;

}

let newCarArr = [];

if (JSON.parse(localStorage.getItem('carArr')) !== null) {
  JSON.parse(localStorage.getItem('carArr')).forEach(item => {
    newCarArr.push(item)
  })

}

let reg = (e) => {

  e.preventDefault();
  imageUpload();

  const make = document.querySelector('#make').value;
  const model = document.querySelector('#model').value;
  const image = showImg();
  const year = document.querySelector('#year').value;
  const exterior = document.querySelector('#exteriorcolor').value;
  const interior = document.querySelector('#interiorcolor').value;
  const licence = document.querySelector('#license').value;
  const chassis = document.querySelector('#chassisnumber').value;
  const vehicleType = document.querySelector('#vehicletype').value;
  const newReg = new NewCar(image, make, model, year, exterior, interior, licence, chassis, vehicleType);


  newCarArr.push(newReg);

  localStorage.setItem('carArr', JSON.stringify(newCarArr));

  location.reload();


}


if (registrationBtn) {
  registrationBtn.addEventListener('click', reg);
}


const newLocalArr = JSON.parse(localStorage.getItem('carArr'));
console.log(newLocalArr);
if (newLocalArr !== null) {
  newLocalArr.forEach(item => {

    let parReg = document.createElement('div')
    parReg.setAttribute('class', 'container mt-4 parentReg')

    let parentDiv = document.createElement("div");

    parentDiv.setAttribute("class", "container-fluid row viewbox");
    parentDiv.innerHTML = `<div class="d-flex align-items-center col-12 col-md-3"><p class="text-light fs-4" id="carTp">${item.make}</p></div><div class="d-flex align-items-center col-12 col-md-3"><p class="text-light fs-4" id="datte">${item.year}</p></div><div class="d-flex align-items-center col-12 col-md-3"><p class="text-light fs-4" id="plate">${item.licence}</p></div><div class="d-md-flex align-items-center justify-content-center col-12 col-md-3"><button class="btn btn-primary view">VIEW</button></div>`
    parReg.appendChild(parentDiv);
    document.querySelector('.stolenReg').appendChild(parReg);



  })
}
viewBox.forEach(item => { ///pop-up opening
  item.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains("view")) {
      pop.classList.add("flx");
    }
  })
})

//pop-up closing;
reportBtn.addEventListener('click', () => {
  document.querySelector(".reportTop").classList.add("flx");
})