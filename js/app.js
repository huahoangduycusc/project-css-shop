var search = document.querySelector('.search-click');
var show_search = document.querySelector('.show-search');
var close_search = document.querySelector('.close-search');
var button_menu = document.querySelector('.button-menu');
search.addEventListener('click',function(e){
    e.preventDefault();
    show_search.classList.toggle('display');
});
close_search.addEventListener('click',function(e){
    e.preventDefault();
    show_search.classList.toggle('display');
});

// nhấn mở menu
button_menu.addEventListener('click',function(){
    document.body.classList.toggle('menu-open');
});
// nhấn đóng menu
document.querySelector('#close-sidebar-nav').addEventListener('click',function(){
    document.body.classList.toggle('menu-open');
});
//
const has_child = document.querySelectorAll('.has-child');
has_child.forEach(child => {
    child.addEventListener('click',function(e){
        e.preventDefault();
        // has_child.forEach(item => item.children[1].classList.remove("show")); // đóng cái vừa mở
        //console.log(this);
        var sub = child.children[1];
        sub.classList.toggle('show');
    });
});
// window onclick
window.onclick = function(event){
    openCloseDropdown(event);
}

// close all dropdown
function closeAllDropdown(){
    var dropdowns = document.querySelectorAll('.dropdown-expand');
    dropdowns.forEach(drops => {
        drops.classList.remove('dropdown-expand');
    })
}

function openCloseDropdown(event){
    if(!event.target.matches('.dropdown-toggle')){
        // close dropdown when click outside menu
        closeAllDropdown();
    }
    else{
        var toggle = event.target.dataset.toggle;
        //console.log(toggle);
        var content = document.querySelector(`#${toggle}`);
        //console.log(content);
        if(content.classList.contains('dropdown-expand')){
            closeAllDropdown();
        }
        else{
            closeAllDropdown();
            content.classList.add('dropdown-expand');
        }
    }
}