/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

/**  Set sections as active
// document.addEventListener("click", function(){
//     const mainheading = document.querySelector("h1");
//     mainheading.style.color="red";
//     console.log("CLICK");
// });*/
// const sections = document.querySelectorAll("section");
// const ul = document.getElementById("navbar__list");
// const fragment = document.createDocumentFragment();
// console.log("myul");
// sections.forEach(function(section){
    
// });
    
const sections = document.querySelectorAll("section");
const newul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// loop all sections
sections.forEach((section)=>{
    // creat Li
    let newli = document.createElement("li");
    console.log(newli);
    //Set Li Class Name
        newli.className = ("menu__link");
    //Creat a
    newlink = document.createElement("a");
    console.log(newlink);
    //Set Section Attribute
    newText = section.getAttribute("data-nav");
    console.log(newText);
    //Set Link Text Data Nav
    linkText = document.createTextNode(newText);
    console.log(linkText);
    //Add Event Lestener To The Link
    newlink.addEventListener("click", function(){
    //To make sure section is visible to the user & set the transition animation
        section.scrollIntoView({behavior:"smooth"});
    });
    newlink.appendChild(linkText);
newli.appendChild(newlink);
fragment.appendChild(newli);
newul.appendChild(fragment);
})
newul.appendChild(fragment);
