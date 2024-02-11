let addProduct = document.querySelector(".add-product");
addProduct.onsubmit = addPro;
let checkbox = document.querySelector(".myCheckbox");
function addPro(e) {
  e.preventDefault();
  let inputValue = "";
  let inputVlueArray = [];

  inputValue = document.querySelector(".inputValue").value;
  inputVlueArray.push(inputValue);
  let result = `
   <div class="test ">
   <input type="checkbox" name="" id="" class="myCheckbox">
   <p class="inputName"><span class="">${inputValue}</span></p>
   </div>
   `;
  document.querySelector(".inputValueName").innerHTML += result;

  let checkboxes = document.querySelectorAll(".myCheckbox");
  for (let i = 0; i < checkboxes.length; i++) {
    checkbox = checkboxes[i];
    checkbox.addEventListener("change", function () {
      let span = checkbox.closest(".test").querySelector("span");
      if (checkbox.checked) {
        span.classList.add("lineText");
      } else {
        span.classList.remove("lineText");
      }
    });
  }
}
