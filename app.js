
let who = ['El perro','Mi abuela','Mi tortuga','Mi canario', 'Mi gato'];
let action = ['se comio', 'orino', 'aplasto', 'rompio'];
let what = ['mi tarea','mi telefono','el coche'];
let when = ['antes de clases','justo cuando terminé','mientras almorzaba','mientras yo rezaba'];

function excuseGenerator(who, action, what, when){
    numwho= Math.floor(Math.random() * who.length);
    numaction = Math.floor(Math.random() * action.length);
    numwhat = Math.floor(Math.random() * what.length);
    numwhen = Math.floor(Math.random() * when.length);
    return who[numwho] + " " + action[numaction] + " " + what[numwhat] + " " + when[numwhen];
}
function onLoad(){
    var excusas = document.getElementById('excusas');
    excusas.innerHTML = excuseGenerator(who, action,what, when);
}
window.onload = onLoad;

