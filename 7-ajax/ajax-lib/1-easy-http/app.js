

const http = new easyHTTP();

// Using a GET Request with callback

http.get("https://688ce145cd9d22dda5cecc84.mockapi.io/user/data", function(err, data){

    if(err){
        console.log("Error", err);
    }else{
        console.log("Data Recevied", data);
    }

});

const postData = {
    name:"Jagan Javid"
}

http.post("https://688ce145cd9d22dda5cecc84.mockapi.io/user/data", postData, function(err, data){

    if(err){
        console.log("Error", err);
    }else{
        console.log("Data Posted", data);
    }

});

http.put(`https://688ce145cd9d22dda5cecc84.mockapi.io/user/data/${10}`, postData, function(err, data){

    if(err){
        console.log("Error", err);
    }else{
        console.log("Data Posted", data);
    }

});

http.delete(`https://688ce145cd9d22dda5cecc84.mockapi.io/user/data/${5}`, function(err, data){

    if(err){
        console.log("Error", err);
    }else{
        console.log("Data Posted", data);
    }

});