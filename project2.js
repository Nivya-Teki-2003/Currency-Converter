const BASE_URL_ = " https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/USD/INR.json"

const dropdowns = document.querySelectorAll(".dropdown select");



for(let select of dropdowns){
    for ( currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name === "from" && currcode === "USD"){
            newOption.selected = "selected";
        }  else if(select.name === "to" && currcode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target);
    });
}



const updateFlag = (element) => {
  let currcode = element.value;
  console.log(currcode);
  let countrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelectorAll("img");
  img.src = newsrc;
};
