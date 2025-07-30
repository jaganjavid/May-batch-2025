

document.querySelector("#btn").addEventListener("click", loadData);

function loadData(){

    // Create an XHR object

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){
        
        if(this.status === 200){
            document.querySelector("#output").innerText = 
            this.responseText
        }else{
            document.querySelector("#output").innerText = 
            `${this.status} - ${this.statusText}`
        }

    }

    xhr.send();


}