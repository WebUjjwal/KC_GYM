import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {


    const MENU_LINK = [
        {
            _id:786766,
            name: "Home",
            link:"/"
        },
        {
            _id:878777,
            name: "About us",
            link:"/about"
        },
        {
            _id:54546878,
            name: "Services",
            link:"/service"
        },
        {
            _id:433354567,
            name: "blog",
            link:"/blog"
        },
        {
            _id:87678886,
            name: "contact us",
            link:"/contact"
        },

    ]


    return (
        <>
            <div className="absolute top-0 left-0 right-0 w-full z-50 pt-5">
               <div className="container flex items-center justify-between">
                 <div className="w-fit">
                    <Link href='/'>
                        <Image src="logo.svg" alt="" height={50} width={150} />
                    </Link>
                </div>
                <div className="">
                    <ul className="flex items-center gap-10">
                        {MENU_LINK.map(({_id, name, link}) => {
                            return (
                                <>
                                    <li key={_id}>
                                        <h4 className="text-white font-bold capitalize lg:text-[18px]">
                                            <Link href={link}>{name}</Link>
                                        </h4>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                <div className="">
                    <Button btnLink='/contact' btnName="get started"  />
                </div>
               </div>
            </div>
        </>
    )
}



export default Navbar;
