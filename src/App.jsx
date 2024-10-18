
import './App.css'
import { AsideComponent } from './Aside.jsx'
import { HeaderComponent } from './Header.jsx'
import { MainContent } from './main-content.jsx'
import { makeServer } from './mirage.js'
makeServer()

function App() {


  return (
    <>
    <AsideComponent/>
    <HeaderComponent/>
    <MainContent/>
    
    </>
  )
}
export default App
