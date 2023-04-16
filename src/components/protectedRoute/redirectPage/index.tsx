import Link from 'next/link'

import CustomBtn from "components/shared/button/CustomBtn";

import Logo from "assets/logo.svg";

export default function RedirectPage() {

    return (
        <div className="w-full h-full bg-doctor bg-cover bg-center absolute -z-10">
            <div className="w-full h-full flex flex-col z-10 justify-between bg-[rgba(0,0,0,0.5)] pb-[15px] pt-[26px] px-[51.5px] xs:px-[15px]">
                <div className="flex justify-between items-center">
                    <div className="text-white text-[16px]">8door</div>
                </div>

                <div className="self-center px-10 py-10 w-96 text-center">
                    <div className="flex  align-center justify-center">
                        <Logo style={{ height: 65, width: 65 }} />
                    </div>
                    <p className="text-white text-5xl mt-4 mb-2">oops</p>
                    <p className="text-white text-2xl">you don&apos;t sign in yet</p>
                    <Link href="/login">
                        <CustomBtn
                            fit={true}
                            type="submit"
                            className="py-4 mt-12 bg-sky-500/100"
                        >
                            Login now
                        </CustomBtn>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex w-64 justify-between">
                        <Link href="/contact">
                            <p className="text-white">CONTACT US</p>
                        </Link>
                        <Link href="/about">
                            <p className="text-white">ABOUT US</p>
                        </Link>
                        <Link href="/faq">
                            <p className="text-white">FAQ</p>
                        </Link>
                    </div>
                    <div className="">
                        <p className="text-white">&copy; {new Date().getFullYear()} 8doors</p>
                    </div>
                </div>
            </div>
        </div>

    )
}