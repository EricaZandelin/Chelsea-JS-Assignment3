const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function() {
    console.log(sidebar.classList);
    /*if(sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove('show-sidebar');
    }
    else {
        sidebar.classList.add("show-sidebar");
    }*/
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
})


// HEX colorbackground

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0;i<6;i++){
    hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}


// Question

function yesButton() {
    let txt;
    if (confirm("Confirm!:-)")) {
      txt = "Good choice, I think so too :-)";
    } else {
      txt = "Bad one, you should try again;)";
    }
    document.getElementById("demo").innerHTML = txt;
  }


  function noButton() {
    let txt;
    if (confirm("Confirm! :-)")) {
      txt = "Bad one, you should try again;)";
    } else {
      txt = "Chelsea ftw";
    }
    document.getElementById("demo").innerHTML = txt;
  }


  /* MODAL */

  const open = document.getElementById('open');
  const modal__container = document.getElementById('modal__container');
  const close = document.getElementById('close-modal-btn');

open.addEventListener('click', () => {
  modal__container.classList.add('show');
})

close.addEventListener('click', () => {
  modal__container.classList.remove('show');
})
