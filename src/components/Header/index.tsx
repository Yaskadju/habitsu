import * as C from "./styles"
import logoIgnite from "../../assets/logo-ignite.svg"
import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { Countdown } from "../../pages/Home/components/Countdown"

export function Header() {
  return (
    <C.HeaderContainer>
      {/* <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav> */}
      <Countdown />
    </C.HeaderContainer>
  )
}
