import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "@/scenes/navbar"
import { SelectedPage } from '@/shared/types'



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage >(SelectedPage.Home)

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}


export default App
