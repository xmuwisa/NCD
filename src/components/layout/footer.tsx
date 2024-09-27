import Link from 'next/link'

const years = [2024, 2025]

const Footer = () => {
    return (
        <nav className="bg-white text-black p-5 space-x-2">
            {years.map((year) => (
                <Link
                    key={year}
                    href={`/${year}`}
                    className="hover:bg-lightPink active:bg-lightPink transition duration-300"
                >
                    {year}
                </Link>
            ))}
        </nav>
    )
}

export default Footer
