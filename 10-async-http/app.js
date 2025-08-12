

const http = new EasyHTTP();

http.get("https://688ce145cd9d22dda5cecc84.mockapi.io/user/users")
.then(data => console.log(data))
.catch(err => console.log(err));



const data = {
    name:"Aurn Kumar"
}


http.post("https://688ce145cd9d22dda5cecc84.mockapi.io/user/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));



http.put("https://688ce145cd9d22dda5cecc84.mockapi.io/user/users/1", data)
.then(data => console.log(data))
.catch(err => console.log(err));



http.delete("https://688ce145cd9d22dda5cecc84.mockapi.io/user/users/15")
.then(data => console.log(data))
.catch(err => console.log(err));