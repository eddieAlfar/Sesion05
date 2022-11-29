const form=document.querySelector('#form');
form.addEventListener("submit",calcular)

function calcular(e){
    let nombre=document.querySelector('#name').value
    let cat=document.querySelector('#categoria').value
    let hora=parseInt(document.querySelector('#number').value)
    let sueldo=0;
    let boni=0;
    let tot=0;

    if(hora>=1 & hora<=3){
        if(cat=='b'){
            sueldo= hora*35
            boni=sueldo*0.15
            tot=sueldo+boni;
       }else if(cat=='a'){
           sueldo= hora*40
           boni=sueldo*0.15             
            tot=sueldo+boni;
       }else{
           sueldo= hora*30
           boni=sueldo*0.15
            tot=sueldo+boni;
       }
    }else

    if(hora>=4 & hora<=7){
        if(cat=='b'){
            sueldo= hora*35
            boni=sueldo*0.20
            tot=sueldo+boni;
       }else if(cat=='a'){
           sueldo= hora*40
           boni=sueldo*0.20
            tot=sueldo+boni;
       }else{
           sueldo= hora*30
           boni=sueldo*0.20
            tot=sueldo+boni;
       }
    }else

    if(hora>=8 & hora<=12){
        if(cat=='b'){
            sueldo= hora*35
            boni=sueldo*0.30
            tot=sueldo+boni;
       }else if(categoria=='a'){
           sueldo= hora*40
           boni=sueldo*0.30
            tot=sueldo+boni;
       }else{
           sueldo= hora*30
           boni=sueldo*0.30
            tot=sueldo+boni;
       }
    }else{
        
    if(hora>=13 ){
        if(cat=='b'){
            sueldo= hora*35
            boni=sueldo*0.35
            tot=sueldo+boni;
       }else if(categoria=='a'){
           sueldo= hora*40
           boni=sueldo*0.35
            tot=sueldo+boni;
       }else{
           sueldo= hora*30
           boni=sueldo*0.35
            tot=sueldo+boni;
       }
    }
    }
    console.log(sueldo)

    const respuesta=document.getElementById('respuesta')
    respuesta.textContent=`Hola ${nombre} de Categoría ${cat}  con  ${hora} horas trabajadas recibirá: ` 
    const sueldoneto=document.getElementById('sueldoneto')
    sueldoneto.textContent=` Sueldo Básico: S/. ${sueldo} Bonificación por años de Servicio: S/. ${boni} Sueldo Neto: S/. ${tot}` 
   
}