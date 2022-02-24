from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
from flask import jsonify
import json
from bson import json_util
import os



# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/HumanTrafficking"
mongo = PyMongo(app)

#Route for index.html
@app.route("/")
def index():
    return render_template("index.html")

    #Route to get the HT JSON data
@app.route('/data')
def lists():
    return json_util.dumps(i for i in mongo.db.Human_Trafficking_2013_2020.find())

 #Route to get the BEA JSON data
@app.route('/data2')
def lists2():
    return json_util.dumps(i for i in mongo.db.BEA_Clean.find())

if __name__ == "__main__":
    app.run(debug=True)