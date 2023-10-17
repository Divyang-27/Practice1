
var heading= document.getElementById('header-title')
heading.textContent='Sharpener-Champions'

// var header= document.getElementById('main-header')
// header.style.borderBottom= 'solid 3px #000'

/* by class name 
nothing applies to list item 5
*/
// var itemlist=document.getElementsByClassName('list-group-item')

// for(let i=0; i<itemlist.length; i++){
//     itemlist[i].style.fontWeight='bold'
//     itemlist[i].style.background='grey'
// }
// itemlist[0].textContent= 'Champion 1'
// itemlist[1].textContent= 'Champion 2'
// itemlist[2].textContent= 'Champion 3'
// itemlist[3].textContent= 'Champion 4'

// Everything does get applied to list 5 in by tags 

// var itemlisttag=document.getElementsByTagName('li')

// itemlisttag[0].textContent= 'Champion 1'
// itemlisttag[1].textContent= 'Champion 2'
// itemlisttag[2].textContent= 'Champion 3'
// itemlisttag[3].textContent= 'Champion 4'
// itemlisttag[4].textContent='Champion 5'


// for(let i=0; i<itemlisttag.length; i++){
//     itemlisttag[i].style.fontWeight='bold'
//     itemlisttag[i].style.background='grey'
// }

// Query selector 
// Works like jquery but for single element 

var header=document.querySelector('#main-header')
header.style.borderBottom= 'solid 3px #000'
var addItems=document.getElementsByClassName('title')
addItems[0].innerHTML='Add champions'
addItems[1].innerHTML='Champions'
addItems[0].style.fontWeight='bold'
addItems[0].style.color='yellow'


/*By Query Selector

var itemlistsingle2=document.querySelector('li:nth-child(2)')
itemlistsingle2.style.backgroundColor="green"
var itemlistsingle3=document.querySelector('li:nth-child(3)')
itemlistsingle3.style.display='none'

*/


// By Query Selector All
var inputq=document.querySelector('input')
inputq.value='Enter new Champions'
var itemlisttagq=document.querySelectorAll('li')

itemlisttagq[0].textContent= 'Champion 1'
itemlisttagq[1].textContent= 'Champion 2'
itemlisttagq[2].textContent= 'Champion 3'
itemlisttagq[3].textContent= 'Champion 4'
 
itemlisttagq[1].style.color="green"

var odd=document.querySelectorAll('li:nth-child(odd)')
for(let i=0; i<odd.length; i++){
odd[i].style.backgroundColor='green'

}