dev: 
	docker-compose -f docker-compose.yml up --build

build:
	docker-compose -f docker-compose.production.yml up --build -d

down:
	docker-compose down