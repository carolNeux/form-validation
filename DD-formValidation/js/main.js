const form = document.querySelector('form');
const firstName = document.querySelectorAll('.first_name');
const lastName = document.querySelectorAll('.last_name');
const userName = document.querySelectorAll('.user_name');
const email = document.querySelector('email');

let errores = {}
function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}    
form.addEventListener('submit',function (event) {
    checkInputs()
    console.log(Object.keys(errores).length);
    if (Object.keys(errores).length > 0) {
         event.preventDefault();  
    }  
})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const userNameValue = userName.value.trim();
    const birdthday = document.querySelector('.date');
    const emailValue = email.value.trim();
    
    if (firstNameValue === '') {
        console.log('vacio')
       /* setError(firstName,'Completá el campo con tu nombre')
     } else { 
        setSucces(firstName)*/
    }


    if (lastNameValue === '') {
        setError(lastName,'Completá el campo con tu Apellido')
     } else { 
        setSucces(lastName)
    }

    if (userNameValue === '') {
        setError(userName,'Completá el campo con tu nombre de usuraio')
     } else {
        setSucces(userName)
    }
   
    if (birdthday === '') {
       setError(birdthday,'Completá tu fehca de nacimiento')
     } else {
      setSucces(birdthday)
    }
    
    if (!isEmail(emailValue)) {
        setError(email,'Ingresa un email valido')
    }  else if(emailValue === ' '){
        setError(email, 'Este campo es obligatorio')
    }
    else {
        setSucces(email)
    }
    

    function setError(input ,message){
        let box = input.parentElement
        let small = box.querySelector('small')
        
        small.innerText = message
        box.className = 'box error'
        errores[input.name] = message 
     
    }
    function setSucces(input) {
        let box = input.parentElement
        let small = box.querySelector('small')
        
        box.className = 'box succes'
        small.innerText = ''
        
        delete errores[input.name] 
    }
}













































