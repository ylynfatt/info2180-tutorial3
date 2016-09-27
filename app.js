"use strict";
// My JavaScript Code
// window.onload event will ensure we wait for the entire page to finish loading before executing the code within.
window.onload = function() {
  // Get body element and store in a variable
  var body = document.getElementsByTagName("body");
  console.log(body); // take a look in the console to view all the properties of the body element.

  // Parents, Children, Child Nodes
  var myDiv = document.getElementById("testing");
  console.log(myDiv);
  console.log(myDiv.parentNode);
  console.log(myDiv.childNodes); // This will include whitespace before and after elements as a #text nodes
  console.log(myDiv.children); // This will return only the element nodes, excluding #text nodes

  // Create a list item element and add it to a list
  var myList = document.getElementsByTagName("ul")[0];
  console.log(myList);
  console.log(myList.firstChild); // this will return a #text node since we have some whitespace between the <ul> and the first <li>
  console.log(myList.lastChild); // this will return a #text node since we have some whitespace between the last </li> and the </ul>
  console.log(myList.firstElementChild); // this will return a <li>, since we are looking for the first "element" child
  console.log(myList.lastElementChild); // this will return a <li>, since we are looking for the last "element" child
  var listItem = document.createElement("li"); // Creates an element
  var listItemText = document.createTextNode("This is my fourth list item."); // Creates the text that we can then place in an element.
  myList.appendChild(listItem); // Appends the list item to the list
  listItem.appendChild(listItemText); // Appends the text to the list item

  // Setting and Getting Attributes
  listItem.setAttribute("id", "item4");
  console.log(listItem.getAttribute("id"));
  listItem.setAttribute("class", "listItem");
  console.log(listItem.getAttribute("class"));
  // or instead of getAttribute and setAttribute you can also do the following
  var firstListItem = myList.firstElementChild
  firstListItem.className = "item1";
  firstListItem.id = "firstItem";
  console.log(firstListItem.className);
  console.log(firstListItem.id);

  // You can change the style attribute of an element.
  firstListItem.style.fontSize = "21px";
  firstListItem.style.fontFamily = "Georgia, sans-serif";

  var notice = document.getElementsByClassName("notice")[0];
  notice.style.border = "1px solid #a94442";
  notice.style.backgroundColor = "#f2dede";
  notice.style.color = "#a94442";
  notice.style.padding = "15px";

  // The querySelector and querySelectorAll functions will allow you to use CSS style selectors to get elements.
  var link = document.querySelector("#testing a");
  // Here we add a "click" event to the link using addEventListener
  link.addEventListener("click", function (element) {
    // This will prevent the link in the HTML page from completing it's default action of going to the URL specified in the href attribute.
    element.preventDefault();
    console.log("Nope!");
  });

  var myButton = document.querySelector("button");
  // You can also add a "click" or any other event this way
  myButton.onclick = function(element) {
    // When the button is clicked we change the color of the h1 tag.
    console.log("Button clicked!");
    var heading = document.querySelector("h1");
    heading.style.color = "red";
  };

};
