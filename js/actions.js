// este codigo es para que al inicio se cargue siempre la pagina de registro y no a la de index.
// si queremos que inicie en index tenemos que darle x=true

var fn={
  ready:function() {
       document.addEventLisgtener('deviceready',fn,false);
  },
  init:function () {
  	 var x=false;
  	 if(!x)
  	 window.location.href="#registro";
          $('#registro a:eq(1)').tap(fn.registrar);
  },
   registrar:function(){
      nom=$('#registro input:eq(0)').val(); 
      mail=$('#registro input:eq(1)').val(); 
      tel=$('#registro input:eq(2)').val(); 
      if (nom !='' && mail!='' && tel != '')
          alert(nom+' - '+mail+' - '+tel);
      else
          navigator.notification.alert("Todos los campos deben tener capturados",null,'Error de entrada de datos','Aceptar');
   }
 };

 $(fn.ready);
//window.addEventListener("load",fn.init,true); // el primero es la accion, el segundo es nombre de la funcion a ejecutar
//$(document).ready(fn.init); = window.addEventListener("load",fn.init,true); = $(fn.init);

