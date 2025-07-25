# ⏰ TaskTimer Pro

TaskTimer Pro is a practical web-based timer + task manager that reinforces core JavaScript concepts.

---

## 🚀 Features Implemented

| Feature                    | Concepts Practiced                                              |
|---------------------------|-----------------------------------------------------------------|
| Add/Edit/Delete Tasks     | DOM manipulation, object mutation, event handling               |
| Save to Local Storage     | `localStorage` API, JSON serialization                          |
| Show Timer After Delay    | `setTimeout`, **Closure**, async behavior                       |
| Sorting Tasks             | Lexicographic vs Numeric Sorting logic                          |
| Show Remaining Time       | `setTimeout` inside loop, scope handling                        |
| IIFE for Timer Alerts     | **Closure**, IIFE to protect `task` reference                   |
| Use `const`, `let`        | Block scope vs Global scope awareness                           |
| Timer Bug with `var`      | Classic `var` vs `let` trap in `setTimeout` loops               |
| Dark Mode Toggle          | DOM manipulation, CSS class toggling                           |

---

## 🧠 JS Concepts Covered in Code

- ✅ **Closure**: 
  - Used inside `showAlertAfter()` via `setTimeout` wrapped in an IIFE
  - Keeps each task's state even after a delay

- ✅ **IIFE (Immediately Invoked Function Expression)**: 
  - Used in `showAlertAfter()` to avoid reference mutation
  - Encapsulates the task inside a new scope

- ✅ **Global vs Local Scope**:
  - `let tasks = []` → global data container
  - All functions have access to `tasks` via closure or global scope

- ✅ **DOM Manipulation**:
  - `document.createElement`, `.innerHTML`, `.appendChild`, etc.
  - Used in `renderTasks()`, `editTask()`, etc.

- ✅ **Event Listeners**:
  - `form.onsubmit`, `searchInput.addEventListener`, etc.
  - Trigger core logic like add/search/sort

- ✅ **Object Mutation**:
  - Directly modifying properties like `task.completed = true`

---

## 📂 Folder Structure

```
task-timer-pro/
├── index.html         # Full app UI + script
└── README.md          # Documentation (you’re reading it!)
```

---

## ✨ How It Works

1. **User adds task**: Captured via form
2. **Task saved**: Stored in global array & localStorage
3. **Task scheduled**: `setTimeout()` triggers alert
4. **Task listed**: Rendered on screen with status & category
5. **Task updated/deleted**: Via buttons
6. **Dark mode + sorting + search**: Bonus usability features

---

## 🧪 Example Bug Students Can Debug

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (scope trap!)
```

---

## 💡 Suggested Enhancements

- Task countdown timer (live)
- Reminder notification sound
- Custom categories
- Export task history as CSV
- Weekly report with completed stats

---

## 🏁 How to Run

1. Download repo or copy `index.html`
2. Open it in any browser
3. Use developer console to teach/trace concepts

---

## 🧑‍🏫 Perfect For Teaching

- ✅ JavaScript beginners
- ✅ Closures and scope
- ✅ setTimeout bugs
- ✅ DOM and Bootstrap together