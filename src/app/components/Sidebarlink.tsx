"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface LinkProp {
    item: any
    isCollapse?: boolean
}

const SideLink = ({item,isCollapse}:LinkProp) => {
    const pathName = usePathname()
    console.log(pathName)
    return(
<Link href={item.link} className={`${isCollapse && "justify-center"} items-center rounded p-1 inline-block text-lg flex rounded-[0.8rem] mb-[1rem] ${pathName!=item.link && "bg-[#d8d8d8]"}  ${pathName===item.link && "bg-green-300 text-black"}`}>

<span className="sidebar_icon">
<Image src={item.icon} alt="" width={24} height={24} />
</span>
<span className="sidebar_name">
{item.name}
</span>
</Link>
)
}

export default SideLink