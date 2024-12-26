"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { srisakdi } from '@/fonts';
import { STORAGE_URL } from '@/config';

export interface HomeCarouselCardProps {
    caption: string;
    heading: string;
    description: string;
    buttonText: string;
    handleClick: () => void;
    eventImgUrl: string;
    discount?: boolean
}

const HomeCarouselCard: React.FC<HomeCarouselCardProps> = ({ caption, heading, description, handleClick, buttonText, eventImgUrl, discount }) => {
    return (
        !discount ? (
            <div className='px-6 h-[288px] md:px-16 pt-4 md:pt-6 pb-10 w-full md:max-h-[624px] md:h-full shadow-sm transition-all duration-150 hover:shadow-lg rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-500 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* gird item 1 */}
                <div className='flex flex-col justify-center items-start gap-6   text-white'>
                    <h3 className={cn(srisakdi.className, "text-2xl font-bold")}>{caption}</h3>
                    <h1 className='font-bold text-5xl lg:text-8xl'>{heading}</h1>
                    <p className='text-sm text-[#FAFAFA]'>{description}</p>
                    <Button variant={'primary'} size={'lg'} onClick={handleClick}>
                        <div>{buttonText ? buttonText : 'Explore Now'}</div>
                        <Image src={'/icons/external-link.png'} alt='link' width={24} height={24} />
                    </Button>
                </div>
                {/* grid item 2 */}
                {/* <div className='hidden md:flex
        justify-center items-center '> */}
                {/* use import image url */}
                {/* <Image src={typeof eventImgUrl === 'string' ? STORAGE_URL + eventImgUrl : eventImgUrl } alt="banner" className="w-full object-contain aspect-square" fill /> */}

                {/* </div> */}




                {/* // */}

                <div className="hidden md:flex justify-center items-center relative w-full h-[300px]">
                    <Image
                        src={typeof eventImgUrl === 'string' ? STORAGE_URL + eventImgUrl : eventImgUrl}
                        alt="banner"
                        fill
                        className="w-full h-full object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>) :
            (
                <div
                    style={{ backgroundImage: `url(${STORAGE_URL + eventImgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    className='px-6 h-[288px] md:px-16 pt-4 md:pt-6 pb-10 w-full md:max-h-[624px] md:h-full shadow-sm transition-all duration-150 hover:shadow-lg rounded-3xl '>
                    {/* <h1 style={{ color: 'red', textAlign: 'center' }}>Dynamic Background</h1> */}
                    
                    <div className='flex flex-col justify-center items-end text-white'>
                    <h3 className={cn(srisakdi.className, "text-2xl font-bold")}>{caption}</h3>
                    <h1 className='font-bold text-5xl lg:text-8xl'>{heading}</h1>
                    <p className='text-sm text-[#FAFAFA]'>{description}</p>
                    <Button variant={'primary'} size={'lg'} onClick={handleClick}>
                        {/* <div>{buttonText ? buttonText : 'Explore Now'}</div> */}
                        <Image src={'/icons/external-link.png'} alt='link' width={24} height={24} />
                    </Button>
                </div>

                </div>
            )
    )
}

export default HomeCarouselCard