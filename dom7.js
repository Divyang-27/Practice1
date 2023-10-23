
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

var secondItem = document.createElement('input');
secondItem.id = 'item2';
secondItem.type = 'text';

// Identify the element before which you want to insert the new input
var submitButton = form.querySelector('[type=submit]'); // Assuming the submit button is the element before which you want to insert the input

// Insert the input element before the identified element
form.insertBefore(secondItem, submitButton);
// form submit event
form.addEventListener('submit', addItem);
//filter
filter.addEventListener('keyup',filterItem)
// delete event
itemList.addEventListener('click', removeItem);

// for pre existing items

var items = itemList.getElementsByClassName('list-group-item');
for (var i = 0; i < items.length; i++) {
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn -sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    items[i].appendChild(editBtn);
}


// Add Item
function addItem(e) {
    e.preventDefault();

    
    // Get input value
    var newItem = document.getElementById('item').value;
    // second input box
    var newscdItem=secondItem.value;
    // Create new li element
    var li = document.createElement('li'); // creating a new li element 
    // Add class
    li.className = 'list-group-item'; // adding class of pre existing list 
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newscdItem));
    // create delete button element
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn -sm float-right delete';
    // Append text node 
    deletebtn.appendChild(document.createTextNode('X'));
    // Append Button to li
    li.appendChild(deletebtn);

    // create edit button element
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn -sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    // Append edit button to li
    li.appendChild(editBtn);
    
    itemList.appendChild(li);
}


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItem(e){
    var text =e.target.value.toLowerCase()
    var item=itemList.getElementsByTagName('li')
    
    Array.from(item).forEach(function(item){
      var itemName=item.firstChild.textContent 
      var scdItemName = item.childNodes[1].textContent.toLowerCase(); 

      if (itemName.indexOf(text) !== -1 || scdItemName.indexOf(text) !== -1) 

{
        item.style.display='block'
      }
      else item.style.display='none'
    })

   
    

    }