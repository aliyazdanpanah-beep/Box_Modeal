const Modea_buttun = document.getElementById('Modea_buttun')
const Box_Modeal = document.getElementById('Box_Modeal')
const Box_Modeal_buttun = document.getElementById('Box_Modeal_buttun')


// ___________________________ way one {} 


// Modea_buttun.onclick = function () {

//      Box_Modeal.style.opacity = '1';
//      Box_Modeal.style.zIndex = '3';
//      Box_Modeal.style.transition = 'all ease-in 0.3s';
// }

// Box_Modeal_buttun.onclick = function () {

//      Box_Modeal.style.opacity = '0'
//      Box_Modeal.style.zIndex = '1'
//      Box_Modeal.style.transition = 'all ease-in 0.3s'
// }


// ___________________________ way two {}


Modea_buttun.onclick = () => {
    
     Box_Modeal.style.opacity = '1';
     Box_Modeal.style.zIndex = '3';
     Box_Modeal.style.transition = 'all ease-in 0.3s';
}

Box_Modeal_buttun.onclick = () => {

     Box_Modeal.style.opacity = '0'
     Box_Modeal.style.zIndex = '1'
     Box_Modeal.style.transition = 'all ease-in 0.3s'
}