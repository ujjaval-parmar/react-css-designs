import { useState } from "react";

import Header from "./Header";
import Navbar from "./Navbar";

export default function TourMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClass = isMenuOpen ? "change" : "";

  return (
    <div>
      <div className={`container ${menuClass}`}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={()=> setIsMenuOpen(!isMenuOpen)}/>

        <Header />
      </div>
    </div>
  );
}
