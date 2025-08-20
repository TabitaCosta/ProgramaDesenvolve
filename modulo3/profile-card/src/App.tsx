import { ProfileList } from "./components/ProfileList"

function App() {
const team = [
  {
    name:"teste",
    title:"teste",
    imageUrl:"",
    description: (
      <>Especialista em React e Next.js com 5 anos de experiencia</>
    )
  },
    {
    name:"teste10",
    title:"teste10",
    imageUrl:"",
    description: (
      <>Especialista em React e Next.js com 5 anos de experiencia</>
    )
  },
      {
    name:"teste10",
    title:"teste10",
    imageUrl:"",
    description: (
      <>Especialista em React e Next.js com 5 anos de experiencia</>
    )
  }
]
  return (
    <>
      <ProfileList profiles={team}/>
    </>
  )
}

export default App
