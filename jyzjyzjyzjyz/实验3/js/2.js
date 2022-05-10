window.onload = function(){
    var p1=document.getElementById("p1");
    p1.onclick=function(){
        this.style.color = "red";
        alert("1");


    }
    var p5=document.getElementById("p5");
    p5.onclick=function(){
        window.open("https://www.taobao.com/","_blank"); 
        alert("5");
    }
    var p=document.getElementById("p9");
    p9.onclick=function(){
        alert("9");
    }
}




function buttonClick2(){
    var date = new Date();
    var a = "-";
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day= date.getDate();
    if (month>=1 && month<=9){
        month="0"+month;
    }
    if (day>=1 && day<=9){
     day+="0"+day;
    }
    s=year+a+month+a+day;
    document.getElementById("h1").innerHTML=s;
    alert("2");
}

function buttonClick3(){
    alert("3");
    var a=document.getElementById("p1").parentNode;
    a.className += " " +"fn-active";
}

function buttonClick4(){
    var child=document.getElementById("p8");
    child.remove();
    alert("4");

} 

function buttonClick6(){
    var parent= document.getElementById('ul');
    var element1 = document.createElement("li");
    element1.innerHTML="p9";
    element1.id="p9";
    parent.appendChild(element1);
    alert("6");
}

function buttonClick7(){
    var width = window.innerWidth;
    document.getElementById('class1').style.width=width;
    alert("7");
}
