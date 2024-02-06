import { useState } from "react"
import Hero from "./Hero"
import Menu from "./Menu"
import PopularCars from "./PopularCars"
import TeamCards from "./TeamCards"


const ClassicCarMain = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div >

      <Menu
        onClickMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <Hero
        onClickMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <PopularCars
        onClickMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <TeamCards />

    </div>
  )
}

export default ClassicCarMain