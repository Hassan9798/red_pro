import Image from 'next/image';
import React from 'react'

export interface NavItemProps {
    imgUrl: string;
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({ imgUrl, text }) => {
  return (
    // drop down
    <div className='flex flex-col justify-center items-center text-center gap-2 text-sm text-neutral-light cursor-pointer group'>
        <Image src={imgUrl} alt={text} width={46} height={46} className='transition-all duration-300 group-hover:-translate-y-1 md:group-hover:-translate-y-2'/>
        <div>{text}</div>
    </div>
  )
}

export default NavItem;