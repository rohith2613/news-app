import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link className="block text-red-600 bg-slate-100 p-1 rounded-md" to="/">
          <span className="sr-only">Home</span>
         <h1 className='text-2xl font-bold'>Galaxy News</h1>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <Link className="text-gray-500 transition p-2 rounded-md hover:bg-red-400" to="/"> Top Headlines </Link>
            </li>

            <li>
              <a className="text-gray-500 transition p-2 rounded-md hover:bg-red-400" href="#"> Entertainment </a>
            </li>

            <li>
              <a className="text-gray-500 transition p-2 rounded-md hover:bg-red-400" href="#"> Sports </a>
            </li>

            <li>
              <a className="text-gray-500 transition p-2 rounded-md hover:bg-red-400" href="#"> Science & Technology </a>
            </li>

            <li>
              <a className="text-gray-500 transition p-2 rounded-md hover:bg-red-400" href="#"> Poltical </a>
            </li>

            
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-600"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header