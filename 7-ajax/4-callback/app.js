
const posts = [
    {title:"Post 1", body:"This is a post 1"},
    {title:"Post 2", body:"This is a post 2"},
];


// Sync

function createPost(post){

    setTimeout(function(){
        posts.push(post)
    }, 2000);

}


function getPosts(){
    setTimeout(function(){

        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;

    },1000);
}

// createPost({title:"Post 3", body:"This is a post 3"});
// getPosts();


// console.log("one");

// setTimeout(function(){
//     console.log("two");
// }, 0);

// console.log("three");


// Async


function createPost(post, callback){

    setTimeout(function(){
        posts.push(post)
        callback();
    }, 2000);

}


function getPosts(){
    setTimeout(function(){

        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;

    },1000);
}

createPost({title:"Post 3", body:"This is a post 3"}, getPosts);



