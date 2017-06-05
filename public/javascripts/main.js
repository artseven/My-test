// $("#option" ).click(function() {
//   $( "#toggle" ).toggle( "slide" );
// });

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
    //     // obj.url = $(this).find('input[name=url]').val();
    //     json.items.push(obj);
    // });


    // console.log(json);
});
//----------- Pagination
// Quantity-input form validation
function validateForm() {
    var x = document.forms['myForm']['quantity'].value;
    if (x == '') {
      document.getElementById('quantity-input').style.borderColor = "red";
        return false;
    }
}
