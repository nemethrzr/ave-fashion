var element = document.querySelector('.navbar-collapsed');


var toggleNavbar = function () {

}

element.addEventListener('click', function (e) {
    e.preventDefault();


    if (document.querySelector('.navbar-light').classList.contains('active')) {

        document.querySelector('.navbar-light').classList.remove("active");
    } else {

        document.querySelector('.navbar-light').classList.add('active');
    }

}, false);







var link = document.querySelector('.navbar-light .nav-items .nav-item a').addEventListener('click',function(e){
    e.preventDefault();    
    this.classList.toggle('active');
});





