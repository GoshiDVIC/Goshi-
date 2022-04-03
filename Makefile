.PHONY: database server 

database:
	docker run --name mysql0 --network="host" --expose 3306 -e MYSQL_ROOT_PASSWORD=tebo -v ${HOME}/DVIC/projetHP3/database:/var/lib/mysql -d mysql:8.0 
# --name : nom containeur
# -p : lecture port
# mysql root password def du mdp
# -v chemin du volume 
server: 
	uvicorn --host 0.0.0.0 --port 8000 main:app --reload

stopdb:
	docker stop mysql0

startdb: 	
	docker start mysql0
