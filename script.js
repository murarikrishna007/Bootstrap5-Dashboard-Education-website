
//Toggle the visibility of content across your project with a few classes and our JavaScript plugins.
// var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// var collapseList = collapseElementList.map(function (collapseEl) {
//   return new bootstrap.Collapse(collapseEl)
// })

  // toggle btn
  let menuIcon = document.querySelector(".menu-icon");
  let sidebar = document.querySelector(".sidebar");


  menuIcon.onclick = function (){

    sidebar.classList.toggle("small-sidebar");
    // container.classList.toggle("large-container");
  }

  //Call carousel manually with:
  var myCarousel = document.querySelector('#myCarousel');
  var carousel = new bootstrap.Carousel(myCarousel);

