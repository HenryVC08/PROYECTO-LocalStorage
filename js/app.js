//Variables 
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []


//Event Listeners
eventListeners()

function eventListeners(){
    formulario.addEventListener('submit',agregarTweet)
}






//funciones 
function agregarTweet(e){
    e.preventDefault()

    //Text area donde el usuario escribe 
    const tweet = document.querySelector('#tweet').value
    // console.log(tweet)

    //validacion 
    if(tweet === ''){
        // console.log('No puede ir vacio')
        mostrarError('Un mensaje no puede ir vacio')
        return
    }

    console.log('agregando tweet')
}


function mostrarError(error){

    const mensajeError = document.createElement('P')
    mensajeError.textContent = error
    mensajeError.classList.add('error') 

    //insertando en el contenido 
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() =>{
        mensajeError.remove()
    },2000)

}
