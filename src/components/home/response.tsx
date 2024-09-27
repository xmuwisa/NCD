'use client'

import { useState } from 'react'
import chatResponsesData from '@/data/chat-responses.json'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

type ChatResponse = {
    index: number
    chat: string
    reply: string[]
}

type ChatResponsesData = {
    chatResponses: ChatResponse[]
}

const chatResponses = chatResponsesData as ChatResponsesData

export default function Response() {
    const [selectedResponse, setSelectedResponse] = useState<string | null>(
        null
    )

    const handleClick = (index: number) => {
        const responses = chatResponses.chatResponses.find(
            (item) => item.index === index
        )?.reply
        if (responses) {
            const randomResponse =
                responses[Math.floor(Math.random() * responses.length)]
            setSelectedResponse(randomResponse)
        }
    }

    return (
        <div className="w-full border border-black mt-6 p-4">
            <div className="w-48 sm:w-80 space-x-2 block gap-2 mb-4 text-sm">
                {chatResponses.chatResponses.map((item) => (
                    <button
                        key={item.index}
                        onClick={() => handleClick(item.index)}
                        className={`hover:bg-lightPink active:bg-lightPink transition duration-300 justify-self-center ${
                            item.index === 0 ? 'text-gray' : ''
                        }`}
                    >
                        {item.chat}
                    </button>
                ))}
            </div>
            {selectedResponse && (
                <span className="flex mt-4 pt-2 pl-2 space-x-2 text-base">
                    <FaQuoteLeft size={12} />
                    <span>{selectedResponse}</span>
                    <FaQuoteRight size={12} />
                </span>
            )}
        </div>
    )
}
