import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-gray-800">
        <Link href="/">Logo</Link>
        <ul>
            <li>
                <Link href="/">Dashboard</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar