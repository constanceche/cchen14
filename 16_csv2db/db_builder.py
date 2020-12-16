# Third Huge Freckled Elephant
# Ethan Shenker, Constance Chen, Andrew Jiang, Saqif Abedin
# K16 - No Trouble
# 2020-12-15

import sqlite3
from csv import DictReader

db = sqlite3.connect("school")
c = db.cursor()

with open("students.csv") as file:  # open the file
    c.execute("CREATE TABLE students (student_name TEXT, age INTEGER, id INTEGER PRIMARY KEY)")
    reader = DictReader(file)

    for row in reader:
        # print(row)
        name = row['name']
        age = int(row['age'])
        id = int(row['id'])
        # print(f'INSERT INTO students VALUES ( "{name}" , age, id)')
        command = 'INSERT INTO students VALUES ( "{}", {}, {} );'.format(name, age, id)
        c.execute(command)

file.close()


with open("courses.csv") as file:  # open the file
    c.execute("CREATE TABLE courses (code TEXT, mark INTEGER, id INTEGER)")
    reader = DictReader(file)

    for row in reader:
        code = row['code']
        mark = int(row['mark'])
        id = int(row['id'])
        command = 'INSERT INTO courses VALUES ("{}", {}, {});'.format(code, mark, id)
        c.execute(command)

file.close()

db.commit()
db.close()