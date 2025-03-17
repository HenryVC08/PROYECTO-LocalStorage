//Variables 
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []


//Event Listeners
eventListeners()

function eventListeners(){
    
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet)

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweet')) || []
 
        console.log(tweets)
        
        crearHTML()
    })
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

    const tweetObj = {
        id: Date.now(),
        text: tweet
    }
    //Añadiendo al arreglo de tweets
    tweets= [...tweets, tweetObj]
    console.log(tweets)

    //Crear HTML
    crearHTML()

    //Reiniciar el formulario 

    formulario.reset()

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

//Muestra unb listado de los tweets

function crearHTML(){

    limpiarHTML()

    if(tweets.length > 0){
        tweets.forEach(tweet =>{
            //Crear HTML
            const li = document.createElement('li')

            li.innerText = tweet.text
            //insertarlo en el HTML

            listaTweets.appendChild(li)
        })
    }


    sincronizarStorage()

}

function sincronizarStorage(){
    localStorage.setItem('tweet',JSON.stringify(tweets))
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}