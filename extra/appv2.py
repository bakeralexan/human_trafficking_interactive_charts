from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
from flask import jsonify
import json
from bson import json_util
import os
from flask import url_for



# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/HumanTrafficking.offensedata"
mongo = PyMongo(app)

#read file
def json_file(obj):
    with open("ht_2013_2020_v3", "r") as outfile:
        outfile.write(obj)

#Route for index.html
@app.route("/")
def index():
    return render_template("index.html")

#  #Route to get the HT JSON data
@app.route('/data')
def lists():
    return json_util.dumps(i for i in mongo.db.metadata.find())

 #Route to get the JSON data
@app.route('/data1')
def lists1():
    return json_util.dumps(i for i in mongo.db.metadata1.find())

@app.route('/data2')
def lists2():
    return json_util.dumps(i for i in mongo.db.metadata2.find())

@app.route('/data3')
def lists3():
    return json_util.dumps(i for i in mongo.db.metadata3.find())

if __name__ == "__main__":
    app.run(debug=True)

