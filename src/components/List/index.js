import Image from "next/image";
import Link from "next/link";

const List = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
      {api.data.map((anime) => {
        return (
          <div key={anime.mal_id} className="card shadow-xl m-2 p-2">
            <Link href={`/${anime.mal_id}`} className="cursor-pointer">
              <Image src={anime.images.webp.image_url} alt={anime.title} width={350} height={350} className="" />
              <h3 className="font-bold text-sm p-2 md:text-xl">{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;

