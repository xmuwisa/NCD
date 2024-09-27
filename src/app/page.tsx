'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Response } from '@/components/home'

export default function Home() {
    const [showInput, setShowInput] = useState(false)

    const toggleInput = () => {
        setShowInput(!showInput)
    }

    return (
        <div className="h-svh bg-white text-black flex flex-col items-center justify-center">
            <div
                className={`flex flex-col items-center justify-center p-5 sm:p-10 transition duration-300 ease-in-out ${
                    showInput
                        ? 'bg-gray border border-black shadow-custom'
                        : 'hover:bg-gray hover:border border-black hover:shadow-custom'
                }`}
            >
                <div className="space-y-2">
                    <span
                        className="text-lg sm:text-3xl flex justify-center lowercase cursor-pointer hover:text-pink active:text-pink transition duration-300 ease-in-out"
                        onClick={toggleInput}
                    >
                        What are you doing here?
                    </span>
                    <Image
                        src="/images/sus-cat.gif"
                        alt="Suspicious Cat"
                        width={1000}
                        height={1000}
                        className="w-full"
                    />
                </div>

                {showInput && <Response />}
            </div>
        </div>
    )
}
