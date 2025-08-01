const http = new easyHTTP();
const url = "https://jsonplaceholder.typicode.com/posts/";

// GET
try {
  const data = http.get(url);
  console.log("GET Data:", data);
} catch (err) {
  console.error(err.message);
}

// POST
try {
  const newData = { name: "Jagan Javid" };
  const response = http.post(url, newData);
  console.log("POST Response:", response);
} catch (err) {
  console.error(err.message);
}

// PUT
try {
  const updatedData = { name: "Updated Jagan" };
  const response = http.put(`${url}/7`, updatedData);
  console.log("PUT Response:", response);
} catch (err) {
  console.error(err.message);
}

// DELETE
try {
  const result = http.delete(`${url}/3`);
  console.log("DELETE Result:", result);
} catch (err) {
  console.error(err.message);
}
