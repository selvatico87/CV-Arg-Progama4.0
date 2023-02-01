fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));


$(document).ready(function() {
  $(window).scroll(function(){
          if(document.body.scrollTop > 300)
                  $('#menufijo').fadeIn( "slow", function() { });
          else    
                  $('#menufijo').fadeOut( "slow", function() { });
  });
  $('#srolltotop').click(function(){
          $('html, body').animate({scrollTop:0}, 100);
          return false;
  });
});

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
    