
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

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

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

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
