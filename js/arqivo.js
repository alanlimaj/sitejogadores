const foto=document.querySelector('#foto')
const haaland=document.querySelector('#haaland')
const cr7=document.querySelector('#cr7')
const mbappe=document.querySelector('#mbappe')
const neymar=document.querySelector('#neymar')
const dybala=document.querySelector('#dybala')
const messi=document.querySelector('#messi')


haaland.addEventListener('click',fotohaaland)
cr7.addEventListener('click',fotocr7)
mbappe.addEventListener('click',fotombappe)
neymar.addEventListener('click',fotoneymar)
dybala.addEventListener('click',fotodybala)
messi.addEventListener('click',fotomessi)



function fotohaaland(){

    foto.src="img/haaland.webp"
}
function fotocr7(){

    foto.src="img/cr7.jpg"
}
function fotombappe(){

    foto.src="img/mbappe.webp"
}
function fotoneymar(){

    foto.src="img/neymar.webp"
}
function fotodybala(){

    foto.src="img/dybala.webp"
}
function fotomessi(){

    foto.src="img/messi.jpg"
}