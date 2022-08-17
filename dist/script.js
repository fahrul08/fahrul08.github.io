$('#submit').on('click', function(e) {
  let keywords = $('#keywords').val().split("\n");
  let text = $('#text').val();
  
  for (let i = 0; i < keywords.length; i++) {
    let re = new RegExp(keywords[i], "gi");
    text = text.replace(re, '<span class="text-highlight">'+(keywords[i])+'</span>');
  }
  
  $('#result').html(text.replace(new RegExp("\n", "g"), "<br>"));
})

$('body').on('click', '.text-highlight', function(e) {
   bootbox.alert("Your message here…")
});