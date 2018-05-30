$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#left").prepend("<li>MEEEEEEEW</li>");
    $("ul#right").prepend("<li>REEEEEEE</li>");
    $("ul#left").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#right").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#right").prepend("<li>REEEEEEE</li>");
    $("ul#left").prepend("<li>MEEEEEEEW</li>");
  });

  $("button#crazydog").click(function() {
    $("ul#doglist").prepend("<li><img src='img/woof.jpg'></li>");
    $("ul#doglist").children("li").first().click(function(){
      $(this).remove();
    });
  });
});
