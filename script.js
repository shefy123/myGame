let computerSecret ;
let userInput;

function selectNew() {
	computerSecret = parseInt(Math.random() * 100);
}
function guess(){
    userInput =parseInt(document.querySelector("input").value);
    let alertElement = document.getElementById("alert"); // contains the alert element from the modal

    if (userInput === computerSecret) {
        alertElement.innerHTML= "Congratulation You Won!!" +'\n' +"<i class='fas fa-grin-stars'></i>";

        selectNew();
    }
    else if (userInput > computerSecret) {
        alertElement.innerHTML= " Too High"+'\n'+ "<i class='fas fa-surprise'></i>";
    }
    else {
        alertElement.innerHTML= " Too Low" + '\n' + "<i class='fas fa-frown-open'></i>";
    }
}
selectNew();   