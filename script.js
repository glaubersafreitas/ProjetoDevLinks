function toggleMode (){
 const html = document.documentElement
 html.classList.toggle("light")

 //Pegar a tag img
 const img = document.querySelector("#profile img")

//substituir a imagem
 if(html.classList.contains("light")){
    //se tiver light mode, pegar a imagem light
    img.setAttribute("src", "./assets/meuavatar-light.png")
    img.setAttribute("alt", "Foto de Glauber Freitas, com óculos escuros ao lado da sua esposa")

 } else {
   //se tiver sem light mode, manter a imagem normal. 
   img.setAttribute("src", "./assets/meuavatar.png")
   img.setAttribute("alt", "Foto de Glauber Freitas, usando Jaqueta Cinza")
 }
 
}

function ebook (){
  alert ("Pedimos desculpas, mas no momento não temos nenhum e-book disponível para donwload!")
}

function nlw (){
  alert ("No momento, não há inscrições abertas para o NLW! Em breve, teremos novidades para você!")
}





