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
//submit name
var nameInput=documnet.getElementById('name');
var name=nameInput.value;
var submit=documnet.getElementById('submit_btn');
submit.onclick= function(){
   //make arequest ot server  and send the name
   //capture the list of names and render it
   var names=['pulkit','katty','sheku'];
   var list='';
   for(var i=0; i<names.length; i++){
       list+- '<li>' + names[i] +'</li>';
   }
   var ul=documnet.getElementById('namelist');
   ul.innerHTML=list;
};