import Link from "next/link";
import React from "react";

export default function Header(){
    return(
        <div>
        <div className="left-0 absolute top-0 h-full shadow-md shadow-light/30 dark:shadow-black/20 bg-lightest dark:bg-darkest transition-width duration-300 w-0"></div>
<div className="right-0 absolute top-0 h-full shadow-md shadow-light/30 dark:shadow-black/20 bg-lightest dark:bg-darkest transition-width duration-300 w-0"></div>
<nav className="h-16 flex justify-between px-20 py-5 items-center z-20 fixed top-0 left-0 bg-transparent w-full">
            <a className="text-4xl" href="/">Ahmed</a>
            <ul className="flex gap-8 text-xl">
                <li><Link href={'/about'}>ABOUT</Link></li>
                <li><Link href={'/projects'}>PROJECTS</Link></li>
                <li><Link href={'/testominals'}>TESTOMINALS</Link></li>
                <li><Link href={'/contact'}>CONTACT</Link></li>
            </ul>
</nav>
        </div>
    )
}