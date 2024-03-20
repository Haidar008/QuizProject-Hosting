import './App.css';
import {Routes, Route} from "react-router-dom"
import Signup from './pages/Signup';
import Login from './pages/Login';
import ContactUsPage from './pages/contactUs';
import AboutPage from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import  QuizPage  from './pages/QuizPage';
import OTPInputPage from './pages/OtpPage';
import ResetPasswordLink from './pages/ResetLink';
import ResetPassword from "./pages/ResetPassword";
import QuestionsPage from './pages/QuestionsPage';
import { Toaster } from 'react-hot-toast';
import DashBoard from './components/DashBoard';
import MyProfile from "./components/MyProfile";
import Setting from "./components/Setting";
import MySubmisson from "./components/MySubmission";
import PrivateRoute from './components/PrivateRoute';
import OpenRoute from './components/OpenRoute';
import PageNotFound from './components/NotFound';



function App() {
  return (
    <div className="App">
        <div>
          <Routes>
              <Route path='*' element={<PageNotFound/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/signUp' element={<OpenRoute><Signup/></OpenRoute>}/>
              <Route path='/login' element={<OpenRoute><Login/></OpenRoute>}/>
              <Route path='/contactUs' element={<ContactUsPage/>}/>
              <Route path='/otp' element={<OpenRoute><OTPInputPage/></OpenRoute>}/>
              <Route path='/passwordResetLink' element={<OpenRoute><ResetPasswordLink/></OpenRoute>}/>
              <Route path='/resetPassword/token/:id' element={<OpenRoute><ResetPassword/></OpenRoute>}/>
              <Route path='/quiz' 
              element=
              {<PrivateRoute>
                <QuizPage/>
              </PrivateRoute>
              }
              />
              <Route path='/quiz/:id' element={
              <PrivateRoute>
                  <QuestionsPage/>
              </PrivateRoute>
              }/>
              <Route path='/DashBoard' element={
              <PrivateRoute>
                  <DashBoard/>
              </PrivateRoute>
              }>
                      <Route path='/DashBoard/myProfile' element={<MyProfile/>}/>
                      <Route path='/DashBoard/mySubmission' element={<MySubmisson/>}/>
                      <Route path='/DashBoard/setting' element={<Setting/>}/>
              </Route>
          </Routes>
        </div>
        <Toaster/>
    </div>
  );
}

export default App;
