# Goshi-
Hack and Puzzle Project : Monitoring system


The objective of the project is to design a sensor interface and database. Allowing the user to be aware of different factors such as temperature, humidity, or brightness. It will also be able to know the best-growing conditions as well as the possible problems. The project is simple and accessible to all.  

The sensor is composed of humidity, temperature, and pressure sensor BME280, as well as an ESP32 microcontroller used to connect to the existing WiFi network and create a Web Server.
An API server will receive the different data from the sensor. And send them to a database to be stored. In parallel, it will send these data to an interface to be displayed. An interface will display live these different factors via a graph or a table. This interface will be realized either in Html or with Grafana. A database created in docker MySQL will be linked to an API server and will allow the storage of data. Keeping the data is essential for the growers; to be aware of the best growing conditions, or to know the cause of a problem. The project can be used by different agricultural processes, such as the food computer, Aeroponics systems, or Hydroponics systems.
