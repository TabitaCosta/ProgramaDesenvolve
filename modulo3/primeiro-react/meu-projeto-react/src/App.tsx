import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {
const skill =  ['PHP', 'TS', '']
  return (
    <>
      <Header/>
      <Profile name={'Tabita'} bio={'Dev Full stack'} location={'Minas'}/>
      <Skills skills={skill}/>
    </>
  )
}

export default App
