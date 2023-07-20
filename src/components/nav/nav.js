import React from 'react'
import { useColorMode } from "theme-ui";
import { Link } from 'gatsby'
import { nav } from './nav.module.scss'
// import Divider from '../../elements/divider'

const Nav = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === "dark";

  return (
        <nav className={nav}>
          <ul>
            <li>
              <Link to="/" style={{ color: isDark ? "white" : "black" }}>Home</Link>
            </li>
            <li>
              <Link to="/portfolio" style={{ color: isDark ? "white" : "black" }}>Portfolio</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
  )
}

export default Nav
