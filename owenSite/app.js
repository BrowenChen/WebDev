/**
 * Module dependencies.
 */

var express = require('express');
var ArticleProvider = require('./articleprovider-mongodb').ArticleProvider;


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

var articleProvider = new ArticleProvider('localhost', 27017);
// Routes

app.get('/', function(req, res){
    articleProvider.findAll( function(error,docs){
        res.render('index', { 
            
                title: 'a simple blog',
                articles:docs
            
        });
    })
});

app.get('/blog/new', function(req, res) {
    res.render('blog_new', { 
        title: 'new post'
    
    });
});

app.post('/blog/new', function(req, res){
    articleProvider.save({
        title: req.param('title'),
        body: req.param('body')
    }, function( error, docs) {
        res.redirect('/')
    });
});

app.get('/blog/:id', function(req, res) {
    articleProvider.findById(req.params.id, function(error, article) {
        res.render('blog_show',
        { 
            title: article.title,
            article: article
        
        });
    });
});

// edit a blog post
app.get('/blog/:id/edit', function(req, res) {
	articleProvider.findById(req.param('_id'), function(error, article) {
		res.render('blog_edit',
		{ 
			title: article.title,
			article: article
		
		});
	});
});

// update/save an edited blog post
app.post('/blog/:id/save', function(req, res) {
	articleProvider.update(req.param('_id'),{
		title: req.param('title'),
		body: req.param('body')
	}, function(error, docs) {
		res.redirect('/')
	});
});

// delete a blog post
app.post('/blog/:id/delete', function(req, res) {
		articleProvider.delete(req.param('_id'), function(error, docs) {
			res.redirect('/')
		});
});

app.post('/blog/addComment', function(req, res) {
    articleProvider.addCommentToArticle(req.param('_id'), {
        person: req.param('person'),
        comment: req.param('comment'),
        created_at: new Date()
       } , function( error, docs) {
           res.redirect('/blog/' + req.param('_id'))
       });
});

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);