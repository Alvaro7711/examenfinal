
$(document).ready(function () {
    
   
   var aux = localStorage.getItem("producto"); 
   if(aux===null){
       var pre=[];
       localStorage.setItem("producto",JSON.stringify(pre));
   }
   var guardado=JSON.parse(localStorage.getItem("producto"));
   
   
    $(".cent").click(function(){
        
        var valor=$(this).val();
       alert("Se Ha Añadido Al Carrito De Compras El Producto "+valor);
        var nombre = $("#c"+valor + " h3").text() ;
        var precio = $("#c"+valor + " h5").text() ;
        
       var carrito={"nombre": nombre, "precio":precio};
       guardado.push(carrito);
       
        localStorage.setItem("producto",JSON.stringify(guardado));
         console.log(guardado);
        
        
        
    });
});


