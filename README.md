1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: it is used by geting the id. it will return single elemnts.
getElementsByClassName: when we have many similar work,we have put similar class on such tag names by using class name. it will return html collection.
querySelector: it denots as if id then querySelector("#id"),if class then querySelector(".class name"). it retrun the first match in any css selector.
querySelectorAll: it is similar to querySelector and its retrun any node list.


2. How do you create and insert a new element into the DOM?
I can say there are two or three step. those may be identfiy as:
First i have create an element like: const div=document.createElement("div");
Second  I have to add some content:
div.classNeme="2px solid red py-2 mt-2";
div.textContent="Biday Bangldesh";
Third and Last stages is i have insert it into dom
document.body.appenChild.("div")

3. What is Event Bubbling? And how does it work?
Event bubbling is a concept of DOM, when an event receives an event it bubbles up to its parents ,ancestor until reach it to the main root element.
If i write a struture like: <body><div><span><button> Click </button><span></div></body>. when i click button it will call parent which is span. span is child of div and div is child of body. So when i click on btn i am also clicking the span, div,body.


4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a pattern used to handles events efficiently and effectively by using sigle event to a parent element instead of multiple listeners.
It is useful for allows everyone to write cleaner code and create fewer events listener.
 
5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() methods use to prevents the default behavior of an event from happenend. it is used to prevent form submission,link navigate.
On the other hand  stopPropagation() methods is used to stop the event from bubble up tp parent elements.
This is useful for complex UIs where multiple elements have event listeners.
