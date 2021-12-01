Problem Statement
Create a web app with a input text and a button in the middle. and posts below them(posts to be fetched from https://jsonplaceholder.typicode.com/posts
When the button is clicked the component filters the posts and only shows the posts which have the contain the search text in the title
Ex. search text is “as”

Then the filtered posts titles can be 

Asfdf adsadas
Kjas
Opdasda
Adasd
Trtry yrty afas
Hhjgj as grbgvb


Structure of the component

var posts=[];
Fetch posts from API
//
//loop on posts
// create a seperate post component to style and display the data of a single post(title and body both)
<Post>

Points to be noted
1. All posts should be displayed when the component is loaded 
2. The filter should only be applied on button press
3. Filter to be applied by front end
4. Card component should be used in designing the post component
5. The input box and search should be horizontally centered.


