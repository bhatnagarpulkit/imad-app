var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
    title:'article one. I pulkit',
    heading: 'Article One',
    date: '5 sept 1996',
    content:`     <p>
           this is my first article over the webpage.
       </p>
       
           <p>
           this is my first article over the webpage.
       </p>
       
   
    
    <p>
           this is my first article over the webpage.
       </p>`
    
    
};
function createTemplate (data) {
    var title=data.title;
    var haeading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            S{title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
     
        
       
        </head>
<body>
    <div class="pulkit">
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
   <h3>S{heading} </h3>
   <div>S{date} </div>
   <div>
      S{content}
    </div>
    </div>
    
</body>

</html>

`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.toString());
  
    
});
var names=[];
app.get('/submit-name',function(req,res){// 
    //get the name for the request
    var name=req.query.name;
    
    names.push(name);
    //JSON: Javascript object notation
    
    res.send(JSONstringify(names));
});



app.get('/article-one', function (req, res){
    res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res){
    res.send('Article two requested and will be served here');
});
app.get('/article-three', function (req, res){
    res.send('Article three requested and will be served here');
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
