//counter code
var button=document.getElementById('counter');

button.onclick=function(){
  //crreate the request object
  var request= new XMLHttpRequest();
  //capture the respone and store it in a variable
  request.onreadystatechange=function(){
    if(request.readyState ===XMLHttpRequest.DONE){
    //take some action
    if(request.status==200){
        var counter=request.responseText;
         var span=document.getElementById('count');
         span.innerHTML= counter.toString();
        
    }
  }
  //not done yet
};
//make the request
request.open('GET','http://skbhatnagar1961.imad.hasura-app.io/counter',true );
request.send(null);
};
