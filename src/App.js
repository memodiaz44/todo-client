import './App.css';
import logo from './image/logo.JPG'
import List from './componets/Tasklist';

function App() {
  return (
    <div className="task-app">
       <img src={logo}
        alt='my logo'
         className='logo'/>
      <div className='logo-conteiner'>
       
         <div className='task-list'
         ><h1>My task</h1>
         
         <List/>
         
         </div>
         


      </div>
    
    
    </div>
  );
}

export default App;
