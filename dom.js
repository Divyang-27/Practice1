//  console.dir(document)

// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[9])
// console.log(document.forms)
// git remote add origin https://github.com/Divyang-27/Practice1.git
// git branch -M main
// git push -u origin main
var heading= document.getElementById('header-title')
heading.textContent='Sharpener-Champions'

var header= document.getElementById('main-header')
var itemlist=document.getElementsByClassName('list-group-item')

itemlist[0].textContent= 'Champion 1'
itemlist[1].textContent= 'Champion 2'
itemlist[2].textContent= 'Champion 3'
itemlist[3].textContent= 'Champion 4'
header.style.borderBottom= 'solid 3px #000'
var addItems=document.getElementsByClassName('title')
addItems[0].textContent='Add champions'
addItems[0].style.fontWeight='bold'
addItems[0].style.color='yellow'