$(document).ready(function(){
  $('#add-book').on('submit',function(e){
    e.preventDefault();
    var title   =$('#title').val();
    var category=$('#category').val();
    var excerpt =$('#excerpt').val();

    $.ajax({
      url: "https://api.mlab.com/api/1/databases/frontage/collections/books?apiKey=zuueVvQsFkdQaNBjsNUYwlCIuXCgAc8G",
      data: JSON.stringify({
        "title": title,
        "category": category,
        "excerpt": excerpt
         }),
      type: "POST",
      contentType: "application/json",
      success: function(data){
        window.location.href="test01.html"
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  })
});

function getBooms(){
  $.ajax({
    url:  "https://api.mlab.com/api/1/databases/frontage/collections/books?apiKey=zuueVvQsFkdQaNBjsNUYwlCIuXCgAc8G"
  }).done(function(data){
    var output = '<div>';
    4.each(data, function(key. data){
      output += '<div class="well">';
      output += '<h3>'+data.title+'</h3>';
      output += '<p>'+data.category+'</p>';
      output += '<p>'+data.excerpt+'</p>';
      output += '</div>';
    });
    output += '</div>';
    $('#books').html(output);
  })
}
