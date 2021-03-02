
function change(){
  document.getElementById('login-form').style="display:none";
  document.getElementById('register-form').style="display:inline-block;";
  document.getElementById("response").style="display:none";
};
function change2(){
  document.getElementById('login-form').style="display:inline-block";
  document.getElementById('register-form').style="display:none;";
  document.getElementById("response").style="display:none";
}

function register(){
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/users';
    var user= document.getElementById("user2").value;
    var pass= document.getElementById("pass2").value;
    if(user=="" || pass==""){
      alert("Insert username or password");
    } else{
    var acc= "{\"username\":\""+user+"\",\"password\":\""+pass+"\"}";
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(acc);
  
    Http.onreadystatechange = (e) => {
      if (Http.status==400){
        document.getElementById("response").style="display:inline-block";
        document.getElementById("login-form").style="display:none";
        document.getElementById("show").innerHTML="Account not created";
      } else {
        document.getElementById("response").style="display:inline-block";
        document.getElementById("login-form").style="display:none";
      document.getElementById("show").innerHTML = "Account created";
    }}
}}


function login(){
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/auth/login';
    var user= document.getElementById("user").value;
    var pass= document.getElementById("pass").value;
    if(user=="" || pass==""){
      alert("Insert username or password");
    } else{
      var acc= "{\"username\":\""+user+"\",\"password\":\""+pass+"\"}";
      Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
    Http.send(acc);
  
    Http.onreadystatechange = (e) => {
      if (Http.status==401){
        document.getElementById("response").style="display:inline-block";
        document.getElementById("show").innerHTML="Not logged in. Error";
      } else {
        document.getElementById("response").style="display:inline-block";
        document.getElementById("login-form").style="display:none";
      document.getElementById("show").innerHTML = "Logged in. Welcome!";
      document.getElementById("click3").style="display:inline-block";
      var token= JSON.parse(Http.responseText);
      localStorage.setItem("token",token["access_token"]);
    } }
} }

