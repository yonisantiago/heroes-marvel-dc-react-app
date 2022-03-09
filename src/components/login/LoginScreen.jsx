import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import '../login/login.css'

export const LoginScreen = () => {
  
  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogin = () => {
   
   // console.log('handleLogin');

      const action = {
        type: types.login,
        payload:{name: 'Yoni'},
      }

      dispatch(action);

      const lastPath = localStorage.getItem('lastPath') || '/marvel';


      navigate(lastPath, { 
        replace: true
      })
  };
  
  return (
      <div className=" signin text-center">
        <main className="form-signin">
          <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/04/DC-vs-Marvel-1.jpg" className="mb-4" width="200" height="60"alt=""/>
        <h1 className='h3 mb-3 fw-normal'>Login - Hero App</h1>
          <hr/>

          <button className="w-100 btn btn-lg btn-primary" onClick={handleLogin}> Login</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022 Yoni Silvestre</p>
        </main>
          
      </div>
    )
  }
  