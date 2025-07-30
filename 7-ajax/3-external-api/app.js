

document.querySelector("#button-1").addEventListener("click", 
    getData
)


function getData(){
       // Create an XHR
       const xhr = new XMLHttpRequest();

       // Open
       xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

       xhr.onload = function(){
   
        const users = JSON.parse(this.responseText);

       let output = "";

       users.forEach(function(user){

        output += `
            <ul>
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.company}</li>
                <li>${user.phone}</li>
            </ul>
        `

       })

       document.querySelector("#output").innerHTML = output;


   
       }
       
       xhr.send();
}