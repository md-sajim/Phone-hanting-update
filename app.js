const phoneHanting = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await res.json();
    const displayPhone = document.getElementById('phone-display')
    displayPhone.innerContain = ``;
    data.data.forEach(singlaData => {
        const {brand, image, phone_name, slug} = singlaData;
        const div = document.createElement("div")
        div.innerHTML= `
        <img src="${image}" alt="" />
        `
        displayPhone.appendChild(div)
    })


}
phoneHanting()