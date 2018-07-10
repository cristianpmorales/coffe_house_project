
  var trash = document.getElementsByClassName("fas fa-trash-alt");
  order = ""
  size = ""

  document.getElementsByClassName("cafeOption1")[0].addEventListener('click', function(){
          console.log("clicked");
          var ordercafe = document.getElementById('black-cafe').innerText
          order = ordercafe
          console.log(ordercafe)
        });

  document.getElementsByClassName("cafeOption2")[0].addEventListener('click', function(){
         console.log("clicked");
         var ordercafe = document.getElementById('cafe-leche').innerText
         order = ordercafe
         console.log(document.getElementById('cafe-leche').innerText)
  });
  document.getElementsByClassName("cafeOption3")[0].addEventListener('click', function(){
         console.log("clicked");
         var ordercafe = document.getElementById('cafe-leche-azucar').innerText
         order = ordercafe
         console.log(document.getElementById('cafe-leche-azucar').innerText)
  });
  document.getElementsByClassName("cafeOption4")[0].addEventListener('click', function(){
         console.log("clicked");
         var ordercafe = document.getElementById('ice-cafe').innerText
         order = ordercafe
         console.log(document.getElementById('ice-cafe').innerText)
  });
  document.getElementsByClassName("sizeOption")[0].addEventListener('click', function(){
         console.log("clicked");
         var  sizechoice = document.getElementById('x-small').innerText
         size = sizechoice
         console.log(document.getElementById('x-small').innerText)
  });
  document.getElementsByClassName("sizeOption")[1].addEventListener('click', function(){
         console.log("clicked");
         var sizechoice = document.getElementById('small').innerText
         size = sizechoice
         console.log(document.getElementById('small').innerText)
  });
  document.getElementsByClassName("sizeOption")[2].addEventListener('click', function(){
         console.log("clicked");
         var sizechoice = document.getElementById('medium').innerText
         size = sizechoice
         console.log(document.getElementById('medium').innerText)
  });
  document.getElementsByClassName("sizeOption")[3].addEventListener('click', function(){
         console.log("clicked");
         var sizechoice = document.getElementById('large').innerText
         size = sizechoice
         console.log(document.getElementById('large').innerText)
  });
  document.getElementsByClassName("submitButton")[0].addEventListener('click', function(){
         var customer = document.getElementsByTagName('input')[0].value
         console.log("clicked submit");
         console.log(order)
         console.log(size);
         console.log(ordercafe)
         fetch('messages', {
           method: 'post',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({
             'order': order,
             'size' : size,
             'customer': customer
           })
         })
         .then(data => {
           console.log(data)
           window.location.reload(true)
         })
  });
