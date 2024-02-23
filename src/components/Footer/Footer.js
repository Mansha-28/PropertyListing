import Link from "next/link"

export default function Footer(){
    return (
        <div className="flex flex-col my-20 md:gap-10 gap-[120px] items-start justify-start w-full">
            <div className="flex md:flex-row flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-col gap-[43px] m-5 w-[341px] items-start justify-start">
                    <div className="flex flex-row gap-[11px] h-10 md:h-auto w-[341px] items-center justify-start">
                        <img src="/images/img_home.svg" alt="logo"/>
                        Relasto
                    </div>

                    <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                        <div className="">
                            59, Barvely Hill Ave, 
                            Brooklyn Town,
                            NewYork, NY 5630, CA, US
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <div className="text-base text-gray-900 w-auto">
                                +91 1234567890
                            </div>

                            <div className="text-base text-gray-900 w-auto">
                                info@email.com
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 md:flex-row flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                        <div className="text-gray-900 font-bold text-lg w-full">
                            Features
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <Link href="/"><div className="text-gray-900 text-base w-full">Home</div></Link>
                            <div className="text-gray-900 text-base w-full">Home V2</div>
                            <div className="text-gray-900 text-base w-full">About</div>
                            <Link href="/contact"><div className="text-gray-900 text-base w-full">Contacts</div></Link>
                            <div className="text-gray-900 text-base w-full">Search</div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                        <div className="text-gray-900 font-bold text-lg w-full">
                            Information
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <div className="text-gray-900 text-base w-full">Listing</div>
                            <div className="text-gray-900 text-base w-full">Listing V2</div>
                            <div className="text-gray-900 text-base w-full">Property Details</div>
                            <div className="text-gray-900 text-base w-full">Agent List</div>
                            <div className="text-gray-900 text-base w-full">Agent Profile</div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                        <div className="text-gray-900 font-bold text-lg w-full">
                            Documentation
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <div className="text-gray-900 text-base w-full">Blog</div>
                            <div className="text-gray-900 text-base w-full">FAQs</div>
                            <div className="text-gray-900 text-base w-full">Privacy Policy</div>
                            <Link href="/license"><div className="text-gray-900 text-base w-full">Licence</div></Link>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                        <div className="text-gray-900 font-bold text-lg w-full">
                            Others
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <div className="text-gray-900 text-base w-full">Login</div>
                            <div className="text-gray-900 text-base w-full">Enter Otp</div>
                            <div className="text-gray-900 text-base w-full">New Password</div>
                            <div className="text-gray-900 text-base w-full">Reset Password</div>
                            <div className="text-gray-900 text-base w-full">Create Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}