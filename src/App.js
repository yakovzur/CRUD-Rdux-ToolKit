import './App.css';
import UserList from './fatures/users/UserList';
import {Routes, Route} from 'react-router-dom'
import AddUser from './fatures/users/AddUser';
import EditUser from './fatures/users/EditUser';

function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD With Redux</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/edit-user/:id" element={<EditUser/>} />
      </Routes>
      
    </div>
  );
}

export default App;
