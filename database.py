import mysql.connector
import time
import datetime

mydb = mysql.connector.connect(
  host="localhost",
  port=3306,
  user="root",
  password="tebo",
  database = "sensordata"
)

print(mydb)

mycursor = mydb.cursor()

# mycursor.execute("CREATE DATABASE sensordata")

# mycursor.execute("SHOW DATABASES")
# mycursor.execute("SHOW TABLES")

# mycursor.execute("CREATE TABLE data (id INT AUTO_INCREMENT PRIMARY KEY, tps TIMESTAMP, temperature FLOAT, humidity FLOAT, pressure FLOAT)")

def add_data(temperature,humidity,pressure):
  tps = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
  # tps = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S') #créer une date sous format
  sql = f"INSERT INTO data (tps, temperature, humidity, pressure) VALUES (%s, %s, %s, %s)"
  val = (tps,float(temperature),float(humidity),float(pressure))
  print(val)
  mycursor.execute(sql, val)
  mydb.commit() #confirme les changements à la base de donnée
  for x in mycursor:
      print(x)









