

{/* <li class="collection-item">
    List Item 5
    <a href="#" class="delete-item secondary-content">
     <i class="fa fa-remove"></i>
    </a>
</li> */}

const ul = document.querySelector(".collection");

// Create element
const li = document.createElement("li");

// Add id to li
li.id = "test"

// Add class to li
li.className = "collection-item";

// Add a inner text 
li.innerText = "Hello";

// create a new link element
const link = document.createElement("a");

// Add class to linl
link.className = "delete-item secondary-content";

// Add icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

// Append li to ul
ul.appendChild(li);