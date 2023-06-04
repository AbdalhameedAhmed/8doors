import React from "react"
import Link from 'next/link'

import CustomBtn from "components/shared/button/CustomBtn";
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { toSubDomain } from 'utiles';

import Logo from "assets/logo.svg";

export default function RedirectPage() {
 
    return (

        <SignInSignOutLayout title="Welcome to 8doors" cardContainerStyle="!p-0">
            {/* <div className="self-center px-10 py-10 w-96 text-center">
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
            </div> */}
            <div className={`w-full px-[64px] xs:!w-[448px] xs:px-0 sm:!w-[448px] sm:px-0 md:!w-[448px] md:px-0`}>
                <div className="text-center">
                    <p className="text-5xl mt-4 mb-2">oops</p>
                    <p className="text-2xl">you don&apos;t sign in yet</p>
                    <Link href={toSubDomain("","login")}>
                        <button

                            type="submit"
                            className="inline-block w-full mt-4 rounded-lg py-3 px-[22px] bg-[#212B36] dark:bg-white dark:text-black text-white"
                        >
                            Login now
                        </button>
                    </Link>
                </div>
            </div>
        </SignInSignOutLayout>

    )
}