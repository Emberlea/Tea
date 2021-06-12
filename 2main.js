function replay(){
    window.location="index.html";
}

name1=localStorage.getItem("key1");
name2=localStorage.getItem("key2");

document.getElementById("scorep1").innerHTML=name1 + " : ";
document.getElementById("scorep2").innerHTML=name2 + " : ";

score1=0;
score2=0;

document.getElementById("scorea").innerHTML=score1;
document.getElementById("scoreb").innerHTML=score2;

document.getElementById("question").innerHTML="Question Turn: "+name1;
document.getElementById("answer").innerHTML="Answer Turn: "+name2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;

    answerreal=parseInt(number1) * parseInt(number2);
    
    d="<h4>"+number1+"X"+number2+"</h4>";
    o="<br><br>Answer: <input type='text' id='text'>";
    g="<br><br><button id='b1' onclick='check()'>Check</button>";

    var all=d+o+g;

    document.getElementById("output").innerHTML=all;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
 var question="player1";
 var answer="player2";

 function check(){
     ga=document.getElementById("text").value;
     if(ga == answerreal){
         if(answer=="player1"){
             score1=score1+1;
             document.getElementById("scorea").innerHTML=score1;
         }
         else{
             score2=score2+1;
             document.getElementById("scoreb").innerHTML=score2;
         }
     }
     if(question == "player1"){
         question="player2";
         document.getElementById("question").innerHTML="Question Turn - "+name2;
     }
     else{
         question="player1";
         document.getElementById("question").innerHTML="Question Turn - "+name1;
     }
     if(answer=="player2"){
         answer="player1";
         document.getElementById("answer").innerHTML="Answer Turn - "+name1;
     }
     else{
         answer="player2";
         document.getElementById("answer").innerHTML="Answer Turn - "+name2;
     }
 }