import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './components/Users';
import Form from './components/Form';
import UserDetails from './components/UserDetails';
import Error from './components/Error';
import Welcome from './components/Welcome';
function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Welcome/>, errorElement: <Error/>, children: [
      {path: "users", element: <Users/>},
      {path: "add-user", element: <Form/>},
      {path: "users/:id", element: <UserDetails/>}
    ]},
  ])
  
  // const users = [
  //   {name: "ali", age: 22},
  //   {name: "yassmine", age: 21},
  //   {name: "mouadh", age: 24},
  // ]
  // const [counter, setCounter] = useState(0)
  // const incrementCounter = () => {
  //   setCounter(counter + 1)
  // }
  return (
    <RouterProvider router={router} />
  );
}

export default App;
