
var heading= document.getElementById('header-title')
heading.textContent='Sharpener-Champions'

var header= document.getElementById('main-header')
var itemlist=document.getElementsByClassName('list-group-item')

itemlist[0].textContent= 'Champion 1'
itemlist[1].textContent= 'Champion 2'
itemlist[2].textContent= 'Champion 3'
itemlist[3].textContent= 'Champion 4'
header.style.borderBottom= 'solid 3px #000'
itemlist[2].style.background='green'
itemlist[0].style.fontWeight='bold'
itemlist[1].style.fontWeight='bold'
itemlist[2].style.fontWeight='bold'
itemlist[3].style.fontWeight='bold'
var addItems=document.getElementsByClassName('title')
addItems[0].textContent='Add champions'
addItems[0].style.fontWeight='bold'
addItems[0].style.color='yellow'
