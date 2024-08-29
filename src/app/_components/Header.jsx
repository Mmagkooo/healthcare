import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function Header() {
    const HeaderMenu = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Appointment",
            path: "/appointment"
        },
        {
            id: 3,
            name: "Education",
            path: "/education"
        },

    ]
  return (
    <div className='flex justify-between px-4 items-center shadow-sm'>
    <div className='flex gap-20 items-center p-6'>
        <Image src='/logo.svg' alt='logo' width={140} height={40} priority />

        <ul className='md:flex hidden gap-10'>
            {HeaderMenu.map((item) => (
                <li key={item.id}
                    className='hover:text-primary cursor-pointer hover:scale-105 
                    transition-all ease-in-out text-xl'>
                    <Link href={item.path}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    <Button>Get Started</Button>
</div>

  )
}

export default Header