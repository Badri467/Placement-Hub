# Placement-Hub

A comprehensive platform for students to access placement resources, company information, practice quizzes, and upcoming recruitment details.

## Features

### Current Implementation
- **User Authentication**: Secure login/registration system
- **Company Database**: View company details and placement statistics
- **Resource Library**: Access study materials and interview resources
- **Practice Quizzes**: Attempt technical and aptitude tests
- **Upcoming Drives**: Track companies visiting campus soon
- **Student Profiles**: View placed student profiles

### Future Implementations
- **Peer Chat System** 💬
  - Real-time chat between students
  - Subject-specific discussion channels
  - File sharing capabilities
- **Community Posts** 📢
  - Social media-style feed for sharing experiences
  - Post updates about placement preparation
  - Like/comment system for interaction
- **Enhanced Resources** 📚
  - User-generated content submissions
  - Resource rating and review system
  - Personalized recommendation engine
- **Quiz Improvements** 🧠
  - Adaptive learning quizzes
  - Peer comparison system
  - Detailed solution explanations
  - Weekly challenge leaderboards
###Register
![Screenshot 2025-03-18 093534](images/Screenshot%202025-03-18%20093534.png)
###Login
![Screenshot 2025-03-18 093548](images/Screenshot%202025-03-18%20093548.png)
###Homepage
![Screenshot 2025-03-18 093603](images/Screenshot%202025-03-18%20093603.png)
###view companies
![Screenshot 2025-03-18 093715](images/Screenshot%202025-03-18%20093715.png)
![Screenshot 2025-03-18 093759](images/Screenshot%202025-03-18%20093759.png)
###Resources
![Screenshot 2025-03-18 093759](images/Screenshot%202025-03-18%20093759.png)
###quiz
![Screenshot 2025-03-18 093815](images/Screenshot%202025-03-18%20093815.png)
## Technology Stack

### Frontend
- React.js
- React Router
- Axios
- CSS Modules

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication

### Development Tools
- Postman (API Testing)
- MySQL Workbench (Database Management)

## Installation

### Prerequisites
- Node.js (v16+)
- MySQL (v8+)
- npm

### Setup Instructions

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/placement-portal.git
   cd placement-portal
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure environment variables (edit .env file)
nano .env

# Start development server
npm run dev
