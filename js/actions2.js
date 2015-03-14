var fn={
  init: function () {
  	 var x=false;
  	 if(!x)
  	 window.location.href="#registro";
          $('#registro').tap(fn.registrar);
  },
   registrar:function(){
      nom=$('#registro input:eq(0)').val(); 
      mail=$('#registro input:eq(1)').val(); 
      tel=$('#registro input:eq(2)').val(); 
      alert(nom+" "+mail+" "+tel);
   }
};

$(fn.init);
