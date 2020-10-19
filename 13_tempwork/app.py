# Team Owl (Constance Chen, Winnie Huang, Erin Lee)
# SoftDev -- Rona Ed.
# K13: Template for Success: Using templating/jinja/flask, re-do the occupations assignment integrating python and HTML.
# Due Oct 19 2020 

from flask import Flask, render_template
import csv
import random
app = Flask(__name__)

@app.route("/occupyflaskst") #Q1: Can all of your teammates confidently predict the URL to use to load this page?
def test_tmplt():
    occupations_dict = {} #dictionary created!
    with open("data/occupations.csv") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter =',') #reading the csv file
        for row in csv_reader: #for each row
          if row[0].startswith("Job Class") or row[0].startswith("Total"):continue #skips first and last line
          occupations_dict[row[0]] = float(row[1]) #putting the stuff in the dict (name key, percent value).

    all_occupations = list(occupations_dict.keys())
    all_chances = occupations_dict.values()
    result = random.choices(all_occupations, weights = all_chances, k = 1) #using the values as the weights for probability, and the last line's total percent as the total weight!

    return render_template('tablified.html', result=result[0], dict=occupations_dict) #Q2: What is the significance of each argument?
    
if __name__ == "__main__":  # true if this file NOT imported
  app.debug = True        # enable auto-reload upon code change
  app.run()