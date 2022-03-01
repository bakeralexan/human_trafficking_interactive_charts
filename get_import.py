import json
import pymongo
from pymongo.errors import BulkWriteError
  
# Making Connection
connection = "mongodb://localhost:27017/"
client = pymongo.MongoClient(connection)
db = client.humanTrafficking

# Created or Switched to collection 

Collection = db["metadata"]
  
# Loading or Opening the json file
with open('ht_2013_2020_v4.json') as file:
    file_data = json.load(file)
      
# Inserting the loaded data in the Collection
# if JSON contains data more than one entry
# insert_many is used else inser_one is used
# if isinstance(file_data, list):
#     Collection.insert_many(file_data)  
# else:
#     Collection.insert_one(file_data)
# Collection.insert_one(file_data) 
# mongoImp = dbo.insert_many(file_data)
try:
    bulk.execute(file_data)
except BulkWriteError as bwe:
    print(bwe.details)