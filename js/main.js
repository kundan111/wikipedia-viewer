$(document).ready(function(){

  $('#search').click(function(){

    var searchTerm= $('#searchTerm').val();
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";


$.ajax({

    type:"GET",
    url:url,
    async:false,
    dataType:"json",
    success:function(data){

      $('#output').html('');


            for(var i=0;i<data[1].length;i++){
              $('#output').prepend("<a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>"+"</a><p>"+data[2][i]+"</p>");
                }

    $('#searchTerm').val('');
  },
    error: function(errorMessage){

      alert("Error!");
    }

});

$("#searchTerm").keypress(function(e){
  if(e.which==13)
  {
    $("#search").click();
  }

});




});

});
