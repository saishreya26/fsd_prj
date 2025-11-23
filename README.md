# Knowledge Sharing Platform

A full-stack MERN application for sharing and managing knowledge posts with CRUD operations.

## Features
- Create new knowledge posts
- Read all posts
- Update existing posts
- Delete posts
- Category-based organization
- Beautiful responsive UI

## Tech Stack
- **MongoDB** - Database
- **Express.js** - Backend framework
- **React** - Frontend library
- **Node.js** - Runtime environment

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
MONGODB_URI=mongodb://localhost:27017/knowledge-platform
PORT=5000
```

Start the backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The application will open at `http://localhost:3000`

## API Endpoints
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

## Author
Your Name

## License
MIT