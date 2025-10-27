import './App.css'
import Counter from './Components/Counter'
import Menu from './Components/Menu'
import { Route, Routes } from 'react-router-dom'
import ToggleSwitch from './Components/ToggleSwitch'
import About from './Components/About'
import Home from './Components/Home'
import Login from './Components/Login'
import Registration_Form from './Components/Registration_Form'
import Login_password_Length from './Components/Login_password_Length'
import PersonalizedGreeting from './Components/PersonalizedGreeting'
import ListRendererMain from './Components/ListRendererMain'
import UserCardMain from './Components/UserCardMain'
import ColorPickerMain from './Components/ColorPickrMain'
import Parent from './Components/Parent'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Settings from './Components/Setting'
import UserProfile from './Components/UserProfile'
import ProductListMain from './Components/ProductListMain'
import ConditionalRendererMain from './Components/ConditionalRendererMain'
import TextInputMirror from './Components/TextInputMirror'
import ToggleListVisibility from './Components/ToggleListVisibility'
import ReusableButtonMain from './Components/ReusableButtonMain'
import TailwindLoginForm from './Components/TailwindLoginForm'
import TailwindRegistrationForm from './Components/TailwindRegistrationForm'

function App() {


  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path='/Counter' element={<Counter></Counter>}  ></Route>
        <Route path='/ToggleSwitch' element={<ToggleSwitch></ToggleSwitch>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Registration_Form' element={<Registration_Form></Registration_Form>}></Route>
        <Route path='/Login_password_Length' element={<Login_password_Length></Login_password_Length>}></Route>
        <Route path='/PersonalizedGreeting' element={<PersonalizedGreeting></PersonalizedGreeting>}></Route>
        <Route path='/ListRendererMain' element={<ListRendererMain></ListRendererMain>}></Route>
        <Route path='/UserCardMain' element={<UserCardMain></UserCardMain>}></Route>
        <Route path='/ColorPickerMain' element={<ColorPickerMain></ColorPickerMain>}></Route>
        <Route path='/Parent' element={<Parent></Parent>}></Route>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="profile/:name/:age/:email" element={<UserProfile />} />
        <Route path='/ProductListMain' element={<ProductListMain></ProductListMain>}></Route>
        <Route path='/ConditionalRendererMain' element={<ConditionalRendererMain></ConditionalRendererMain>}></Route>
        <Route path='/TextInputMirror' element={<TextInputMirror></TextInputMirror>}></Route>
        <Route path='/ToggleListVisibility' element={<ToggleListVisibility></ToggleListVisibility>}></Route>
        <Route path='/ReusableButtonMain' element={<ReusableButtonMain></ReusableButtonMain>}></Route>
        <Route path='/TailwindLoginForm' element={<TailwindLoginForm></TailwindLoginForm>}></Route>
        <Route path='/TailwindRegistrationForm' element={<TailwindRegistrationForm></TailwindRegistrationForm>}></Route>
      </Routes>
    </>
  )
}

export default App
