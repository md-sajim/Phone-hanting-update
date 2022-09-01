const loadPhone = async (value) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
    const data = await res.json();
    displayPhone(data.data)

}
const displayPhone = phone => {
    // console.log(phone)
    const displayPhone = document.getElementById('phone-display')
    displayPhone.textContent = ``;
    phone = phone.slice(0, 20)
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
          <div style="background-color:#D57d1f; height:560px" class="card p-1">
            <img src="${image}" class="card-img-top" alt="...">
            <div style="color:#FFCB69; border-top: 5px solid #D57d1f;" class="card-body">
              <h6 class="card-title">Name: ${phone_name}</h6>
              <p class="card-text">Brand: ${brand}</p>
              <p class="card-text">Modal: ${slug.slice(0,20)}</p>
            </div>
          </div>
              `
        displayPhone.appendChild(div)
    })
}

const searchPhone = () => {
    const getSearchValue = document.getElementById("input-phone")
    loadPhone(getSearchValue.value)
    getSearchValue.value = ``;
}
const spener = value => {
    const getSpener = document.getElementById('spinner')
    if (value === true) {
        getSpener.classList.remove("d-none")
    }
    else {
        getSpener.classList.add("d-none")
    }
}