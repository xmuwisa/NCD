'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Home() {
    const [showImages, setShowImages] = useState(false)
    const [showQuote, setShowQuote] = useState(false)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
    const [imagePositions, setImagePositions] = useState<
        Array<{ x: number; y: number; rotation: number }>
    >([])
    const [currentImageSrc, setCurrentImageSrc] = useState(
        '/images/2024/chootie.png'
    )
    const [showCenterImage, setShowCenterImage] = useState(false)

    useEffect(() => {
        if (showCenterImage) {
            const wedSound = new Audio('/sounds/2024/wed.mp3')
            wedSound.play()
        }
    }, [showCenterImage])

    useEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', updateWindowSize)
        updateWindowSize()

        return () => window.removeEventListener('resize', updateWindowSize)
    }, [])

    const handleCrushClick = () => {
        setShowImages(true)
        generateRandomPositions()
        setShowQuote(true)
    }

    const generateRandomPositions = () => {
        const positions = []
        const imgSize = 50

        for (let i = 0; i < 20; i++) {
            const randomX = Math.floor(
                Math.random() * (windowSize.width - imgSize)
            )
            const randomY = Math.floor(
                Math.random() * (windowSize.height - imgSize)
            )
            const randomRotation = Math.floor(Math.random() * 360)
            positions.push({ x: randomX, y: randomY, rotation: randomRotation })
        }

        setImagePositions(positions)
    }

    const removeImage = () => {
        if (imagePositions.length > 0) {
            setImagePositions((prevPositions) => prevPositions.slice(0, -1))
            setCurrentImageSrc('/images/2024/chootie.png')

            const yesSound = new Audio('/sounds/2024/meoww.mp3')
            yesSound.play()

            if (imagePositions.length === 1) {
                setShowCenterImage(true)
            }
        }
    }

    const addImage = () => {
        const imgSize = 50
        const randomX = Math.floor(Math.random() * (windowSize.width - imgSize))
        const randomY = Math.floor(
            Math.random() * (windowSize.height - imgSize)
        )
        const randomRotation = Math.floor(Math.random() * 360)

        setImagePositions((prevPositions) => [
            ...prevPositions,
            { x: randomX, y: randomY, rotation: randomRotation },
        ])
        setCurrentImageSrc('/images/2024/sad.png')

        const noSound = new Audio('/sounds/2024/bwbwbwbw.mp3')
        noSound.play()
    }

    const scatteredImages = () => {
        return imagePositions.map((position, index) => (
            <Image
                key={index}
                src={currentImageSrc}
                alt={`image-${index}`}
                width={50}
                height={50}
                className="absolute z-10"
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transform: `rotate(${position.rotation}deg)`,
                }}
            />
        ))
    }

    return (
        <div className="h-screen bg-white text-black flex flex-col items-center justify-center relative overflow-hidden">
            {showCenterImage ? (
                <Image
                    src="/images/2024/cat-flower.png"
                    alt="Cat with flower"
                    width={1000}
                    height={1000}
                    className="w-full max-w-screen-sm p-5"
                />
            ) : (
                <>
                    <span className="font-bold text-4xl text-center sm:text-7xl p-5">
                        HAPPY NATIONAL CRUSH DAY
                    </span>
                    <span className="text-xl">
                        TO MY{' '}
                        <span
                            className="hover:text-pink cursor-pointer transition duration-300 ease-in-out"
                            onClick={handleCrushClick}
                        >
                            CRUSH
                        </span>
                    </span>

                    {showImages && scatteredImages()}

                    {showQuote && (
                        <div className="mt-10 border border-black shadow-custom bg-gray p-4 text-2xl flex flex-col items-center justify-center">
                            <div className="flex space-x-2 text-xl sm:text-3xl">
                                <FaQuoteLeft size={20} />
                                <span>AM I YOUR CRUSH AS WELL</span>
                                <FaQuoteRight size={20} />
                            </div>
                            <div className="flex space-x-4 text-base sm:text-xl">
                                <button
                                    className="hover:bg-lightPink active:bg-lightPink transition duration-300 justify-self-center"
                                    onClick={removeImage}
                                >
                                    yes&gt;////&lt;
                                </button>
                                <button
                                    className="hover:bg-lightPink active:bg-lightPink transition duration-300 justify-self-center"
                                    onClick={addImage}
                                >
                                    no&gt;__&lt;
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
