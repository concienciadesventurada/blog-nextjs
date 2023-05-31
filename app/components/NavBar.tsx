import React from 'react'
import Link from 'next/link';
import NavLink from './NavLink';

// TODO: Responsiveness and onClick in menu.

export default function NavBar() {
  return (
  <>
    <nav className="sticky p-5 bg-gris shadow md:flex md:items-center md:justify-between text-blancucho">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl cursor-pointer">
            ACÓLITO Y HEREJE
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <a>=</a>
          </span>
        </div>
        <ul
          className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0"
        >
          <NavLink href={"/"} link={"Home"} />
          <NavLink href={"/about"} link={"About"} />
          <NavLink href={"/contact"} link={"Contact"} />
          <NavLink href={"/login"} link={"Login"} />
          <NavLink href={"/register"} link={"Register"} />
          <NavLink href={"/posts"} link={"posts"} />
        </ul>
      </nav>
  </>
  )
}
