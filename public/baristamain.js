document.getElementsByClassName("fas fa-trash-alt")[0].addEventListener('click', function(){
        console.log("clicked?");
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'order': order,
            'size' : size,
            'customer': customer
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
