const darkBtn = document.querySelector("#darkBtn");
const searchInp = document.querySelector("#searchInp");
const btn2 = document.querySelector("#btn2");
const list = document.querySelector("#list");


darkBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        darkBtn.textContent = "Light";
    } else {
        document.body.classList.add("light");
        darkBtn.textContent = "Dark";
    }
});



    
    
const todoForm = document.querySelector("#todoForm");


todoForm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let text = searchInp.value;
    searchInp.value = "";
    list.innerHTML += `<li>${text} <button class="delet" onclick="removeItem(this)">delet</button></li>`;
});

function removeItem(element) {
    element.parentNode.remove();
}