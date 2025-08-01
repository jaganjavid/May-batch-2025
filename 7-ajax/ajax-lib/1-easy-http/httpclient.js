

class easyHTTP{

    
    get(url, callback){

        const xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);

        xhr.onload = function(){
            if(xhr.status === 200){
                callback(null, this.responseText);
            } else{
                callback(`Error ${this.status} - ${this.statusText}`, null);
            }
        }

        xhr.onerror = function(){
            callback("Network error", null);
        }

        xhr.send();

    }

    // Post Request with callback
    post(url, data, callback){

        const xhr = new XMLHttpRequest();

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function(){
            if(xhr.status === 201){
                callback(null, this.responseText);
            } else{
                callback(`Error ${this.status} - ${this.statusText}`, null);
            }
        }

        xhr.onerror = function(){
            callback("Network error", null);
        }

        xhr.send(JSON.stringify(data));
    }

      // Put Request with callback
      put(url, data, callback){

        const xhr = new XMLHttpRequest();

        xhr.open("PUT", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function(){
            if(xhr.status === 200){
                callback(null, this.responseText);
            } else{
                callback(`Error ${this.status} - ${this.statusText}`, null);
            }
        }

        xhr.onerror = function(){
            callback("Network error", null);
        }

        xhr.send(JSON.stringify(data));
    }

       // Delete Request with callback
       delete(url, callback){

        const xhr = new XMLHttpRequest();

        xhr.open("DELETE", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function(){
            if(xhr.status === 200){
                callback(null, "Resource Deleted");
            } else{
                callback(`Error ${this.status} - ${this.statusText}`, null);
            }
        }

        xhr.onerror = function(){
            callback("Network error", null);
        }

        xhr.send();
    }

    

}