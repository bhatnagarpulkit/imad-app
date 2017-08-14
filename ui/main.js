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
        //capture the list of names and render it
   var names=['name1','name2','name3'];
   names=JSON.parse(names);
   var list='';
   for(var i=0; i<names.length; i++){
       list+ '<li>' + names[i] +'</li>';
   }
    var ul=documnet.getElementById('namelist');
   ul.innerHTML=list;
    }
  }
  //not done yet
};
//make the request
request.open('GET','http://skbhatnagar1961.imad.hasura-app.io/counter',true );
request.send(null);
};
//submit name
