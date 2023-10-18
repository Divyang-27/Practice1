var itemList = document.querySelector("#items")
itemList.parentElement.style.backgroundColor="red"
// children is a Html collection 
itemList.children[1].style.backgroundColor='yellow'

// First child AND First element child
// itemList.firstElementChild.textContent='Hello'
console.log(itemList.firstChild) // gives us the white space before tag not the li tag
console.log(itemList.firstElementChild) 

// last child and last element child
console.log(itemList.lastChild)
console.log(itemList.lastElementChild)
// previoussibling And previous element sibling 
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)
// nextsibling AND  next element sibling 
console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)
// creating a new div with createElement  
var newDiv= document.createElement('div')

// Add class
newDiv.className="hello"

// Add id 
newDiv.id="hello1"

// set attribute()
newDiv.setAttribute('title','Hello Div')

// Create text node 
var newDivText=document.createTextNode('Hello World')

// inserting text via appendChild 
newDiv.appendChild(newDivText)

var container=document.querySelector('header .container')

var h1=document.querySelector('header h1')

console.log(newDiv)

container.insertBefore(newDiv , h1)


var itemHw= document.createElement('li')
itemHw.className='list-group-item'


var itemText=document.createTextNode('Hello World')
itemHw.appendChild(itemText)
var divclass= document.querySelector(' div .list-group')
var li1=document.querySelector('div li')
divclass.insertBefore( itemHw , li1)
