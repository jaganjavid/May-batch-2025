

// STEP 1 : Hero Constructor Function

function Hero(name, powerLevel, secretIdentity, category) {

    this.name = name;
    this.powerLevel = powerLevel;
    this.category = category;

    var _secret = secretIdentity; // Private using

    this.revelIdentity = function () {
        return _secret;
    }

    this.setIdentity = function (newIdentity) {
        _secret = newIdentity
    }

}

// Global Variables
heroes = [];
let isEditing = false;
let editIndex = null;


// Load from localStorage on page load
window.onload = function () {

    const saved = localStorage.getItem("heroes");

    if (saved) {
        const raw = JSON.parse(saved);
        heroes = raw.map(function (h) {
            return new Hero(h.name, h.powerLevel, h._secret || h.secretIdentity, h.category)
        });

        // console.log(heroes);

        renderHeroes();

    }

}


function saveHeroes() {

    const data = heroes.map(function (hero) {
        return {
            name: hero.name,
            powerLevel: hero.powerLevel,
            category: hero.category,
            secretIdentity: hero.revelIdentity()
        }
    })

    localStorage.setItem("heroes", JSON.stringify(data));
}

// Add/ Edit Hero from Form
document.getElementById("addHero").addEventListener("click", function (e) {

    e.preventDefault();


    let name = document.querySelector("#heroName").value.trim();
    let power = parseInt(document.querySelector("#heroPower").value);
    let identity = document.querySelector("#secretIdentity").value.trim();
    let category = document.querySelector("#heroCategory").value.trim();


    if (isEditing) {

        let hero = heroes[editIndex];
        hero.name = name
        hero.powerLevel = power
        hero.category = category
        hero.setIdentity(identity);

        isEditing = false;
        editIndex = null;


    } else {
        let newHero = new Hero(name, power, identity, category);
        heroes.push(newHero);
    }

    document.querySelector("#heroName").value = "";
    document.querySelector("#heroPower").value = "";
    document.querySelector("#secretIdentity").value = "";
    document.querySelector("#heroCategory").value = "";

    renderHeroes();
    saveHeroes()


})

function renderHeroes(filter = "") {

    const list = document.querySelector("#heroList");
    list.innerHTML = "";

    heroes.forEach(function (hero, index) {

        if (hero.name.toLowerCase().includes(filter.toLowerCase())) {
            const item = document.createElement("li");

                item.className = "list-group-item d-flex justify-content-between aling-item-center";

                item.innerHTML = `
                    <div>
                        <strong>${hero.name}</strong> (Power: ${hero.powerLevel})
                        <span class="badge bg-secondary ms-2">${hero.category}</span>
                        <br>
                        <small>Secret</small>
                    </div>
                    <div>
                        <button class="btn btn-warning btn-sm me-2" onClick="editHero(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" onClick="deleteHero(${index})">Delete</button>
                    </div>
                `;

                list.appendChild(item);
        }

    });




}

function deleteHero(index) {
    if (confirm("Are you sure you want to delete this hero?")) {
        heroes.splice(index, 1);
        renderHeroes();
        saveHeroes();
    }
}

function editHero(index) {

    const hero = heroes[index];

    document.querySelector("#heroName").value = hero.name;
    document.querySelector("#heroPower").value = hero.powerLevel;
    document.querySelector("#secretIdentity").value = hero.revelIdentity();
    document.querySelector("#heroCategory").value = hero.category;

    isEditing = true;
    editIndex = index;

}

document.querySelector("#searchHero").addEventListener("input", function (e) {
    renderHeroes(e.target.value);
});

function sortHeros(asc=true){
    heroes.sort((a, b) => asc ? a.powerLevel - b.powerLevel : b.powerLevel - a.powerLevel);
    renderHeroes();
    saveHeroes();
}

// sortHeros();

function toggleTheme(){
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

}


// const arr = [22,11,50];
// const arr = [3,200,20];

// console.log(arr.sort());

// const arr = [22, 100, 50];

// const sortedAsc = arr.sort((a, b) => a - b);

// console.log(sortedAsc);

// const sortedDesc = arr.sort((a, b) => b - a);

// console.log(sortedDesc);

// const asc = [...arr].sort((a, b) => a - b);

// console.log(asc);
// console.log(arr);



// function test(){
//     const x = "hello";
//     console.log(x);
// }

// test();


// var x = "xyz";

// console.log(x);

// For (var, let)