What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-> getElementById takes the id only, return single element
    getElementsByClassName takes classes only, return htmlcollection
    querySelector takes the first matching element, returns css sector 
    querySelectorAll returns list of node 


How do you create and insert a new element into the DOM?
-> to create a element document.createElement("div")
    to insert element innertext also classlist 

What is Event Bubbling and how does it work?
-> when an event happens on an element it first run its own handler then bubbles up its parent then so on up to html tag

What is Event Delegation in JavaScript? Why is it useful?
-> if there are multiple child then add event listener to the parent and check which button is clicked.
    it is useful when you have many child and dynamically addding and removing

What is the difference between preventDefault() and stopPropagation() methods?
-> the preventDefault is used for preventing the brower default behavior,without this the submit button send the   from to server reload the page. so it stop reload the page

    stopPropagation() -> stops the bubbling to the parent  
