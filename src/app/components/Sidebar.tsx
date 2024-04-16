"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import SideLink from "./Sidebarlink"


const sidebar_Items = [
    {
        name: "Home",
        link: "/",
        icon: "/home.png"
    },
    {
        name: "Announce",
        link: "/announce",
        icon: "/announce.png"
    },
    {
        name: "About",
        link: "/about",
        icon: "/about.png"
    },
    {
        name: "Contact",
        link: "/contact",
        icon: "/contact.png"
    },
]

const Sidebar = () => {
    const [isCollapse,toggleSidebar] = useState<boolean>();
    const toggleSidebarHandle = () =>
        {
            toggleSidebar(prev => !prev)
        }
    return(
        <div className="sidebar_wrap">
            {/*Sidebar container*/}
            <aside className="sidebar" data-collapse = {isCollapse}>
                <div className="sidebar_top">
                    {/*Logo */}
                    <Image 
                    src="/logo.jpg" 
                    alt="logo" 
                    width={80} 
                    height={80} 
                    className="sidebar_logo" onClick={toggleSidebarHandle}/>
                    <p className="sidebar_logo-name">KeamKung Coding</p>
                </div>
                <div>
                    <ul className="sidebar_list">
                        {sidebar_Items.map((items) => (
                            <li className="sidebar_item" key={items.name}>
                                {/* <Link href={items.link} className="sidebar_link">
                                    <span className="sidebar_icon">
                                        <Image src={items.icon} alt="" width={24} height={24} />
                                    </span>
                                    <span className="sidebar_name">
                                        {items.name}
                                    </span>
                                </Link> */}
                                <SideLink item={items} isCollapse={isCollapse} key={items.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar