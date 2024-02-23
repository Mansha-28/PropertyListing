"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header(){

    const pathName = usePathname()

    return (
        <header>
            <div className="flex md:flex-col bg-white-A700 flex-row md:gap-10 items-center w-full">
                <div className="flex justify-around w-full">
                        <div className="w-[10%] my-8  flex">

                            <Image src="/images/img_home.svg" alt="logo" width={40} height={40} />
                            Relansto
                        </div>

                    <div className="flex w-[40%] my-8  justify-between">
                        <Link className={(pathName === '/') ? "font-bold": 'text-blue-500'} href={'/'}>Home</Link>
                        <Link className={(pathName === '/listing') ? "font-bold": 'text-blue-500'} href={'/listing'}>Listing</Link>
                        <Link className={(pathName === '/agents') ? "font-bold": 'text-blue-500'} href={'/agents'}>Agents</Link>
                        <Link className={(pathName === '/property') ? "font-bold": 'text-blue-500'} href={'/property'}>Property</Link>
                        <Link className={(pathName === '/blog') ? "font-bold": 'text-blue-500'} href={'/blog'}>Blog</Link>
                    </div>

                    <div className="my-8">Search</div>
                    <Link href={'/login'}>
                        <button className="inline-flex items-center justify-center my-6 px-4 py-2  font-sans font-semibold tracking-wide text-white bg-black rounded-lg h-[40px]">
                            Login
                        </button>
                    </Link>
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
                    <div className="">Home</div>
                </div>
            </div>
        </header>
    )
}