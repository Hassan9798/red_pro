import Link from 'next/link'
import React from 'react'

export interface NavLinkProps {
    href: string;
    text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} className='underline underline-offset-2 decoration-primary text-primary/70 transition-colors duration-150 hover:text-primary whitespace-nowrap'>{text}</Link>
  )
}

export default NavLink