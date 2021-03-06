var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Article-one | Shibin',
    date  : 'Sep 9th 2017',
    heading : 'Article-One',
    content : 
            `<p>
                This is the first article.    This is the first article.    This is the first article.    This is the first article.
                    This is the first article.    This is the first article.
                        This is the first article.
            </p>
            <p>
                This is the first article.    This is the first article.    This is the first article.    This is the first article.
                    This is the first article.    This is the first article.
                        This is the first article.
            </p>
            <p>
                This is the first article.    This is the first article.    This is the first article.    This is the first article.
                    This is the first article.    This is the first article.
                        This is the first article.
            </p>`
    
    
};

function createTemplate (data) {
    var title= data.title
    var heading= data.heading
    var date= data.date
    var content= data.content

var htmlTemplate=`
    
    <html>

<head>
    <title>
        ${title}
        
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
</head>
    <body>
      <div class=container>
             
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
            ${content}               
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.send('article three 3 req and will be served here');
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
