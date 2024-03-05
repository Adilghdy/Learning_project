function pageload(){
  alert("Welcome to Ker's Mall")
}

var dollarvalues = {
  "dollar1":0,
    "dollar2":0,
      "dollar3":0,
        "dollar4":0,
          "dollar5":0,
           "dollar11":0,
             "dollar22":0,
               "dollar33":0,
                 "dollar44":0,
                   "dollar55":0,
                    "dollar111":0,
                     "dollar222":0,
                      "dollar333":0,
                       "dollar444":0,
                        "dollar555":0,
}

var inputvalues = {
  "cc1":0,
    "cc2":0,
      "cc3":0,
        "cc4":0,
          "cc5":0,
            "ccc1":0,
             "ccc2":0,
              "ccc3":0,
               "ccc4":0,
                "ccc5":0,
                 "cccc1":0,
                  "cccc2":0,
                   "cccc3":0,
                    "cccc4":0,
                     "cccc5":0,
}


// variables for multiplication function


var price = document.getElementById("dollar1a").innerText;

var price1 = document.getElementById("dollar1b").innerText;

var price2 = document.getElementById("dollar1c").innerText;

var price3 = document.getElementById("dollar1d").innerText;

var price4 = document.getElementById("dollar1e").innerText;

var price5 = document.getElementById("dollar1aa").innerText;

var price6 = document.getElementById("dollar1bb").innerText;

var price7 = document.getElementById("dollar1cc").innerText;

var price8 = document.getElementById("dollar1dd").innerText;

var price9 = document.getElementById("dollar1ee").innerText;

var price10 = document.getElementById("dollar1aaa").innerText;

var price11 = document.getElementById("dollar1bbb").innerText;

var price12 = document.getElementById("dollar1ccc").innerText;

var price13 = document.getElementById("dollar1ddd").innerText;

var price14 = document.getElementById("dollar1eee").innerText;



function increase(id) {
  var count1 = document.getElementById(id).innerHTML = ++inputvalues[id];

}

function decrease(id){
 var minus = document.getElementById('a').innerHTML;
 var count1 = document.getElementById(id).innerHTML = --inputvalues[id];
/* if ( --inputvalues[id]==0) {
   document.getElementById('a').innerHTML= "disable";
 }*/
  /* var count1 = document.getElementById(id).innerHTML =(--inputvalues[id]>0) ? --inputvalues[id]:0;
   if (--inputvalues[id]>0) {
     minus.style.disable;
     console.log("vado aay");
     
   }else{
    (id).innerHTML=0;
   }
  let helper={
    show:function(value){
      console.log(value);
    }
  }
  
  helper.show('test')*/
   
  /* if (id == 0) {
     document.getElementById(idbtn).disabled = true;
   } else {
     document.getElementById(idbtn).disabled = false;
   }
   */
}

/*var price = document.getElementById("dollar1").innerText;

function pricetotal(id1, id2){
    var total1 = inputvalues[id1] * price;
    document.getElementById(id2).innerText = total1;
  };
  */
  
  
function pricetotal(id1, id2, id3){
    var total1 = inputvalues[id1] * id3 ;
    document.getElementById(id2).innerText = total1;
     };
    
    
  // Increasing By 1 And 
  // Decreasing By 1 And 
  // Multiplication Code
  
  
  
 /* function pricetotal1(){
    var total1 = inputvalues['cc1'] * price;
    document.getElementById("dollar1").innerText = total1;
  };*/
  
//  var price = document.getElementById("dollar1a").innerText;

  
  document.getElementById("A").addEventListener("click", function(){
    
   increase('cc1')
    
    
    document.getElementById("cc1"). value = inputvalues['cc1'];
    
  
    pricetotal('cc1', 'dollar1', price)
  })
  
 document.getElementById("a").addEventListener("click", function(){
   
    decrease('cc1', 'a')
    
    document.getElementById("cc1").value = inputvalues['cc1'];
    
  
    pricetotal('cc1', 'dollar1', price)
    
  })
  
  
  
  
  var valueCount2 = 0;
  
 // var price1 = document.getElementById("dollar1b").innerText;
  
  
  document.getElementById("B").addEventListener("click", function(){
  
    increase('cc2')
    
    
    document.getElementById("cc2"). value = inputvalues['cc2'];
    
  
    pricetotal('cc2' ,'dollar2',price1)
  })
  
  document.getElementById("b").addEventListener("click", function(){
   
    decrease('cc2')
    
    document.getElementById("cc2"). value = inputvalues['cc2'];
    
  
    pricetotal('cc2','dollar2',price1)
  })
  
  
  
  //var price2 = document.getElementById("dollar1c").innerText;
  
  
  document.getElementById("C").addEventListener("click", function() {
    inputvalues['cc3'] = document.getElementById("cc3").innerHTML = ++inputvalues['cc3'];
  
  
    document.getElementById("cc3").value = inputvalues['cc3'];
  
  
    pricetotal('cc3','dollar3', price2)
  })
  
  document.getElementById("c").addEventListener("click", function() {
    inputvalues['cc3'] = document.getElementById("cc3").innerHTML = --inputvalues['cc3'];
  
  
    document.getElementById("cc3").value = inputvalues['cc3'];
  
  
    pricetotal('cc3','dollar3', price2)
  })
  
  
  //var price3 = document.getElementById("dollar1d").innerText;
  
  
  
  document.getElementById("D").addEventListener("click", function() {
    inputvalues['cc4'] = document.getElementById("cc4").innerHTML = ++inputvalues['cc4'];
  
  
    document.getElementById("cc4").value = inputvalues['cc4'];
  
  
    pricetotal('cc4','dollar4', price3)
  })
  
  document.getElementById("d").addEventListener("click", function() {
    inputvalues['cc4'] = document.getElementById("cc4").innerHTML = --inputvalues['cc4'];
  
  
    document.getElementById("cc4").value = inputvalues['cc4'];
  
  
    pricetotal('cc4','dollar4', price3)
  })
  
  
  
  
 // var price4 = document.getElementById("dollar1e").innerText;
  
  
  document.getElementById("E").addEventListener("click", function() {
    inputvalues['cc5'] = document.getElementById("cc5").innerHTML = ++inputvalues['cc5'];
  
  
    document.getElementById("cc5").value = inputvalues['cc5'];
  
  
    pricetotal('cc5','dollar5', price4)
  })
  
  document.getElementById("e").addEventListener("click", function() {
    inputvalues['cc5'] = document.getElementById("cc5").innerHTML = --inputvalues['cc5'];
  
  
    document.getElementById("cc5").value = inputvalues['cc5'];
  
  
    pricetotal('cc5','dollar5', price4)
  });
  
  







  document.getElementById("Aa").addEventListener("click", function(){
    
   increase('ccc1')
    
    
    document.getElementById("ccc1"). value = inputvalues['ccc1'];
    
  
    pricetotal('ccc1', 'dollar11', price5)
  })
  
 document.getElementById("aa").addEventListener("click", function(){
   
    decrease('ccc1')
    
    document.getElementById("ccc1").value = inputvalues['ccc1'];
    
  
    pricetotal('ccc1', 'dollar11', price5)
  })
  
  
  
  var valueCount22 = 0;
  
  //var price = document.getElementById("dollar22").innerText;
  
  
  document.getElementById("Bb").addEventListener("click", function(){
  
    increase('ccc2')
    
    
    document.getElementById("ccc2"). value = inputvalues['ccc2'];
    
  
    pricetotal('ccc2', 'dollar22',price6)
  })
  
  document.getElementById("bb").addEventListener("click", function(){
   
    decrease('ccc2')
    
    document.getElementById("ccc2"). value = inputvalues['ccc2'];
    
  
    pricetotal('ccc2', 'dollar22', price6)
  })
  
  
  
  //var price = document.getElementById("dollar33").innerText;
  
  
  document.getElementById("Cc").addEventListener("click", function() {
    inputvalues['ccc3'] = document.getElementById("ccc3").innerHTML = ++inputvalues['ccc3'];
  
  
    document.getElementById("ccc3").value = inputvalues['ccc3'];
  
  
    pricetotal('ccc3', 'dollar33',price7)
  })
  
  document.getElementById("cc").addEventListener("click", function() {
    inputvalues['ccc3'] = document.getElementById("ccc3").innerHTML = --inputvalues['ccc3'];
  
  
    document.getElementById("ccc3").value = inputvalues['ccc3'];
  
  
    pricetotal('ccc3', 'dollar33',price7)
  })
  
  
  //var price = document.getElementById("dollar44").innerText;
  
  
  
  document.getElementById("Dd").addEventListener("click", function() {
    inputvalues['ccc4'] = document.getElementById("ccc4").innerHTML = ++inputvalues['ccc4'];
  
  
    document.getElementById("ccc4").value = inputvalues['ccc4'];
  
  
    pricetotal('ccc4', 'dollar44',price8)
  })
  
  document.getElementById("dd").addEventListener("click", function() {
    inputvalues['ccc4'] = document.getElementById("ccc4").innerHTML = --inputvalues['ccc4'];
  
  
    document.getElementById("ccc4").value = inputvalues['ccc4'];
  
  
    pricetotal('ccc4', 'dollar44',price8)
  })
  
  
  
  
  //var price = document.getElementById("dollar55").innerText;
  
  
  document.getElementById("Ee").addEventListener("click", function() {
    inputvalues['ccc5'] = document.getElementById("ccc5").innerHTML = ++inputvalues['ccc5'];
  
  
    document.getElementById("ccc5").value = inputvalues['ccc5'];
  
  
    pricetotal('ccc5', 'dollar55',price9)
  })
  
  document.getElementById("ee").addEventListener("click", function() {
    inputvalues['ccc5'] = document.getElementById("ccc5").innerHTML = --inputvalues['ccc5'];
  
  
    document.getElementById("ccc5").value = inputvalues['ccc5'];
  
  
    pricetotal('ccc5', 'dollar55',price9)
  });
  
  
  
  
  
  document.getElementById("Aaa").addEventListener("click", function(){
    
   increase('cccc1')
    
    
    document.getElementById("cccc1"). value = inputvalues['cccc1'];
    
  
    pricetotal('cccc1', 'dollar111',price10)
  })
  
 document.getElementById("aaa").addEventListener("click", function(){
   
    decrease('cccc1')
    
    document.getElementById("cccc1").value = inputvalues['cccc1'];
    
  
    pricetotal('cccc1', 'dollar111',price10)
  })
  
  
  
  var valueCount22 = 0;
  
 // var price = document.getElementById("dollar222").innerText;
  
  
  document.getElementById("Bbb").addEventListener("click", function(){
  
    increase('cccc2')
    
    
    document.getElementById("cccc2"). value = inputvalues['cccc2'];
    
  
    pricetotal('cccc2', 'dollar222',price11)
  })
  
  document.getElementById("bbb").addEventListener("click", function(){
   
    decrease('cccc2')
    
    document.getElementById("cccc2"). value = inputvalues['cccc2'];
    
  
    pricetotal('cccc2', 'dollar222',price11)
  })
  
  
  
  //var price = document.getElementById("dollar333").innerText;
  
  
  document.getElementById("Ccc").addEventListener("click", function() {
    inputvalues['cccc3'] = document.getElementById("cccc3").innerHTML = ++inputvalues['cccc3'];
  
  
    document.getElementById("cccc3").value = inputvalues['cccc3'];
  
  
    pricetotal('cccc3', 'dollar333',price12)
  })
  
  document.getElementById("ccc").addEventListener("click", function() {
    inputvalues['cccc3'] = document.getElementById("cccc3").innerHTML = --inputvalues['cccc3'];
  
  
    document.getElementById("cccc3").value = inputvalues['cccc3'];
  
  
    pricetotal('cccc3', 'dollar333',price12)
  })
  
  
  //var price = document.getElementById("dollar444").innerText;
  
  
  
  document.getElementById("Ddd").addEventListener("click", function() {
    inputvalues['cccc4'] = document.getElementById("cccc4").innerHTML = ++inputvalues['cccc4'];
  
  
    document.getElementById("cccc4").value = inputvalues['cccc4'];
  
  
    pricetotal('cccc4', 'dollar444',price13)
  })
  
  document.getElementById("ddd").addEventListener("click", function() {
    inputvalues['cccc4'] = document.getElementById("cccc4").innerHTML = --inputvalues['cccc4'];
  
  
    document.getElementById("cccc4").value = inputvalues['cccc4'];
  
  
    pricetotal('cccc4', 'dollar444',price13)
  })
  
  
  
  
  //var price = document.getElementById("dollar1a").innerText;
  
  
  document.getElementById("Eee").addEventListener("click", function() {
    inputvalues['cccc5'] = document.getElementById("cccc5").innerHTML = ++inputvalues['cccc5'];
  
  
    document.getElementById("cccc5").value = inputvalues['cccc5'];
  
  
    pricetotal('cccc5', 'dollar555',price14)
  })
  
  document.getElementById("eee").addEventListener("click", function() {
    inputvalues['cccc5'] = document.getElementById("cccc5").innerHTML = --inputvalues['cccc5'];
  
  
    document.getElementById("cccc5").value = inputvalues['cccc5'];
  
  
    pricetotal('cccc5', 'dollar555',price14)
  });
  
  
  
  
  

  
  
 // Sub Total Count Code
  
  function subcount(aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo) {
     return aa + bb + cc + dd + ee + ff + gg + hh + ii + jj + kk + ll + mm + nn + oo;
   }
    
   // document.getElementById("con").addEventListener("click", function(){
      
  
  // Total Count Code
    
    function totalcount(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
     return a+ b+ c+ d+ e + f+ g+ h+ i+ j+ k+ l+ m+ n+ o+ p;
   }
    
    document.getElementById("con").addEventListener("click", function(){
      
      
      
        //This Variables Is For Tatal Count And Sub Count 
  
  var doll1 = parseFloat(document.getElementById("dollar1").innerHTML);
   var doll2 = parseFloat(document.getElementById("dollar2").innerHTML);
   var doll3 = parseFloat(document.getElementById("dollar3").innerHTML);
   var doll4 = parseFloat(document.getElementById("dollar4").innerHTML);
   var doll5 = parseFloat(document.getElementById("dollar5").innerHTML);
   
   
   var doll11 = parseFloat(document.getElementById("dollar11").innerHTML);
   var doll22 = parseFloat(document.getElementById("dollar22").innerHTML);
   var doll33 = parseFloat(document.getElementById("dollar33").innerHTML);
   var doll44 = parseFloat(document.getElementById("dollar44").innerHTML);
   var doll55 = parseFloat(document.getElementById("dollar55").innerHTML);
   
   
   
   var doll111 = parseFloat(document.getElementById("dollar111").innerHTML);
   var doll222 = parseFloat(document.getElementById("dollar222").innerHTML);
   var doll333 = parseFloat(document.getElementById("dollar333").innerHTML);
   var doll444 = parseFloat(document.getElementById("dollar444").innerHTML);
   var doll555 = parseFloat(document.getElementById("dollar555").innerHTML);
   
   var shipping = parseFloat(document.getElementById("shiping-count").innerHTML);
  
  
  
      
      document.getElementById("sub-count").innerHTML = subcount(doll1, doll2, doll3, doll4, doll5, doll11, doll22, doll33, doll44, doll55, doll111, doll222, doll333, doll444, doll555)
   
  document.getElementById("total-count").innerHTML = totalcount(doll1, doll2, doll3, doll4, doll5, doll11, doll22, doll33, doll44, doll55, doll111, doll222, doll333, doll444, doll555, shipping)
  
  
  
  var sub = document.getElementById("sub-count");
  
  
  if (sub == 0) {
    shipping.value = 0
  } else {
    shipping.value = 110
  }
  
    });
    
   // Remove Button - Value Code
    
  function clearResult(id3, id4){
  document.getElementById(id3).value = 0;
  document.getElementById(id4).innerText = 0
}

document.getElementById('r1').addEventListener('click', function(){
clearResult('cc1','dollar1')
});

document.getElementById('r2').addEventListener('click', function(){
clearResult('cc2', 'dollar2')
});

document.getElementById('r3').addEventListener('click', function() {
  clearResult('cc3', 'dollar3')
});

document.getElementById('r4').addEventListener('click', function() {
  clearResult('cc4', 'dollar4')
});

document.getElementById('r5').addEventListener('click', function() {
  clearResult('cc5', 'dollar5')
});

let list=document.getElementById('keyword_searcher1')
list.style.display='none'

function searchBox() {
      var x = document.getElementById('text').value;
      var y = document.getElementById('keyword_searcher1');
      if (x.length > 0) {
        y.style.display = 'block';
      } else {
        y.style.display = 'none';
      }
    }
    
    document.getElementById("text").addEventListener("onkeyup", function() {
      searchBox();
    });
   
   var totalBill = document.getElementById('total-count');
   
   
      function bill(){
        
        var c1, c2, c3, c4, c5, cc1, cc2, cc3, cc4, cc5, ccc1, ccc2, ccc3, ccc4, ccc5;
  
  c1 = document.getElementById('cc1').value = inputvalues['cc1'];
  c2 = document.getElementById('cc2').value;
  c3 = document.getElementById('cc3').value;
  c4 = document.getElementById('cc4').value;
  c5 = document.getElementById('cc5').value;
  cc1 = document.getElementById('ccc1').value;
  cc2 = document.getElementById('ccc2').value;
  cc3 = document.getElementById('ccc3').value;
  cc4 = document.getElementById('ccc4').value;
  cc5 = document.getElementById('ccc5').value;
  ccc1 = document.getElementById('cccc1').value;
  ccc2 = document.getElementById('cccc2').value;
  ccc3 = document.getElementById('cccc3').value;
  ccc4 = document.getElementById('cccc4').value;
  ccc5 = document.getElementById('cccc5').value;
 
  
/*alert( 

//Shirt : ${c1},


         "Shirt : "+c1+" "+cc1+" "+ccc1+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+
         "Pant : "+c2+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+
         "Shoes : "+c3+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+
         "T - Shirt : "+c4+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+
         "Lengo : "+c5+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+" "+" "+" " +" "+" "+
         "Total Amount Is:" +" "+ document.getElementById('total-count').innerText )*/
         
         
         alert(`
         
         Branded Shirt   : ${c1} 
         
         Summer Shirt    : ${cc1}  
         
         Hoodie  : ${ccc1}
         
         Pants  :  ${c2} ${cc2} ${ccc2}
         
         T-Shirts  :  ${c3} ${cc3} ${ccc3}
         
         Shoes   :  ${c4} ${cc4} ${ccc4}
         
         Lengas  :  ${c5} ${cc5} ${ccc5}
         
         Total Amount Is  :  ${document.getElementById('total-count').innerText }
         
         
         `)    
         
        
      }
   
 
   function myFunction() {
     console.log("javed");
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("text");
    
    filter = input.value.toUpperCase();
   if (filter=='') {
     list.style.display='none'
   }else{
     list.style.display='block'
   }
    ul = document.getElementById("keyword_searcher1");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || 
        a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
};

   
   
   // function mail() {
   // var x = document.getElementById('name').innerText;
   // if (x.length < 0 && y.length < 0) {
   //   alert("Enter mail first");
//    } else {
    // alert("Mail Entered Successfully")
  //  }
  //}
  
  //mail()
  
//  document.getElementById("sub").addEventListener("click", function() {
    //alert("Enter Mail First")
  //});
  
  //function required()
 // {
    //var empt = document.form1.text1.value;
   // if (empt === "")
   // {
      //alert("Please input a Value");
    //  return false;
   // }
   // else
   // {
   //   alert('Code has accepted : you can try another');
  //    return true;
//    }
  //}
  
  
  //અગર shirt વે ત કેટલી quantity આય shirt જી વતાય 
  
  // example your order is 1 - shirt
  
  
  

  
 // document.getElementById('v').addEventListener('click', function() {
   // alert(c1)
       // value("cc1");
//});


function coupon(){

var couponin = document.getElementById('couponin').value.toLowerCase();

//document.getElementById('coupon').addEventListener('click', function(){
//  console.log(couponin);
//alert('got')

if (couponin == "adilker99" || couponin == "adilker99 "  || couponin == "Adilker99 ") {
  alert(`You Got Grand 99% Discount
  `)
  
  
  var subc = document.getElementById("sub-count").innerHTML;

  var totalValue = subc - (subc * 99)/ 100;
  
  console.log(totalValue);
// var dis = 
 document.getElementById("total-count").innerHTML = totalValue.toFixed(0);
  
  //console.log(dis);

} 

else if (couponin == "javedker") {
  alert(`Coupon Accepted`)
  
  
  var subc = document.getElementById("sub-count").innerHTML;

  var totalValue = subc - (subc * 90)/ 100;
  
  console.log(totalValue);
// var dis = 
 document.getElementById("total-count").innerHTML = totalValue.toFixed(0);
  
  //console.log(dis);

} 

else if (couponin == "sahilker") {
  alert(`Coupon Accepted`)
  
  
  var subc = document.getElementById("sub-count").innerHTML;

  var totalValue = subc - (subc * 20)/ 100;
  
  console.log(totalValue);
// var dis = 
 document.getElementById("total-count").innerHTML = totalValue.toFixed(0);
  
  //console.log(dis);

} 


else {
  alert('This coupon code is invalid')
}


  //console.log('hi');
  //if (couponin.length = ) {
    //alert('You Got 99% Discount')
  //}
//})

}


/*function minusPercent(n,p) {
  return n - (n * (p/100));
}

console.log(minusPercent(100,30)); */

/*if (couponin == true) {
  
  document.getElementById('total-count').innerText// = -90%
}
*/

//document.getElementById('summer').addEventListener('click', alert('summer clothes'))

/*var clothes = document.getElementById('clothes')

if (clothes = summer) {
  alert('summer clothes ')
}*/


function getOption() {
  let summer = document.getElementById('clothes').value;
  
  let summerclo = document.getElementById('summerclo');
  
  let wintercloth = document.getElementById('wintercloth');
  
  let brandedcloth = document.getElementById('brandedcloth');

        
        
  console.log(summer);
        selectElement = document.getElementById('clothes');
        /*output = selectElement.value;
        document.querySelector('#output').textContent = output;*/
        
  

if (summer == 'summer clothes') {
  
  summerclo.style.display="block"
  wintercloth.style.display="none"
  brandedcloth.style.display="none"
  
  
  
  alert(summer)
} else if (summer == 'branded clothes') {
  brandedcloth.style.display="block"
  summerclo.style.display="none"
  wintercloth.style.display="none"
  
  alert(summer)
}
else if (summer == 'winter clothes') {
  
  wintercloth.style.display="block"
  brandedcloth.style.display="none"
  summerclo.style.display="none"
  
  alert(summer)
}

}



/*function show() {
  document.getElementById('summerclo').style.display="block"
}

function hide() {
  document.getElementById('summerclo').style.display="none"
}*/


function checkout()
  {
    
    
    
    var newElement = document.getElementById('pay');
    
    var oldElement = document.getElementById('checkout');
    
    newElement.style.display = "block";
    
    oldElement.style.display = "none"
        /* var newElement = document.getElementById('pay')
         
         newElement.style.display="block"
         
         var oldElement = document.getElementById('checkout');
         oldElement.replaceWith(newElement);*/
     }
  
  function qr(){
    
    var google = document.getElementById('google');
    var phonepe = document.getElementById('phonepe');
    var or = document.getElementById('oR');
    
    document.getElementById('qr').addEventListener('click', function(){
      document.getElementById('qr_code').style.display="block";
      google.style.display="none";
      phonepe.style.display="none";
      or.style.display="none";
    })
  }
  
  function back(){
    
    var newElement = document.getElementById('pay');
    
    var oldElement = document.getElementById('checkout');
    
    newElement.style.display = "none";
    
    oldElement.style.display = "block"
    /*var newElement = document.getElementById('checkout')
    
    
    
    var oldElement = document.getElementById('pay');
         oldElement.replaceWith(newElement);*/
         
    
    
    /*var newELement = document.getElementById('checkout')
   
   //newElement.style.display="none"
    
    var oldELement = document.getElementById('pay');
    oldELement.replaceWith(newELement);
    
    
    document.getElementById('qr_code').style.display="none";
    google.style.display="none";
      phonepe.style.display="none";
      document.getElementById('oR').style.display="none";
    document.getElementById('pay_with').style.display="none";*/
    
  
  }
 document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
    
  cc1 = document.getElementById('cc1').value;
  console.log(cc1);
  })