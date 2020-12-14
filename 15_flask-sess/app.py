# Third Huge Freckled Elephant
# Ethan Shenker, Constance Chen, Andrew Jiang, Saqif Abedin
# K15 - Sessions Greetings
# 2020-12-12

from flask import Flask, render_template, request, session
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

username = "elephant"
password = "123pass"

@app.route("/")
def root():
    if session.get('username'):
        return render_template("welcome.html", user=session.get('username'))
    else:
        return render_template("login.html")
    

@app.route("/auth")
def auth():
    if request.args['username'] == username and request.args['password'] == password:
        session['username'] = request.args['username']
        return render_template("confirm.html")
    else:
        if not request.args['username'] or not request.args['password']:
            return render_template("error.html", error="Please input a valid username and password.")
        elif request.args['username'] != username:
            return render_template("error.html", error="Please input a valid username.")
        elif request.args['password'] != password:
            return render_template("error.html", error="Please input a valid password.")
    return render_template("error.html", error="Something else went wrong, sorry.")

@app.route("/logout")
def logout():
    session.pop('username')
    return render_template("logout.html")
    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
 
