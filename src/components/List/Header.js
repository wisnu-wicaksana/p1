import Link from "next/link"
const Header = ({taitel, lnktaitel , linkhref }) => {
    return (
        <div className="flex justify-between text-sm p-2 m-2 md:text-xl font-bold items-center">
        <h1>{taitel}</h1>
        <Link href={linkhref} >{lnktaitel}</Link>
        </div>
    )
}
export default Header 