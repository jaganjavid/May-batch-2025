

// function fetchData(callback){
//     setTimeout(() => {

//         const error = "Failed to fetch data";

//         callback(error, null); // passing the error as the first argument


//     }, 1000)
// }

// fetchData(function(error, result){
//     if(error){
//         console.log("Error", error);
//     }else{
//         console.log("Success", result);
//     }
// })

function fetchData(callback) {
    setTimeout(() => {

        const data = "Fetched data from the server";

        callback(null, data); // passing the error as the first argument


    }, 1000)
}

fetchData(function (error, result) {
    if (error) {
        console.log("Error", error);
    } else {
        console.log("Success", result);
    }
})