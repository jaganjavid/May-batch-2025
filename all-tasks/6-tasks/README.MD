# 🧪 Task: Build a Mini API Tester (XHR + Fetch)

This project will help you deeply understand how both `XMLHttpRequest` and `fetch` work in JavaScript, and how they handle `GET`, `POST`, `PUT`, and `DELETE` requests in a real-world UI.

---

## 🎯 Goal

Create a small web interface where a user can:
- Enter an API URL and request body
- Choose between `XMLHttpRequest` or `fetch`
- Perform `GET`, `POST`, `PUT`, or `DELETE` requests
- See the response clearly in an output box

---

## 🖼️ UI Layout

| Element                | Purpose                                 |
|------------------------|------------------------------------------|
| 🔗 URL Input            | Enter the API endpoint URL               |
| 📝 Request Body Input   | Enter JSON data for POST/PUT requests    |
| 📤 Action Buttons       | 8 total: 4 methods × 2 request types     |
| 📦 Response Output      | See formatted server response or error   |

---

## 📋 Features

- [ ] **URL input field**
- [ ] **Textarea** for JSON input (for POST/PUT)
- [ ] **GET XHR**, **GET Fetch**
- [ ] **POST XHR**, **POST Fetch**
- [ ] **PUT XHR**, **PUT Fetch**
- [ ] **DELETE XHR**, **DELETE Fetch**
- [ ] Response displayed inside a styled `<pre>` tag or box

---

## 🧩 Technologies

- HTML
- CSS (basic)
- JavaScript (Vanilla)

---

## 📌 Example HTML Setup

```html
<input id="urlInput" placeholder="Enter API URL" />
<textarea id="bodyInput" placeholder="Enter JSON body (for POST/PUT)"></textarea>

<div class="buttons">
  <button onclick="doRequest('GET', 'xhr')">GET XHR</button>
  <button onclick="doRequest('GET', 'fetch')">GET Fetch</button>

  <button onclick="doRequest('POST', 'xhr')">POST XHR</button>
  <button onclick="doRequest('POST', 'fetch')">POST Fetch</button>

  <button onclick="doRequest('PUT', 'xhr')">PUT XHR</button>
  <button onclick="doRequest('PUT', 'fetch')">PUT Fetch</button>

  <button onclick="doRequest('DELETE', 'xhr')">DELETE XHR</button>
  <button onclick="doRequest('DELETE', 'fetch')">DELETE Fetch</button>
</div>

<pre id="outputBox"></pre>
