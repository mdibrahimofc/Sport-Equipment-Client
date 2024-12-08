# EquiSports - Sports Equipment Online Store

Welcome to **EquiSports**, your go-to online platform for purchasing top-quality sports equipment and accessories. Our platform allows customers to browse, purchase, and review a wide range of sports products. Whether you're into football, basketball, tennis, or any other sport, we've got the right gear for you!

**Live Website URL**: [https://equisports-202b4.web.app/]

## Features
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop views.
- **User Authentication**: Secure login and registration with email/password and additional social media authentication (Google, GitHub, etc.).
- **Product Management**: Add, update, and manage sports equipment through a private route.
- **Private Routes**: Access exclusive pages such as "Add Equipment", "My Equipment List", and "View Details" only for logged-in users.
- **Dynamic Product Listings**: Browse through a variety of sports equipment, sorted by price or other criteria.
- **Search & Filter**: Easily find your favorite sports gear.
- **Dark/Light Theme**: Toggle between dark and light modes for a personalized browsing experience.
- **Loading Spinner**: A smooth loading experience with visual feedback during data loading.
- **Error-Free Navigation**: No error on page reload or when navigating through routes.

## Technologies Used
- **Frontend**: React, Tailwind CSS, Lottie React, React Awesome Reveal, React Tooltip
- **Backend**: Node.js, Express, MongoDB, Firebase
- **Authentication**: Firebase Authentication (Email/Password, Google, GitHub)
- **Hosting**: Client-side hosted on [Netlify](https://www.netlify.com/) and server-side hosted on [Vercel](https://vercel.com/)
- **Version Control**: Git and GitHub for source code management and version control.

## Project Structure
- **client**: Contains the React frontend code
  - `src/`: Main source code for React components, pages, and utilities
  - `public/`: Public assets such as images, favicon, and index.html
- **server**: Contains the Node.js/Express server-side code
  - `models/`: MongoDB models for sports equipment data
  - `routes/`: API routes for handling equipment, user, and authentication operations

## Setup and Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Client Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/equisports-client.git
   cd equisports-client
