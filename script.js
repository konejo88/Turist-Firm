
console.log('proverka')

const otel=document.querySelectorAll(".otel")
const nomera=document.querySelectorAll(".nomera")
console.log(otel)

otel.forEach((x,y)=>{
console.log(y)
x.addEventListener("click",()=>{
	nomera.forEach((z)=>{
z.classList.remove("activ")
	})
	otel.forEach((x)=>{
		x.classList.remove("activ")
	})
otel[y].classList.add("activ")
nomera[y].classList.add("activ")
})
})
anime({
  targets: '.recom',
  translateX: 250,
  duration: 3000
});
anime({
  targets: '.turkey img,.egypt img,.greece img',
  translateX: [0, 200], // from 100 to 250
  delay: 1000,
  direction: 'alternate',
  duration: 10000,
  loop: true
});
