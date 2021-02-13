$(document).ready(function () {
    
    var aux = localStorage.getItem("producto");
    if (aux === null) {
        var pre = [];
        localStorage.setItem("producto", JSON.stringify(pre));
    }
    var guar = JSON.parse(localStorage.getItem("producto"));
    var total = 0;

    for (var x = 0; x < guar.length; x++) {
        
        
        var carrrito = guar[x];
        var precio = carrrito.precio.toString().split('Q');
        var precio1 = parseFloat(precio[1]);
        total += precio1;

        var pantilla = `<tr>
               <td> ${carrrito.nombre} </td> 
               <td> ${carrrito.precio}</td> 
               
           </tr>`;
        $("#tabla").append(pantilla);


    }
    $("#totall").text("Q" + parseFloat(total));
});

