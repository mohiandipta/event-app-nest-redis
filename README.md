# Event Management Server

## Step 1: Setup Database and Cache

### PostgreSQL
Run a PostgreSQL container on your local machine based on environment variables provided in `.env.example` and `docker-compose.yml`.

**Or**

Execute a PostgreSQL server with the following credentials on your local machine:
```
# DATABASE
DB_USERNAME=postgres
DB_PASSWORD=pgdb
DB_ROOT_PASSWORD=root
DB_NAME=event_db
DB_PORT=5432
DB_DOCKER_PORT=5432
DB_HOST=localhost
DB_DIALECT=postgres
```

### Redis
Run a Redis server using the following Docker command:
```
docker run --name redis-server -d -p 6379:6379 -v /path/to/redis.conf:/usr/local/etc/redis/redis.conf redis redis-server /usr/local/etc/redis/redis.conf
```

---

## Step 2: Start the Server

### Event Management Server
Run the project with the following commands:

Start the server:
```
npm run start
```

Start the server in watch mode:
```
npm run start:dev
```

### Swagger API Documentation
Access Swagger documentation at:
```
http://localhost:5001/api-docs
```

---

## API Endpoints

### Event Endpoints

**Create Event**
```
POST - http://localhost:5001/api/v1/events
```
**Body:**
```
{
   "name": "Trade Fair",
   "description": "National Trade Fair",
   "date": "2025-02-25",
   "location": "Purbachal",
   "maxAttendees": 200
}
```

**Get All Events**
```
GET - http://localhost:5001/api/v1/events
```

**Get Event by ID**
```
GET - http://localhost:5001/api/v1/events/:id
```

**Search Events**
```
GET - http://localhost:5001/api/v1/attendees/search?query=mohian
```

---

### Attendee Endpoints

**Create Attendee**
```
POST - http://localhost:5001/api/v1/attendees
```
**Body:**
```
{
   "name": "Mohian",
   "email": "mohian@gmail.com"
}
```

**Get All Attendees**
```
GET - http://localhost:5001/api/v1/attendees
```

**Get Attendee by ID**
```
GET - http://localhost:5001/api/v1/attendees/:id
```

**Search Attendees**
```
GET - http://localhost:5001/api/v1/attendees/search?query=mohian
```

---

### Registration Endpoints

**Register Attendee for Event**
```
POST - http://localhost:5001/api/v1/registration
```
**Body:**
```
{
   "eventId": "8d8a721b-5821-48dc-8f3d-9f93dcf8cd8a",
   "attendeeId": "1c3dfce7-7054-4e5f-a31b-5b764721dc4f"
}
```

**Get Registration by ID**
```
GET - http://localhost:5001/api/v1/registration/:id
```

**Get Registrations by Event ID**
```
GET - http://localhost:5001/api/v1/registration/:eventId
```

---

<!-- ## License -->
<!-- MIT License -->

---

## Author
Developed by [Mohian Mustafa]

