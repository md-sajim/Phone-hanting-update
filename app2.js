const loadPhone = async (value, dataLemet) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
    const data = await res.json();
    displayPhone(data.data, dataLemet)

}
const displayPhone = (phone, dataLemet) => {
    // console.log(phone)
    const displayPhone = document.getElementById('phone-display')
    displayPhone.textContent = ``;
    const sowAllBtn = document.getElementById('btn-none')
    if (dataLemet && phone.length > 20) {
        phone = phone.slice(0, 20)
        sowAllBtn.classList.remove('d-none')
    }
    else {
        sowAllBtn.classList.add('d-none')
    }
    const getAlart = document.getElementById('alart')
    if (phone.length === 0) {
        getAlart.classList.remove("d-none")
    }
    else {
        getAlart.classList.add('d-none')
    }
    phone.forEach(singlaData => {
        const { brand, image, phone_name, slug } = singlaData;
        // console.log(slug)
        const div = document.createElement("div")
        div.classList.add("col")
        // div.style.backgroundColor="#D57D1F"
        div.innerHTML = `
          <div style="background-color:#D57d1f; height:600px" class="card p-1">
            <img src="${image}" class="card-img-top" alt="...">
            <div style="color:#FFCB69; border-top: 5px solid #D57d1f;" class="card-body">
              <h6 class="card-title">Name: ${phone_name}</h6>
              <p class="card-text">Brand: ${brand}</p>
              <p class="card-text">Modal: ${slug.slice(0, 20)}</p>
              <button onclick="displayPhoneDelails('${slug}')" style="background-color:#D57d1f; color:white" class="btn" data-bs-toggle="modal" data-bs-target="#phoneDetailsModul">Go somewhere</button>
            </div>
          </div>
              `
        displayPhone.appendChild(div)
    })
    toggolSpener(false)
}
const prossaceSearch = (dataLemet) => {
    toggolSpener(true)
    const getSearchValue = document.getElementById("input-phone")
    loadPhone(getSearchValue.value, dataLemet)
    // getSearchValue.value = ``;
}
// Prass Enter run programe
document.getElementById('input-phone').addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        
        prossaceSearch(10)
    }
})
const searchPhone = () => {
    prossaceSearch(10)
}
document.getElementById("all-show").addEventListener("click", function () {
    prossaceSearch()
})
const toggolSpener = isLoding => {
    const getSpener = document.getElementById('spinner')
    if (isLoding) {
        getSpener.classList.remove("d-none")
    }
    else {
        getSpener.classList.add("d-none")
    }
}
// show Phone details
const displayPhoneDelails = async (id) =>{
 const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
 const data = await res.json();
 detailsModul(data.data)
}
const detailsModul = phoneDetail =>{
    const {brand, image, mainFeatures, name, releaseDate, slug, others} = phoneDetail
console.log(phoneDetail);
const modelTital = document.getElementById("phoneDetailsModulLabel")
modelTital.innerText = `${name}`
const modalBody = document.getElementById("modal-body")
modalBody.innerHTML=``;
const div = document.createElement('div');
div.innerHTML=`
<div class="card border-0">
  <div class="row g-0">
    <div class="col-md-6">
      <img style="height:100%; width:100%" src="${image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div  class="card-body">
        <h5 class="card-title">Brand: ${brand? brand:"Brand Name Not Found"}</h5>
        <p class="card-text">Modal: ${slug}</p>
        <p class="card-text">ReleaseDate: ${releaseDate}</p>
        <h5>MainFeatures:</h5>
        <p>ChipSet: ${mainFeatures.chiSet}</p>
        <p>DisplaySize: ${mainFeatures.displaySize}</p>
        <p>Memory: ${mainFeatures.memory}</p>
        <ul>
        <h5>Sensor</h5>
        <li>${mainFeatures.sensors[0]}</li>
        <li>${mainFeatures.sensors[1]}</li>
        <li>${mainFeatures.sensors[2]}</li>
        <li>${mainFeatures.sensors[3]}</li>
        <li>${mainFeatures.sensors[4]}</li>
        </ul>
        <p>Storage: ${mainFeatures.storage}</p>
        <h5>Others:</h5>
        <p>Bluetooth: ${others? others.Bluetooth:"Bluetooth not found"}</p>
        <p>GPS: ${others? others.GPS:"GPS not found"}</p>
        <p>NFC: ${others? others.NFC:"NFC not Found"}</p>
        <p>Radio: ${others? others.Radio:"Radio Not Found"}</p>
        <p>USB: ${others?others.USB:"USB not found"}</p>
        <p>WLAN: ${others?others.WLAN:"Wifi not Found"}</p>
      </div>
    </div>
  </div>
</div>
`
modalBody.appendChild(div)

}