let image = document.querySelectorAll(".slider-head .slide-imm img");
let pervious = document.querySelector(".prev-slide");
let next = document.querySelector(".next-slide");

let n=0;

function slide(){
    for(let i=0; i<image.length; i++){
        image[i].style.display="none";
    }
    image[n].style.display = "block";
}
slide();

pervious.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }else{
        n=image.length-1;
    }
    slide();
})

next.addEventListener("click", (e) => {
  if (n < image.length-1) {
    n++;
  } else {
    n = 0;
  }
  slide();
});