
function getTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }

  var id = document.getElementById("idTD").value;
  if (id == "") {
    alert("Insert an ID");
  } else {
    const url = 'http://localhost:3000/td/' + id;
    Http.open("GET", url);
    Http.setRequestHeader("Authorization", "Bearer " + token);
    Http.send();

    Http.onreadystatechange = (e) => {
      if (Http.status == 201) {
        console.log(Http.responseText);
        document.getElementById("show").innerHTML = prettyPrintJson.toHtml(JSON.parse(Http.response));
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "display:inline-block;padding: 30px;margin-top:-630px;";
        document.getElementById("show").style = "width:auto;height:auto;background-color:white;";
      }
      if (Http.status == 400) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD doesn't exist";
      }
      if (Http.status == 401) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "Not Authorized. Log in again";
      }
    }
  }
}

function deleteTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  var id = document.getElementById("idTD").value;
  if (id == "") {
    alert("Insert an ID");
  } else {
    const url = 'http://localhost:3000/td/' + id;
    Http.open("DELETE", url);
    Http.setRequestHeader("Authorization", "Bearer " + token);
    Http.send();

    Http.onreadystatechange = (e) => {
      if (Http.status == 204) {
        console.log(Http.responseText)
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD deleted";
      }
      if (Http.status == 400) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD not deleted";
      }
      if (Http.status == 401) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "Not Authorized. Log in again";
      }
    }
  }
}

function postTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  var td = localStorage.getItem("import");
  localStorage.removeItem("import");
  if (td == "") {
    alert("Insert a TD");
  } else {
    console.log(td);
    const url = 'http://localhost:3000/td';
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.setRequestHeader("Authorization", "Bearer " + token);
    Http.send(td);

    Http.onreadystatechange = (e) => {
      if (Http.status == 201) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        console.log(Http.getResponseHeader('Location'));
        document.getElementById("show").innerHTML = Http.getResponseHeader('Location');
      }
      if (Http.status == 400) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD not created";
      }
      if (Http.status == 401) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "Not Authorized. Log in again";
      }
    }
  }
}

function putTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  var td = localStorage.getItem("import");
  localStorage.removeItem("import");
  var id = document.getElementById("idTD").value;
  if (id == "") {
    alert("Insert an ID");
  } else {
    const url = 'http://localhost:3000/td/' + id;
    Http.open("PUT", url, true);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.setRequestHeader("Authorization", "Bearer " + token);
    Http.send(td);

    Http.onreadystatechange = (e) => {
      if (Http.status == 204) {
        console.log(Http.responseText)
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD updated";
      }
      if (Http.status == 400) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD not updated";
      }
      if (Http.status == 401) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "Not Authorized. Log in again";
      }
    }
  }
}

function patchTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  var td = localStorage.getItem("import");
  localStorage.removeItem("import");
  var id = document.getElementById("idTD").value;
  if (id == "") {
    alert("Insert an ID");
  } else {
    const url = 'http://localhost:3000/td/' + id;
    Http.open("PATCH", url, true);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.setRequestHeader("Authorization", "Bearer " + token);
    Http.send(td);

    Http.onreadystatechange = (e) => {
      if (Http.status == 204) {
        console.log(Http.responseText)
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "TD updated";
      }
      if (Http.status == 400) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").innerHTML = "TD not updated";
      }
      if (Http.status == 401) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "Not Authorized. Log in again";
      }
    }
  }
}

function searchTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  var query = document.getElementById("search").value;
  if (query == "") {
    alert("Insert the JSONPath query");
  }
  else {
    const url = "http://localhost:3000/search/jsonpath?query=" + query.replace(/\s+/g, '');
    Http.open("GET", url, true);
    Http.setRequestHeader("Authorization", "Bearer " + token);
    Http.send();

    Http.onreadystatechange = (e) => {
      if (Http.status == 200) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "display:inline-block;padding: 30px;margin-top:-630px;";
        document.getElementById("show").innerHTML = prettyPrintJson.toHtml(JSON.parse(Http.response));
        document.getElementById("show").style = "width:auto;height:auto;background-color:white;";
      }
      if (Http.status == 400) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("show").innerHTML = "Bad request";
      }
      if (Http.status == 401) {
        document.getElementById("form").style = "margin: 30px 10px 40px;";
        document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
        document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px;";
        document.getElementById("show").innerHTML = "Not Authorized. Log in again";
      }
     
    }
  }
}
function getAllTD() {
  const Http = new XMLHttpRequest();
  var token = "";
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");
  }
  const url = 'http://localhost:3000/td';
  Http.open("GET", url);
  Http.setRequestHeader("Authorization", "Bearer " + token);
  Http.send();

  Http.onreadystatechange = (e) => {
    if (Http.status == 201) {
      console.log(Http.responseText)
      document.getElementById("form").style = "margin: 30px 10px 40px;";
      document.getElementById("div1").style = "display:inline-block;padding: 30px;margin-top:-630px;";
      document.getElementById("show").innerHTML = prettyPrintJson.toHtml(JSON.parse(Http.response));
      document.getElementById("show").style = "width:auto;height:auto;background-color:white";
    }
    if (Http.status == 400) {
      document.getElementById("form").style = "margin: 30px 10px 40px;";
      document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
      document.getElementById("show").innerHTML = "No TDs";
    }
    if (Http.status == 401) {
      document.getElementById("form").style = "margin: 30px 10px 40px;";
      document.getElementById("div1").style = "margin: -630px 250px 0px;display:inline-block;padding: 45px";
      document.getElementById("show").style = "width:400px;height:200px;font-size:16px;";
      document.getElementById("show").innerHTML = "Not Authorized. Log in again";
    }
  }

}
function select() {
  var r1 = document.getElementById("r1");
  var r2 = document.getElementById("r2");
  var r3 = document.getElementById("r3");
  if (r1.checked == true) {
    localStorage.setItem("import", document.getElementById("td").value);
  } else if (r2.checked) {
    var url = localStorage.getItem("readURLTD");
    localStorage.setItem("import", url);
    localStorage.removeItem("readURLTD");
  } else if (r3.checked) {
    var ris = localStorage.getItem("readRIS");
    localStorage.setItem("import", ris);
    localStorage.removeItem("readRIS");
  } else {
    alert("select a TD");
  }
}

function readFile(input) {
  let file = document.getElementById("myFile").files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  var ris;
  reader.onload = function () {
    localStorage.setItem("readRIS", JSON.stringify(JSON.parse(reader.result, undefined, 2)));
  };
  reader.onerror = function () {
    console.log(reader.error);
  }
  return ris;
}

function getTDURL() {

  const Http = new XMLHttpRequest();
  var url = document.getElementById("urlTD").value;
  Http.open("GET", url, true);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    localStorage.setItem("readURLTD", JSON.stringify(Http.responseText));
  }
}