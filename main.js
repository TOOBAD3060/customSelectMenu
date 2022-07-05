const wrapper= document.querySelector(".wrapper"),
selectBtn=wrapper.querySelector(".select-btn"),
options=wrapper.querySelector(".options"),
searchInput=wrapper.querySelector("input");
let countries=[
    "Columbia","Brazil","Argentina","France","Cameroon","Egypt","Togo",
    "Jo","Yo","De","Fr","Sh"
]
addCountry();
function addCountry() {
    options.innerHTML=""
    countries.forEach(function(item){
        let  li= ` <li onclick="updateName(this)">${item}</li>`

        options.insertAdjacentHTML("beforeend",li)
    })
}

function updateName(selectedLi) {
  searchInput.value=""
    addCountry();
    wrapper.classList.remove("active")

    selectBtn.firstElementChild.textContent=selectedLi.textContent;
    
}
searchInput.addEventListener("keyup",()=>{
  let arr=[];
  let searchedVal=searchInput.value.toLowerCase();
  arr=countries.filter((item)=> {
      return item.toLowerCase().startsWith(searchedVal);
  }).map(item=> `<li onclick="updateName(this)">${item}</li>`).join("")
  
  options.innerHTML=arr ? arr : `<p> Ooops! Country not found</p>`;
})

selectBtn.addEventListener("click",()=>{
    wrapper.classList.toggle("active")
})

