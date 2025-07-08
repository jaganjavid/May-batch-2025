// DOM Task

# 🧠 DOM Mastery Tasks – JavaScript Practice

This document contains a set of **15 practical DOM manipulation tasks** designed to help students master core JavaScript concepts. Tasks are divided into **Beginner**, **Intermediate**, and **Advanced** levels.

---

## ✅ Beginner Level – Basic DOM Traversal & Selection

1. **Highlight First & Last List Items**
   - Select the first and last `<li>` in `.collection`
   - Change their text color to:
     - First item: `red`
     - Last item: `blue`

2. **Count Children in UL**
   - Select `.collection` and use `.childElementCount` to log how many direct children it has.

3. **Show Node Types**
   - Use `.childNodes` to log each node’s `nodeType`
   - Identify:
     - 1 → Element
     - 3 → Text
     - 8 → Comment

4. **Log Inner Text of First and Last Items**
   - Use `.firstElementChild.innerText` and `.lastElementChild.innerText` to display text content.

5. **Select and Log Parent Element**
   - Select a list item
   - Traverse up using `.parentElement` multiple times and log the final ancestor (e.g., `body`)

---

## ⚙️ Intermediate Level – Creating, Appending, Removing, Modifying

6. **Add New List Item**
   - Create a new `<li>` with:
     - Text: "Hello"
     - A delete icon (`<i class="fa fa-remove">`)
   - Append it to `.collection`

7. **Remove Specific List Item**
   - Select the **third** list item using `list.children[2]` and remove it using `.remove()`

8. **Add & Remove Class from Link**
   - Select the first `<a>` tag inside the first list item
   - Add class `"highlighted"`
   - Remove class `"secondary-content"`

9. **Add Custom Attribute**
   - Add a `data-id="101"` attribute to the **second** list item

10. **Replace Class Name**
   - Select all delete links inside list items
   - Replace class `"delete-item"` with `"trash-button"`

---

## 🚀 Advanced Level – Event Listeners, Class Toggling & DOM Control

11. **Toggle Theme with Button**
   - Add a `.toggle` button
   - On click, use `body.classList.toggle("add-color")` to change background

12. **Delete List Item on Click**
   - Add click event listeners to each delete icon
   - On click, remove the parent `<li>`

13. **Generate 5 List Items on Button Click**
   - Create a button
   - On click, loop to create 5 new `<li>` elements with text & delete icons
   - Append each to `.collection`

14. **Modify Text of Sibling Elements**
   - On click of the second list item:
     - Change `.previousElementSibling.innerText = "Previous Changed"`
     - Change `.nextElementSibling.innerText = "Next Changed"`

15. **Create List Item with User Input**
   - Add an `<input type="text">` field and submit button
   - On submit:
     - Get input value
     - Create a new `<li>` with that value and a delete icon
     - Append it to `.collection`

---

### 📚 Bonus Tips
- Use `console.log()` frequently for debugging.
- Understand the difference between `childNodes` and `children`.
- Practice using `nodeType` to explore what's inside the DOM.

