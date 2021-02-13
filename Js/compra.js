$(document).ready(function () {
      
     var aux = localStorage.getItem("producto"); 
   if(aux===null){
       var pre=[];
       localStorage.setItem("producto",JSON.stringify(pre));
   }
   var guardado=JSON.parse(localStorage.getItem("producto")); 
   var total=0;
   
   for(var x=0;x<guardado.length;x++){
       
       var carrito=guardado[x];
       var precio=carrito.precio.toString().split('Q');
       var precio1= parseFloat(precio[1]);
       total+=precio1;
      
       var pantilla=`<tr>
               <td> ${carrito.nombre} </td> 
               <td> ${carrito.precio}</td> 
           </tr>`;
        $("#tabla").append(pantilla);
       
      
   }
    $("#totall").text("Total:"+" Q"+parseFloat(total));
    
    $("#pago").click(function(){
        
         cancelar();
          alert("Venta Realizada");
     });
    $("#canpago").click(function(){
        
         cancelar();
          alert("Productos Comprados");
     });
     var cancelar=  function (){
      $("tr").remove();
      var tb=`<tr>
                   
                    <th>Producto</th>
                    <th>Precio</th>
                   
                </tr>`;
        $("#tabla").append(tb);
        var dat=[];
        guardado=dat;
        localStorage.setItem("producto", JSON.stringify(dat));
         total = 0;
         $("#totall").text("Total:"+" "+"Q"+parseFloat(total)+".00");
    };
    
    
});


 