var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("Error! ", error);
    alert("Server Error! Please visit us after some time :)");
}

btnTranslate.addEventListener("click", function eventHandler(){
    // outputDiv.innerText = "Banana speak : " + txtInput.value;
    var inputText = txtInput.value;
    fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
})