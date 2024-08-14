var div = document.getElementById('divi');
var boton = document.getElementById("saludo");


boton.addEventListener('click', function(event){
    alert("Hola!"); 
    event.stopPropagation();
});
div.addEventListener('click', () => {
    alert('Hola! Soy el div');
});
