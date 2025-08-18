

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
        currentItem:null
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

        },
        getItemByID: function(id){
            
            let found = null;

            // Loop through the items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            })

            return found;

        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        deleteItem:function(id){
          
            // Get IDS
            const ids = data.items.map(function(item){
                return item.id;
            });

            // Get Index 
            const index = ids.indexOf(id);

            data.items.splice(index, 1);

        },
        clearAllItems:function(){
            data.items = [];
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
        },
        addItemToForm:function(){
            document.querySelector("#item-name").value = itemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = itemCtrl.getCurrentItem().money;
        },
        deleteListItem:function(id){
           
            const itemID = `#item-${id}`;

            const item = document.querySelector(itemID);

            item.remove();

        },
        clearItems:function(){
            // const collection = document.querySelector("#item-list");

            // collection.innerHTML = "";

            let listItems = document.querySelectorAll(".collection-item");

            listItems.forEach(function(li){
                li.remove();
            })
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

        // Delete icon click
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // Clear Item click
        document.querySelector(".clear-btn").addEventListener("click", itemClearSubmit);

        // Back click
        document.querySelector(".back-btn").addEventListener("click", backClick);
    }

    const itemAddSubmit = function(e){
        e.preventDefault();

        // Get the input value

        const input = UICrtl.getItemInput();

        // Validation

        if(input.name === "" || input.money === ""){
            alert("Please fill the fields")
        }else{
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

            const listID = e.target.parentElement.parentElement.id;

            // Break into array
            const listArr = listID.split("-");
            
            // Get the actual ID
            const id = parseInt(listArr[1]);

            // Get Item
            const itemToEdit = itemCtrl.getItemByID(id);

            // Set Current Item
            itemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICrtl.addItemToForm();
           
            UICrtl.showEditState();

        }

    }


    const itemDeleteSubmit = function(){

        // Get the current item
        const currentItem = itemCtrl.getCurrentItem();

        // Delete from the data structure
        itemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICrtl.deleteListItem(currentItem.id);

        // Get the Total Money
        const totalMoney = itemCtrl.getTotalMoney();

        // Update the total money in the ui
        UICrtl.showTotalMoney(totalMoney);

        // Clear a UI input
        UICrtl.clearInputState();
        
        // Clear the button state
        UICrtl.clearEditState();


    }


    const itemClearSubmit = function(e){

        // Clear all from the data structure
        itemCtrl.clearAllItems();

        // Clear All from UI
        UICrtl.clearItems();

        // Get the Total Money
        const totalMoney = itemCtrl.getTotalMoney();

        // Update the total money in the ui
        UICrtl.showTotalMoney(totalMoney);
    }



    const backClick = function(e){

        UICrtl.clearEditState();
        UICrtl.clearInputState();
        
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