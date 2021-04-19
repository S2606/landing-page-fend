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
const sectionList = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');

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
function createNavBarList(){
    for ( let i = 0; i < sectionList.length; i++ ) {
        let section = sectionList[i];
        const sectionName = section.getAttribute('data-nav');
        const listElement = document.createElement('li');
        listElement.id = sectionName;
        listElement.innerHTML = `<span class=menu__link classList="${sectionName}">${sectionName}</span>`
        navBar.appendChild(listElement);
    }
}


// Add class 'active' to section when near top of viewport
function updateActive(){
    let currentView = document.documentElement.scrollTop;
    for ( let i = 0; i < sectionList.length; i++ ) {
        let section = sectionList[i];
        const navItem = document.getElementById(section.getAttribute('data-nav'));
        if(currentView >= section.offsetTop - 1 && currentView < section.offsetTop + section.offsetHeight - 1){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
                navItem.classList.add('active');
            }
        } else {
            section.classList.remove('your-active-class');
            navItem.classList.remove('active');
        }
    }
}


// Scroll to anchor ID using scrollTO event
function scrollTo(event){
    if(event.target.parentNode.nodeName == 'LI' && event.target.tagName == 'SPAN' && event.target.classList.contains("menu__link")){
        for ( let i = 0; i < sectionList.length; i++ ) {
            let section = sectionList[i];
            if(event.target.getAttribute('classList') == section.getAttribute('data-nav')){
                section.scrollIntoView({ behavior: "smooth"});
                break;
            }
        }
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavBarList();

// Scroll to section on link click
document.addEventListener('scroll', updateActive);

// Set sections as active
document.addEventListener("click", scrollTo);


