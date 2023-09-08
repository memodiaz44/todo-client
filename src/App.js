import './App.css';
import Navbar from './componets/navbar';
import { Footer } from './componets/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';


function App() {

  const [user, setUser] = useState(false);
  const [userInfo, setUserInfo] =  useState({
    name: '',
    id: '',
    tasks: []
  })

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem('token');
  
    if (token) {
      // Token exists, so the user is authenticated
      setUser(true);
  
      // Retrieve user data from localStorage
      const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (storedUserInfo) {
        setUserInfo(storedUserInfo);
      }
    } else {
      // Token doesn't exist, so the user is not authenticated
      setUser(false);
    }
  }, []);
  

  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar user={user} setUser={setUser} userInfo={userInfo} setUserInfo={setUserInfo}/>
        {/* Add your content here */}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
