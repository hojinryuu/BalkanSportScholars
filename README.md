# Balkan Sport Scholars

Balkan Sport Scholars is a full-stack web application designed to assist athletes from the Balkan area in securing scholarships in the United States. The platform provides services such as application assistance, visa guidance, and cultural orientation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)
- [Contact](#contact)

## Features

- **Athlete Profiles**: Showcase the profiles of recruited athletes.
- **Scholarship Services**: Guide athletes through the process of applying for scholarships in the U.S.
- **Responsive Design**: Fully responsive design ensuring optimal performance on all devices.
- **Contact Form**: A contact form for athletes to get in touch with the team.

## Tech Stack

- **Frontend**: React, CSS (for styling), HTML
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using MongoDB Atlas)
- **Other**: Mongoose for MongoDB object modeling

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB Atlas account (or a local MongoDB instance)

### Clone the Repository

```bash
git clone https://github.com/your-username/balkan-sport-scholars.git
cd balkan-sport-scholars
```

## Install Dependencies

### For backend
```bash
cd backend
npm install
```

### For frontend
```bash
cd frontend
npm install
```

## Environment Variables
### Create a .env file in the backend directory and add the following variables:
MONGODB_URI=your_mongodb_uri  
PORT=your_port  

Replace your_mongodb_uri with your MongoDB connection string, and your_port with the desired port number.

## Usage

### Running the Backend
```bash
cd backend
npm start
```
The backend server will start on http://localhost:3000 by default.

### Running the Frontend
```bash
cd frontend
npm start
```
The frontend will start on http://localhost:3001 by default.

## Building for Production
To build the frontend for production:

```bash
npm run build
```
This will generate a build folder in the frontend directory with optimized assets.

## API Documentation
### Contacts API
- POST /api/contacts - Create a new contact
- GET /api/contacts - Get all contacts
- DELETE /api/contacts/:id - Delete a contact by ID

## Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

## Contact
Name: Hojin Ryu  
Email: hojinryu0411@gmail.com  
LinkedIn: Your LinkedIn  
Project Link: https://github.com/hojinryuu/BalkanSportScholars  