

// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER


// ITEM CONTROLLER

const itemCtrl = (function(){

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

        }
    }


})();

let html = 'hai';

console.log(html);

html = "Hello";

console.log(html);



// APP CONTROLLER

const App = (function(){


    return {
        start: function(){
            const items = itemCtrl.getItem();

            if(items.length > 0){
                UICrtl.populateItemList(items)
            }
        }
    }

})();


App.start();