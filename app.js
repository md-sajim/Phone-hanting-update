// const searchPhone = () => {
//   const getSearchValue = document.getElementById("input-phone")
//   phoneHanting(getSearchValue.value)
//   getSearchValue.value = ``;
// }



// const phoneHanting = async (value) => {
//   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`);
//   const data = await res.json();
//   console.log(data.data)
//   const dataLength = data.data.length;
//   // allData(data.data)
//   if (dataLength > 20) {
//     const displayPhone = document.getElementById('phone-display')
//     displayPhone.innerHTML = ``;
//     const lemetadData = data.data.slice(0, 20)
//     lemetadData.forEach(singlaData => {
//       const { brand, image, phone_name, slug } = singlaData;
//       // console.log(slug)
//       const div = document.createElement("div")
//       div.classList.add("col")
//       // div.style.backgroundColor="#D57D1F"
//       div.innerHTML = `
//         <div style="background-color:#D57d1f; height:560px" class="card p-1">
//           <img src="${image}" class="card-img-top" alt="...">
//           <div style="color:#FFCB69; border-top: 5px solid #D57d1f;" class="card-body">
//             <h5 class="card-title">Name: ${phone_name}</h5>
//             <p class="card-text">Brand: ${brand}</p>
//             <p class="card-text">Modal: ${slug}</p>
//           </div>
//         </div>
//             `
//       displayPhone.appendChild(div)
//     })
//     const getElement = document.getElementById('btn-nane')
//     // getElement.classList.remove("d-none")
//    getElement.innerHTML=`
//    <button onclick="allData()" style="background-color:#FFCB69; color:white" class="btn px-5 fw-bolder">See All</button>
//    `
    
//   }
//   else {
//     const displayPhone = document.getElementById('phone-display')
//     displayPhone.innerHTML = ``;

//     data.data.forEach(singlaData => {
//       const { brand, image, phone_name, slug } = singlaData;
//       // console.log(slug)
//       const div = document.createElement("div")
//       div.classList.add("col")
//       // div.style.backgroundColor="#D57D1F"
//       div.innerHTML = `
//         <div style="background-color:#D57d1f; height:560px" class="card p-1">
//           <img src="${image}" class="card-img-top" alt="...">
//           <div style="color:#FFCB69; border-top: 5px solid #D57d1f;" class="card-body">
//             <h5 class="card-title">Name: ${phone_name}</h5>
//             <p class="card-text">Brand: ${brand}</p>
//             <p class="card-text">Modal: ${slug}</p>
//           </div>
//         </div>
//             `
//       displayPhone.appendChild(div)
//       console.log("20----")
//       const getElement = document.getElementById('btn-nane')
//       getElement.classList.add("d-none")
//     })
//   }
//   // console.log(dataLength)



// }
// const allData = () => {
//   console.log("hi sajim")

//   // const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=a`);
//   // const data = await res.json();
  // const displayPhone = document.getElementById('phone-display')
  // displayPhone.innerHTML = ``;
  // data.forEach(singlaData => {
  //   const { brand, image, phone_name, slug } = singlaData;
  //   // console.log(slug)
  //   const div = document.createElement("div")
  //   div.classList.add("col")
  //   // div.style.backgroundColor="#D57D1F"
  //   div.innerHTML = `
  //       <div style="background-color:#D57d1f; height:560px" class="card p-1">
  //         <img src="${image}" class="card-img-top" alt="...">
  //         <div style="color:#FFCB69; border-top: 5px solid #D57d1f;" class="card-body">
  //           <h5 class="card-title">Name: ${phone_name}</h5>
  //           <p class="card-text">Brand: ${brand}</p>
  //           <p class="card-text">Modal: ${slug}</p>
  //         </div>
  //       </div>
  //           `
  //   displayPhone.appendChild(div)
//   //   console.log("20----")
//   //   const getElement = document.getElementById('btn-nane')
//   //   getElement.classList.add("d-none")
//   // })
// }
