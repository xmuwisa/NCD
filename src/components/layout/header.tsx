import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className="bg-white absolute z-10 p-5">
            <Link href="/">
                <Image
                    src="/images/logo/Black.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-8"
                />
            </Link>
        </nav>
    )
}

export default Header
