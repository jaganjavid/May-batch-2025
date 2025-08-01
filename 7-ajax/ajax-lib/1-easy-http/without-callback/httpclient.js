class easyHTTP {
    // Synchronous GET Request
    get(url) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, false); // false = synchronous
      try {
        xhr.send();
        if (xhr.status === 200) {
          return xhr.responseText;
        } else {
          throw new Error(`GET Error: ${xhr.status} - ${xhr.statusText}`);
        }
      } catch (err) {
        throw new Error(`Network Error: ${err.message}`);
      }
    }
  
    // Synchronous POST Request
    post(url, data) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url, false); // false = synchronous
      xhr.setRequestHeader("Content-Type", "application/json");
      try {
        xhr.send(JSON.stringify(data));
        if (xhr.status === 201 || xhr.status === 200) {
          return xhr.responseText;
        } else {
          throw new Error(`POST Error: ${xhr.status} - ${xhr.statusText}`);
        }
      } catch (err) {
        throw new Error(`Network Error: ${err.message}`);
      }
    }
  
    // Synchronous PUT Request
    put(url, data) {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", url, false); // false = synchronous
      xhr.setRequestHeader("Content-Type", "application/json");
      try {
        xhr.send(JSON.stringify(data));
        if (xhr.status === 200) {
          return xhr.responseText;
        } else {
          throw new Error(`PUT Error: ${xhr.status} - ${xhr.statusText}`);
        }
      } catch (err) {
        throw new Error(`Network Error: ${err.message}`);
      }
    }
  
    // Synchronous DELETE Request
    delete(url) {
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", url, false); // false = synchronous
      xhr.setRequestHeader("Content-Type", "application/json");
      try {
        xhr.send();
        if (xhr.status === 200 || xhr.status === 204) {
          return "Resource Deleted";
        } else {
          throw new Error(`DELETE Error: ${xhr.status} - ${xhr.statusText}`);
        }
      } catch (err) {
        throw new Error(`Network Error: ${err.message}`);
      }
    }
  }
  