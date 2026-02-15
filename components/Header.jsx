import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

function Header() {
    return (
        <div className='flex justify-between p-5 shadow-sm items-center'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} width={50} height={50} alt='Logo' />
                <h2 className='font-bold text-xl text-primary'>Online Learning Platform</h2>
            </div>
            <Link href={'/workspace'}>
                <Button>Get Started</Button>
            </Link>
        </div>
    )
}

export default Header
