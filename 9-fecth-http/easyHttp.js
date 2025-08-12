

// https://688ce145cd9d22dda5cecc84.mockapi.io/user/users

class EasyHTTP {

    // Make an get request

    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Something went worng"))

        })
    }

    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Something went worng"))

        })
    }

    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Something went worng"))

        })
    }

    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(res => res.json())
            .then(data => resolve("Resource Deleted"))
            .catch(err => reject("Something went worng"))

        })
    }
}