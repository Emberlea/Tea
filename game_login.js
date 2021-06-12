function login(){
    playername1=document.getElementById("login1").value;
    playername2=document.getElementById("login2").value;

    localStorage.setItem("key1",playername1);
    localStorage.setItem("key2",playername2);

    window.location="2index.html";
}