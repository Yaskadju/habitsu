import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import * as C from "./styles"

export function DefaultLayout() {
  return (
    <C.LayoutContainer>
      <Sidebar />
      <Header />
      <Outlet />
    </C.LayoutContainer>
  )
}
