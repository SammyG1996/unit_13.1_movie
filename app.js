$('#submit').on('click', (e) => {
  e.preventDefault()
  
  $('tbody').append('<tr></tr>')
  $('tr').last().append('<td></td>')
  $('td').last().text($('#movie').val());
  $('tr').last().append('<td></td>')
  $('td').last().text($('#rating').val());
  $('tr').last().append('<button id="remove"> Remove </button>')
})

$('table').on('click', 'button', function() {
  $(this).parent().remove()
})

