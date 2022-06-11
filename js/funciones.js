 function evaluar() {
    var preguntaunob = document.getElementById("preguntauno").value;
    var preguntadosb = document.getElementById("preguntados").value;
    var preguntatresb = document.getElementById("preguntatres").value;
    var preguntacuatrob = document.getElementById("preguntacuatro").value;
    var nombreb = document.getElementById("nombre").value;
    
    var tot=0;
   if (preguntaunob == 1) {
      tot=tot+25;
    }
    if (preguntadosb == 3) {
      tot=tot+25;
    }
    if (preguntatresb == 4) {
        tot=tot+25;
      }
    if (preguntacuatrob == 2) {
        tot=tot+25;
    }
    
    if (tot >50){
        alert('Felicitaciones  '+ nombreb +' ha obtenido una calificación de aprobación: '+ tot +' ');
     } else
     {
       alert('Lo lamentamos  '+ nombreb +' ha obtenido una calificación de desaprobación: '+ tot +'');
     }
    
    return tot
}