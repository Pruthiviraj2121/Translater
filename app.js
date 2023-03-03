// // Ask user
// var ask = prompt("What's your name: ");

// // Show user input

// var show = alert("Welcome" + ask + "to your system" )

// Removing the event listener
// const div = document.getElementById("mydiv");
// div.addEventListener("mousemove", myFunction);

// function removeHandler(){
//     div.removeEventListener("mousemove" , myFunction);
// }

// function myFunction(){
//     document.getElementById("demo").innerHTML = Math.random();
// }
var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTraslationURL(text){
    return serverURL + "?" + "text" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
function clickHandler(){
    // outputDiv.innerText = "ajajajsjsjjsjs "+ txtInput.value;
    var inputText = txtInput.value; //taking input

    fetch(getTraslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler)