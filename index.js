let addProduct = document.querySelector(".add-product");
addProduct.onsubmit = addPro;

function addPro(e) {
  e.preventDefault();
  
  // Get the input value
  let inputValue = document.querySelector(".inputValue").value;

  // Create HTML for the new task
  let result = `
   <div class="test">
     <input type="checkbox" class="myCheckbox">
     <p class="inputName"><span>${inputValue}</span></p>
   </div>
  `;
  
  // Append the new task to the list
  document.querySelector(".inputValueName").insertAdjacentHTML('beforeend', result);
  
  // Clear the input field
  document.querySelector(".inputValue").value = "";
  
  // Get all checkboxes
  let checkboxes = document.querySelectorAll(".myCheckbox");
  
  // Add event listener to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
      let span = checkbox.closest(".test").querySelector("span");
      if (checkbox.checked) {
        span.classList.add("lineText");
      } else {
        span.classList.remove("lineText");
      }
    });
  });
}


