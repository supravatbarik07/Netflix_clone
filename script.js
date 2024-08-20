const boxfaq=document.querySelectorAll(".box-faq")
const plus=document.querySelectorAll(".plus")

for(let i=0;i<=plus.length;i++){
    plus[i].addEventListener('click',()=>{
        boxfaq[i].classList.toggle('box-faq-height') 
        plus[i].classList.toggle('plus_transition')
     })
}