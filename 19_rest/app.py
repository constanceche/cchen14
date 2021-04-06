# Team Confusion - Alivin Wu and Constance Chen
# SoftDev
# K19 -- A RESTful Journey Skyward/Use urllib to request and recieve data from a restful api
# 2021-04-05

from flask import Flask
from flask import render_template
import urllib
import json

app = Flask(__name__) 

@app.route("/") 
def main():
    #reads key
    with open("key_nasa.txt") as file:
        key = file.readlines()[0]
    #adds key to end of url and opens url
    url = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=" + key)
    #processes url and returns content
    data = json.loads(url.read())
    #define pic and info for html template
    pic = data['url']
    info = data['explanation']
    #print(data)
    return render_template('main.html', pic = pic, info = info)

if __name__ == "__main__":  
    app.debug = True        
    app.run()

                
