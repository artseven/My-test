$("#option" ).click(function() {
  $( "#toggle" ).toggle( "slide" );
  $( "#slide" ).addClass('active');
});

$(document).click(function(e) {
  if ($("slide").hasClass('active')) {
    $( "#toggle" ).toggle( "slide" );
  }
});



$(function() {

// Dropdown toggle
$('.dropdown-toggle').click(function(){
  $(this).next('.dropdown').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.dropdown').hide();
  }
});

});
// ---------------JS--------------------
// Pagination
var list = new Array();
   var pageList = new Array();
   var currentPage = 1;
   var numberPerPage = 3;
   var numberOfPages = 0;

function makeList() {
   for (x = 0; x < 200; x++)
       list.push(x);
   numberOfPages = getNumberOfPages();
}

function getNumberOfPages() {
   return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
   currentPage += 1;
   loadList();
}

function previousPage() {
   currentPage -= 1;
   loadList();
}

function firstPage() {
   currentPage = 1;
   loadList();
}

function lastPage() {
   currentPage = numberOfPages;
   loadList();
}

function loadList() {
   var begin = ((currentPage - 1) * numberPerPage);
   var end = begin + numberPerPage;

   pageList = list.slice(begin, end);
   drawList();
   check();
}

function drawList() {
   document.getElementById("list").innerHTML = "";
   for (r = 0; r < pageList.length; r++) {
       document.getElementById("list").innerHTML += pageList[r] + "";
   }
}

function check() {
   document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
   document.getElementById("previous").disabled = currentPage == 1 ? true : false;
   document.getElementById("first").disabled = currentPage == 1 ? true : false;
   document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
   makeList();
   loadList();
}

window.onload = load;

// Quantity-input form validation
function validateForm() {
    var x = document.forms['myForm']['quantity'].value;
    if (x == '') {
      document.getElementById('quantity-input').style.borderColor = "red";
        return false;
    }
}
