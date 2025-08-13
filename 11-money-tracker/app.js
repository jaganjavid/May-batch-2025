

// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER


// ITEM CONTROLLER

const itemCtrl = (function(){

    // ITEM CONSTRUCTOR

    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    const data = {
        items:[
            {id:0, name:"Clothes", money:1000},
            {id:1, name:"Food", money:3000},
            {id:2, name:"Bike Service", money:5000},
        ],
        totalMoney:0,
        currnetItem:null
    }

    return {
        getItem: function(){
            return data.items;
        },
        addItem: function(name, money){
           
            let ID;

            // Create a ID

            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            }else{
                ID = 0;
            }

            money = Number(money);

            // Create a New Item
            newItem = new Item(ID, name, money);

            // Add to item array
            data.items.push(newItem);

            return newItem;

        },
        getTotalMoney: function(){

            let total = 0;

            if(data.items.length > 0){
                
                data.items.forEach(function(item){
                    total += item.money;

                    data.totalMoney = total;
                })

                
            }else{
                data.totalMoney = 0;
            }

            return total;

        }
    }


})();


// UI CONTROLLER

const UICrtl = (function(){

    return {
        populateItemList: function(items){
            
            let html = "";

            items.forEach(function(item){
               
                html += ` 
                <li class="collection-item" id=item-${item.id}>
                    <strong>${item.name}</strong> :
                    <em>${item.money} RS</em>
                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                </li>`;

            });

            document.querySelector("#item-list").innerHTML = html;
        },
        showEditState: function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        clearEditState:function(){
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        getItemInput: function(){
            return {
                name:document.querySelector("#item-name").value,
                money:document.querySelector("#item-money").value,
            }
        },
        clearInputState:function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        addListItem: function(newItem){
            
            // Create a li element

            const li = document.createElement("li");

            // Add class to li
            li.className = "collection-item";

            // Add ID to li
            li.id = `item-${newItem.id}`;

            // Insert HTML
            li.innerHTML = `
             <strong>${newItem.name}</strong> :
                    <em>${newItem.money} RS</em>
                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
            `;

            // Insert into the ul
            document.querySelector("#item-list").appendChild(li);
        },
        showTotalMoney: function(totalMoney){
            document.querySelector(".total-money").innerText = totalMoney;
        }
    }


})();


// APP CONTROLLER

const App = (function(){


    const loadEventListeners = function(){

        // Add item Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit icon click
        document.querySelector("#item-list").addEventListener("click", itemEditClick);
    }

    const itemAddSubmit = function(e){
        e.preventDefault();

        // Get the input value

        const input = UICrtl.getItemInput();

        // Validation

        if(input.name === "" || input.money === ""){
            alert("Please fill the fields")
        }else{
            console.log(input);

            // Add Item to Array
            const newItem = itemCtrl.addItem(input.name, input.money);

            // Add Item to UI
            UICrtl.addListItem(newItem);

            // Get the total money
            const totalMoney = itemCtrl.getTotalMoney();

            // Update the total money in ui
            UICrtl.showTotalMoney(totalMoney);

            // Clear a UI Input
            UICrtl.clearInputState();
        }
        

    }


    const itemEditClick = function(e){

        if(e.target.classList.contains("edit-item")){
            
            UICrtl.showEditState();

        }

    }

   


    return {
        start: function(){

             // Clear the button
            UICrtl.clearEditState();

            const items = itemCtrl.getItem();

            if(items.length > 0){
                UICrtl.populateItemList(items);

                const totalMoney = itemCtrl.getTotalMoney();

                UICrtl.showTotalMoney(totalMoney);
            }

            loadEventListeners();
        }
    }

})();


App.start();