import logo from './logo.svg';
import './App.css';
import { NavLink, RouterProvider } from 'react-router-dom';
import TodoList from './components/TodoList';
import { createBrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import User from './components/User';
import { useCallback, useState } from 'react';
import { counterContext } from './components/context/MyContext';
import { useContext } from 'react';
import CallBack from './components/CallBack';
import FormExample from './components/FormEx';
import UserList from './components/UserList';
import Comment from './components/UserComment';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SingleProduct from './components/SingleProduct';
import SingleCart from './components/SingleCart';
import QuotesPage from './components/Quotes';
import Recipes from './components/Recipes';
import SingalRecipes from './components/SingalRecipes';
import FinalForm from './components/FinalForm';
import FormikForm from './components/FormikFormExample';
import FormikFormOld from './components/FormikFormOld';

function App() {

  const [count, setCount] = useState(0)
  const [cValue, setcValue] = useState("hello")

  const router = createBrowserRouter([
    {
      path: "/", element: <><Navbar /><Home /></>
    }, {
      path: "/login", element: <><Navbar /><Login /></>
    }, {
      path: "/product", element: <><Navbar /><About /></>
    },
    {
      path: "/quotes", element: <><Navbar /><QuotesPage /></>
    }, {
      path: "/about/:id", element: <><Navbar /><SingleProduct /></>

    }, {
      path: "/user/:user", element: <><Navbar /><User /></>
    }, {
      path: "/todo", element: <><Navbar /><TodoList /></>
    }, {
      path: "/form", element: <><Navbar /><FormExample /></>
    }, {
      path: "/list", element: <><Navbar /><UserList /></>
    }, {
      path: "/comment", element: <><Navbar /><Comment /></>
    }, {
      path: "/card", element: <><Navbar /><Card /></>
    },
    {
      path: "/card/:id", element: <><Navbar /><SingleCart /></>
    },
    {
      path: "/todolist", element: <><Navbar /><TodoList /></>
    },
    {
      path: "/recipes", element: <><Navbar /><Recipes /></>
    },
    {
      path: "/recipes/:id", element: <><Navbar /><SingalRecipes /></>
    },
    {
      path: "/final-form", element: <><Navbar /><FinalForm /></>
    },
    {
      path: "/formik", element: <><Navbar /><FormikForm /></>
    },
    {
      path: "/Oldformik", element: <><Navbar /><FormikFormOld /></>
    },

  ])

  // const GetAdjective = ()=>{
  //   setcValue("how are u")
  // }
  const GetAdjective = useCallback(() => {
    setcValue("how are u")
  }, [])
  return (
    <counterContext.Provider value={count}>
      <div className="App">
        {/* <Navbar/> */}
        <RouterProvider router={router} />
        <Container>
          {/* <button onClick={() => setCount(count + 1)}>count is {count} </button> */}
        </Container>
        {/* <CallBack adjective={cValue} GetAdjective={GetAdjective} /> */}
      </div>
    </counterContext.Provider>
  );
}

export default App;
