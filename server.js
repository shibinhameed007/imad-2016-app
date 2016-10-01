var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-One' : {

title: 'article One | Shibin' ,
heading: 'Article-One',
date: 'sep 9,2016' ,
content: `
<p>
        this is the content for my first article. this is the content for my first article. this is the content for my first article. this is the content for my first article.
    </p>
    <p>
    this is the content for my first article. this is the content for my first article. this is the content for my first article. this is the content for my first article.
    </p>
    <p>
        this is the content for my first article. this is the content for my first article. this is the content for my first article. this is the content for my first article.
    </p>
    `

},
'article-Two' :  {

title: 'article Two | Shibin' ,
heading: 'Article-Two',
date: 'sep 19,2016' ,
content: `
<p>
        this is the content for my second article.
    </p>
    `

},
'article-Three' :  {

title: 'article Three | Shibin' ,
heading: 'Article-One',
date: 'sep 30,2016' ,
content: `
<p>
        this is the content for my third article. 

    </p>
    `

},
};
function createTemplate(data){
var date=data.date;
var heading= data.heading;
var title= data.title;
var content= data.content;

var htmlTemplate =
`<html>
<head>
<title>
${title}
    </title>
<link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
<div class="container">
<div>
    <a href="/">Home </a>
</div>
<hr/>
<h3> 
${heading}
</h3>
<div>
    ${date}
</div>  
<div>
   ${content}
</div>
</div>
</body>
</html>` ;

return htmlTemplate;
}
app.get('/', function (req, res) {
res.sendFile(path.join('ui','index.html'));
});

app.get('/:articleName', function (req, res) {
res.send(createTemplate(articles[articleName]));
var articleName= req.parans.articleName;
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
console.log(`IMAD course app listening on port ${port}!`);
});
