const viewBox = document.querySelectorAll(".viewbox");
const pop = document.querySelector(".pp");
const closeBtn = document.querySelector(".close");
const rapoClose = document.querySelector(".rapo")
const reportBtn = document.querySelector(".rptBtn")
const registrationBtn = document.querySelector("#regBtn");
const imgUpload = document.querySelector("#uploadimage");


if (rapoClose) {
  rapoClose.addEventListener('click', () => {
    document.querySelector(".reportTop").classList.remove("flx");
  })
}
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

  const make = document.querySelector('#make').value.toUpperCase();
  const model = document.querySelector('#model').value.toUpperCase();
  const image = showImg();
  const year = document.querySelector('#year').value.toUpperCase();
  const exterior = document.querySelector('#exteriorcolor').value.toUpperCase();
  const interior = document.querySelector('#interiorcolor').value.toUpperCase();
  const licence = document.querySelector('#license').value.toUpperCase();
  const chassis = document.querySelector('#chassisnumber').value.toUpperCase();
  const vehicleType = document.querySelector('#vehicletype').value.toUpperCase();
  const newReg = new NewCar(image, make, model, year, exterior, interior, licence, chassis, vehicleType);


  newCarArr.push(newReg);

  localStorage.setItem('carArr', JSON.stringify(newCarArr));

  location.reload();


}


if (registrationBtn) {
  registrationBtn.addEventListener('click', reg);
}


const newLocalArr = JSON.parse(localStorage.getItem('carArr'));

if (newLocalArr !== null) {
  newLocalArr.forEach(item => {

    let parReg = document.createElement('div')
    parReg.setAttribute('class', 'container mt-4 parentReg')

    let parentDiv = document.createElement("div");

    parentDiv.setAttribute("class", "container-fluid row viewbox");
    parentDiv.innerHTML = `<div class="d-flex align-items-center col-12 col-md-3"><p class="text-light fs-4" id="carTp">${item.make}</p></div><div class="d-flex align-items-center col-12 col-md-3"><p class="text-light fs-4" id="datte">${item.year}</p></div><div class="d-flex align-items-center col-12 col-md-3"><p class="text-light fs-4" id="plate">${item.licence}</p></div><div class="d-md-flex align-items-center justify-content-center col-12 col-md-3"><button class="btn btn-primary view">VIEW</button><button class="btn btn-danger ms-2  "id="deleted">Delete</button> </div>`
    parReg.appendChild(parentDiv);
    if (document.querySelector('.stolenReg')) {
      document.querySelector('.stolenReg').appendChild(parReg);
    }
  })
}
document.querySelectorAll('#deleted').forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let par = target.parentElement.parentElement.parentElement;
    if (par.classList.contains("parentReg")) {
      document.querySelector('.parentReg').remove();


    }
    // for (let i = 0; i < newLocalArr.length; i++) {
    //   if (par.querySelector("#plate").innerText === newLocalArr[i].licence) {
    //     let removed = newLocalArr.slice(i, i);




    //   }
    // }



  })
})
const view = document.querySelectorAll(".view");
view.forEach(item => { ///pop-up opening
  item.addEventListener('click', e => {
    let target = e.target;
    let parentDiv = target.parentElement.parentElement
    for (let i = 0; i < newLocalArr.length; i++) {
      if (parentDiv.querySelector("#plate").innerText === newLocalArr[i].licence) {
        document.querySelector("#carMake").innerHTML = newLocalArr[i].make;
        document.querySelector("#carType").innerHTML = newLocalArr[i].vehicleType;
        document.querySelector("#carExterior").innerHTML = newLocalArr[i].exterior;
        document.querySelector("#carInterior").innerHTML = newLocalArr[i].interior;
        document.querySelector("#numberPlate").innerHTML = newLocalArr[i].licence;
        document.querySelector("#chassis_Number").innerHTML = newLocalArr[i].chassis;
        const imageDaraUrl = localStorage.getItem(newLocalArr[i].image);

        if (imageDaraUrl) {
          document.querySelector("#carImg").setAttribute('src', imageDaraUrl);
        }
      }
    }
    pop.classList.add("flx");




  })
})


const searchBtn = document.querySelector(".searchBx")
  // searchBtn.addEventListener('click', function(e) {

//   
//   console.log(searchBox);
// })
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    let searchBox = document.querySelector(".searchboxx").value;
    for (let i = 0; i < newLocalArr.length; i++) {
      if (searchBox === newLocalArr[i].chassis) {

        document.querySelector("#carMake1").innerHTML = newLocalArr[i].make;
        document.querySelector("#carType1").innerHTML = newLocalArr[i].vehicleType;
        document.querySelector("#carExterior1").innerHTML = newLocalArr[i].exterior;
        document.querySelector("#carInterior1").innerHTML = newLocalArr[i].interior;
        document.querySelector("#numberPlate1").innerHTML = newLocalArr[i].licence;
        document.querySelector("#chassis_Number1").innerHTML = newLocalArr[i].chassis;
        const imageDaraUrl = localStorage.getItem(newLocalArr[i].image);

        if (imageDaraUrl) {
          document.querySelector("#carImg").setAttribute('src', imageDaraUrl);
        }
        pop.classList.add("flx");
      } else {
        alert(`not in the database`)
      }


    }
  });
}
if (reportBtn) {
  reportBtn.addEventListener('click', () => {
    document.querySelector(".reportTop").classList.add("flx");
  });
}