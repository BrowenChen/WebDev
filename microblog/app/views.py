from flask import render_template
from app import app
from froms import LoginForm

@app.route('/')
@app.route('/index')
def index():
	user = {'nickname': 'Owen' } #fake user
	loopData = ['asd','asdasd']
	posts = [ {'author': {'nickname': 'John'}, 'body': 'Beautiful day in Port'},
			{'author': {'nickname': 'asdasdas'}, 'body': 'Beautiful asdasdas in Port'}
		 ]

	return render_template("index.html", 
		title = 'Home',
		user = user)

@app.route('/user')
def user():
	return "This is a user"

@app.route('/login')
def login():
	form = LoginForm()
    return render_template('login.html', 
        title = 'Sign In',
        form = form)
