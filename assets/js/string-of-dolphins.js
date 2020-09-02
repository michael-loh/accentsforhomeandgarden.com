(function(){
"use strict";
    
    var qty = document.getElementById('qty');
    console.log(qty);
    
    document.getElementById('add-qty').addEventListener('click', addQty);
    document.getElementById('subtract-qty').addEventListener('click', subQty);
    
    function addQty(event){
        var num = parseInt(qty.value);
        num++;
        qty.value = num;
    }
    
    function subQty(event){
        var num = parseInt(qty.value);
        num = (num == 1)? 1: num-1;
        qty.value = num;
    }
    
})();