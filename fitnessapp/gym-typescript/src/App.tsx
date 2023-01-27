import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "@/scenes/navbar"
import { SelectedPage } from '@/shared/types'
import Home from '@/scenes/home'



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage >(SelectedPage.Home)
  const [isTopofPage , setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      if (window.scrollY === 0){ //checking if window is at top
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)}
      if (window.scrollY !== 0 ){
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll" , handleScroll)
    return ()=> window.removeEventListener("scroll" , handleScroll)
   
  },[])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopofPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}  />
    </div>
  )
}


export default App
