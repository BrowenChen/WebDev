from flask import *

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/about') #This maps and routes /about to this about function
def about():
	return render_template('about.html')

@app.route('/user')
def route():
	return render_template('user.html')	

@app.route('/login')
def route():
	return render_template('login.html')


if __name__ == '__main__':
	app.run(debug=True)
	