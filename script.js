var input = document.getElementById('input');
var output = document.getElementById('output');
//a
input.addEventListener("focusout",function(){

var c = document.getElementById('cc');
var fc = document.getElementById('fc');
var vis = document.getElementById('visualizer'); //unneccesary for now
var div = document.createElement('div');
var p = document.createElement('strong');





if(c.value == "rgb"){
  output.value = "";
  for(var i = 0; i < input.value.length; i++){

  if(i > 5){
    var j = i-5;
  }
  else{
    var j = i;
  }


    var e = input.value.split("");
    var p = document.createElement('strong');

    p.className += "a" + (Number(j)+1);
     // if(i == input.value.length){
     //   p.style.visibility = 'none';
     // }
    div.appendChild(p);
    e[i] = "§" + String(Number(j)+1) + e[i];
    output.value += e[i];
    p.innerText = e[i];







  }

 }//end of rgb

 else{
     var e = "§" + c.value + input.value;
     output.value = e;


     //create visualization
     var p = document.createElement('strong');
     p.innerText = e;
     p.className += "a" + c.value;
}

if(fc.value !== ""){
  p.className += " a" + fc.value;
  output.value = "§" + fc.value + output.value;
  console.log('formatting added');
}

    div.appendChild(p);

var iBH = document.getElementsByTagName('div')[0];
document.body.insertBefore(div, iBH);
  if(localStorage.getItem('copy') == 'on'){
    output.select();
    document.execCommand("copy");
  }



  }); //end of eventlistener function




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
