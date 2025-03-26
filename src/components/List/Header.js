import Link from "next/link";
const Header = ({ title, linktitle, linkhref }) => {
  return (
    <div className="flex justify-between text-sm p-2 m-2 md:text-xl font-bold items-center">
      <h1>{title}</h1>
      {linkhref && linktitle ? (
        <Link
          href={linkhref}
          className="text-blue-500 hover:text-blue-700 font-semibold underline">
          {linktitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
