    window.onload = function(){

  var html1 = setInterval(function(){

  let html_1 = document.querySelector('#html1');

    if(!html_1.innerHTML.match(/30%/gi)){
      html_1.innerHTML = (parseInt(html_1.innerHTML) + 1) + '%';
    } else {
      clearInterval();
    }
  }, 24)

  var css1 = setInterval(function(){

  let css_1 = document.querySelector('#css1');  

    if(!css_1.innerHTML.match(/50%/gi)){
      css_1.innerHTML = (parseInt(css_1.innerHTML) + 1) + '%';
    } else {
      clearInterval();
    }
  }, 24)

  var js1 = setInterval(function(){

  let js_1 = document.querySelector('#js1');

  if(!js_1.innerHTML.match(/20%/gi)){
    js_1.innerHTML = (parseInt(js_1.innerHTML) + 1) + '%';
  } else {
    clearInterval();
  }
  }, 24)


  var html2 = setInterval(function(){

    let html_2 = document.querySelector('#html2');
  
      if(!html_2.innerHTML.match(/30%/gi)){
        html_2.innerHTML = (parseInt(html_2.innerHTML) + 1) + '%';
      } else {
        clearInterval();
      }
    }, 24)
  
    var css2 = setInterval(function(){
  
    let css_2 = document.querySelector('#css2');  
  
      if(!css_2.innerHTML.match(/50%/gi)){
        css_2.innerHTML = (parseInt(css_2.innerHTML) + 1) + '%';
      } else {
        clearInterval();
      }
    }, 24)
  
    var js2 = setInterval(function(){
  
    let js_2 = document.querySelector('#js2');
  
    if(!js_2.innerHTML.match(/20%/gi)){
      js_2.innerHTML = (parseInt(js_2.innerHTML) + 1) + '%';
    } else {
      clearInterval();
    }
    }, 24)


  var py1 = setInterval(function(){

  let py_1 = document.querySelector('#py1');
  
    if(!py_1.innerHTML.match(/100%/gi)){
        py_1.innerHTML = (parseInt(py_1.innerHTML) + 1) + '%';
    } else {
      clearInterval();
    }
    }, 24)


  var cs1 = setInterval(function(){

        let cs_1 = document.querySelector('#cs1');
        
          if(!cs_1.innerHTML.match(/75%/gi)){
            cs_1.innerHTML = (parseInt(cs_1.innerHTML) + 1) + '%';
          } else {
            clearInterval();
          }
          }, 24)

var sq1 = setInterval(function(){

let sq_1 = document.querySelector('#sq1');
            
              if(!sq_1.innerHTML.match(/25%/gi)){
                sq_1.innerHTML = (parseInt(sq_1.innerHTML) + 1) + '%';
              } else {
                clearInterval();
              }
              }, 24)
    

cs1
js1
css1
html1
css2
js2
html2
py1
}