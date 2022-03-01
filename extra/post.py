from flask import Flask, render_template
import json
import get_import

# app = Flask(__name__)
def results():
    with open('ht.json', 'w') as f:
        json.dump(get_import, f)
        return render_template('index.html')

# if __name__ == "__main__":
#     app.run(debug=True)