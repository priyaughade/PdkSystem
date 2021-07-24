import { useEffect,useState} from 'react';
import Users from './component/Users';
import Pagination from './component/Pagination';
import axios from 'axios';
import './App.css';
import { USER_PER_PAGE } from './util/constants';

//creted function app
function App() {
  const [users , setUsers] = useState([]);
  const [loading ,setLoading] = useState(false);
  const [page , setPage] = useState(1);
  const [totalPages, setTotalPages] =useState(0);

//Get data from source page
useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users?page=2');
      setLoading(false);
      setUsers(res.data.data)
      setTotalPages(Math.ceil(res.data.data.length / USER_PER_PAGE))
    };
    fetchUsers();
}, [])
//Handle Pages 
const handleClick =(num) =>{
  setPage(num);
}
//Display content  
  return (
    <div className="App">
     <h1>Pagination</h1>
     <p>Pages { page} </p>
     { loading ? <p>Loading.....</p> :<>
     < Users users={users} page = {page} />
     <Pagination  totalPages={totalPages}  handleClick={handleClick} />
     </>}
    </div>
  );
}

export default App;
