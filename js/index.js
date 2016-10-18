$('.grid').masonry({
  itemSelector: '.item',
  columnWidth: 160,
  gutter: 10
});

$('.item').each(function(i){
  setTimeout(function(){
  $('.item').eq(i).addClass('isVisible');
  }, 200 * i);
});