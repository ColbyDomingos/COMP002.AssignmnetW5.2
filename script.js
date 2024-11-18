// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

const balloon = document.getElementById("balloon"); // sets balloon variable to the element
let size = 100; // sets a size variable

document.addEventListener('keydown', (event) => { // adds the event listener
    if (event.key === "ArrowUp") { // specifies the key to listen for
        size += 10; // increments size by 10 (variable in javascript)
        balloon.style.fontSize = size + "px"; // sets the size of the balloon in css
    } else if (event.key === "ArrowDown") { // same as the other event key
        size -= 10; // decreases size by 10
        balloon.style.fontSize = size + "px"; // sets the size of the balloon in css
    }
})




// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

const tab1Link = document.getElementById("tab1Link");
const tab2Link = document.getElementById("tab2Link"); // Gets the tab links and sets them to variables
const tab3Link = document.getElementById("tab3Link");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2"); // Gets the tab content and sets them to variables
const tab3 = document.getElementById("tab3");

tab1Link.addEventListener("click", function(event) { // adds the click event listener
    event.preventDefault();
    tab1.style.display = "block";
    tab2.style.display = "none"; // Hides the other tabs when one is clicked
    tab3.style.display = "none";
});

tab2Link.addEventListener("click", function(event) {
    event.preventDefault();
    tab1.style.display = "none";
    tab2.style.display = "block"; // Hides the other tabs when 2 is clicked
    tab3.style.display = "none";
});

tab3Link.addEventListener("click", function(event) {
    event.preventDefault();
    tab1.style.display = "none";
    tab2.style.display = "none"; // Hides the other tabs when 3 is clicked
    tab3.style.display = "block";
});

tab1.style.display = "block";
tab2.style.display = "none";    // Hides 2 and 3 on default
tab3.style.display = "none";

