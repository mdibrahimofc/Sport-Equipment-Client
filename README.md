# EquiSports - Sports Equipment Online Store

![Homepage Screenshot](https://i.ibb.co.com/pvqrY6bc/Screenshot-2025-02-05-154051.png)

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

- ## 🌟 Core Features
The **EquiSports** website provides several key features:

✅ **Product Purchase System:** Users can browse and buy sports equipment.  
✅ **Admin Dashboard:** Admins can add, update, and manage products.  
✅ **User Authentication:** Firebase authentication for login and signup.  
✅ **Responsive UI:** Built with Tailwind CSS and DaisyUI for a sleek look.  
✅ **Smooth Animations:** Lottie animations and React Awesome Reveal for UI enhancements.  
✅ **Interactive Features:** Tooltip, rating system, and carousel for better UX.  

## Project Structure
- **client**: Contains the React frontend code
  - `src/`: Main source code for React components, pages, and utilities
  - `public/`: Public assets such as images, favicon, and index.html
- **server**: Contains the Node.js/Express server-side code
  - `models/`: MongoDB models for sports equipment data
  - `routes/`: API routes for handling equipment, user, and authentication operations
 
## 📦 Dependencies
This project includes the following dependencies:

```json
"dependencies": {
  "@404pagez/react": "^0.1.1",
  "@emotion/react": "^11.13.5",
  "@lottiefiles/dotlottie-react": "^0.11.0",
  "firebase": "^11.0.2",
  "lottie-react": "^2.4.0",
  "react": "^18.3.1",
  "react-awesome-reveal": "^4.2.14",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-rating-stars-component": "^2.2.0",
  "react-router-dom": "^7.0.2",
  "react-slick": "^0.30.2",
  "react-tooltip": "^5.28.0",
  "slick-carousel": "^1.8.1",
  "sweetalert": "^2.1.2"
}
```


## 🏗 How to Run the Project Locally
Follow these steps to set up the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/equisports.git
cd equisports
```

### 2️⃣ Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project_authDomain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```
The application will be available at **http://localhost:5173**.

### 5️⃣ Build for Production
To create a production-ready build:
```bash
npm run build
npm run preview
```

## 🖥️ Local Machine Run Overview
After running the project locally, you will experience:

✅ A homepage displaying sports equipment
✅ User authentication system (Login/Signup with Firebase)
✅ Admin panel for managing products
✅ Smooth navigation with React Router
✅ Interactive UI components (carousel, tooltips, ratings)

Here’s a sample screenshot of the local run:
(Replace this with an actual screenshot from your local project)

## 🌍 Live Website
Experience the website live at:  
🔗 [EquiSports Live Site](https://equisports-202b4.web.app/my-equipments-list)

## 📚 Additional Resources
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
