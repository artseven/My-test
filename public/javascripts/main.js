$("#option" ).click(function() {
  $( "#toggle" ).toggle( "slide" );
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

function validateForm() {
    var x = document.forms['myForm']['quantity'].value;
    if (x == '') {
      document.getElementById('quantity-input').style.borderColor = "red";
        return false;
    }
}
