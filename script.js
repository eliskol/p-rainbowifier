var input = document.getElementById('input');
var output = document.getElementById('output');
input.addEventListener("focusout",function(){

  var allP = document.getElementsByTagName('p');
  for(var k = 0; k < allP.length; k++){
    allP[k + 2].remove();
  }

var e = input.value.split("");

  for(var i = 0; i < input.value.length; i++){

  if(i > 5){
    var j = i-5;
  }
  else{
    var j = i;
  }

    var p = document.createElement('p');
    p.innerText = e[i];
    p.className += "a" + (Number(j)+1);
    document.getElementsByTagName('div')[0].appendChild(p);

  e[i] = "§" + String(Number(j)+1) + e[i];
  var f = e.join("");
  output.value = f;
  


  }



  if(localStorage.getItem('copy') == 'on'){
    output.select();
    document.execCommand("copy");
  }

  

  });




var slider = document.getElementById("switch");
var bruh = true;

if(localStorage.getItem('copy') == 'off'){
  bruh = false;
}

slider.addEventListener("click",function(){


  if(bruh){
  localStorage.setItem('copy', 'off');
  bruh = false;
  }
  else{
    localStorage.setItem('copy','on');
    bruh = true;
    output.select();
    document.execCommand("copy");
  }
console.log(localStorage.getItem('copy'));

document.getElementById('auto').innerText =  'automatic copying is: ' + localStorage.getItem('copy');
});

document.getElementById('auto').innerText =  'automatic copying is: ' + localStorage.getItem('copy');