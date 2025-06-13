# Travel API

A Node.js/Express backend for fetching popular travel destinations, tour packages, and testimonials in India.

## Folder Structure
```
travel-api/
├── config/
│   └── db.js            # Database configuration
├── constants/           # Mock data and API credentials
├── models/              # Mongoose schemas
├── controllers/         # API endpoint logic
├── routes/              # Express routes
├── services/            # External API integrations
├── server.js            # Entry point
├── package.json         # Dependencies
└── README.md            # Documentation
```

## Setup
1. Install Node.js and MongoDB.
2. Clone the repository:
   ```bash
   git clone https://github.com/04amanrajj/task.git
   cd task
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start MongoDB locally:
   ```bash
   mongod
   ```
5. Run the server:
   ```bash
   npm start
   ```

## API Endpoints
- `GET /api/destinations`: Returns popular destinations.
- `GET /api/packages/top-selling`: Returns top-selling tour packages, sorted by rating.
- `GET /api/testimonials`: Returns customer testimonials.

## Dependencies
- express
- mongoose
- cors

## Notes
- Ensure MongoDB is running on `localhost:27017`.