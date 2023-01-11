let numberButton = document.getElementById("numberButton");
let numbers = numberButton.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function () {
 let current = document.getElementsByClassName("active");
 if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
this.className += " active";
            let btnSubmit = document.querySelector("#btnSubmit");
            btnSubmit.addEventListener("click", function () {
                document.querySelector("#cardContent").style.display = "none";
                document.querySelector("#cardThk").style.display = "inline-block"
            })  
       
    })
}







