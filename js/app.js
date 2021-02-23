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