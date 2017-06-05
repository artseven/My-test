// $("#option" ).click(function() {
//   $( "#toggle" ).toggle( "slide" );
// });



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
// Creating JSON to use data among multiple pages
$('.submit').click(function(){
    var json = {};
    json.items = [];
    // $('selector').each(function(e){
    //     var obj = {};
    //     obj.quantity = $(this).find('input[name=name]').val();
    //     json.items.push(obj);
    // });


    // console.log(json);
});




// Quantity-input form validation
function validateForm() {
    var x = document.forms['myForm']['quantity'].value;
    if (x == '') {
      document.getElementById('quantity-input').style.borderColor = "red";
        return false;
    }
}



//----------- Pagination
var pager = new Paginator.Pager();

$(document).ready(function() {

pager.paragraphsPerPage = 3; // set amount elements per page

pager.pagingContainer = $('#obj3'); // set of main container

pager.paragraphs = $('div.z', pager.pagingContainer); // set of required containers

pager.showPage(1);

});

$(document).ready(function(){
    $('#option').click(function(event){
        event.stopPropagation();
         $("#toggle").toggle("slide");
    });
    $("#toggle").on("click", function (event) {
        event.stopPropagation();
    });
});

$(document).on("click", function () {
    $("#toggle").hide();
});
