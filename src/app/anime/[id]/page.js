import Image from "next/image";
import { getApi } from "@/app/Libs/ApiLips";
import VideoPlayer from "@/components/utilities/VideoPlayer";

const Page = async ({ params: { id } }) => {
    const { data: anime } = await getApi(`anime/${id}`, "");

    return (
        <div className="flex flex-col items-center p-6 max-w-5xl mx-auto space-y-8 lg:space-y-12">
            {/* Judul */}
            <h1 className="text-4xl font-extrabold text-center lg:text-5xl">{anime.title}</h1>

            {/* Gambar dengan Next.js Image Optimization */}
            <div className="relative w-full max-w-3xl h-[450px] lg:h-[550px]">
                <Image 
                    src={anime.images.jpg.image_url} 
                    alt={anime.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg shadow-lg" 
                    priority
                />
            </div>

            {/* Informasi Tambahan */}
            <div className="w-full space-y-4 text-center text-lg">
                <p className="font-semibold">English: {anime.title_english}</p>
                <p className="font-semibold">Japanese: {anime.title_japanese}</p>
                <p>Episodes: {anime.episodes} | Type: {anime.type} | Score: {anime.score}</p>
                <p>Rank: #{anime.rank} | Popularity: #{anime.popularity}</p>
                <p>Members: {anime.members} | Favorites: {anime.favorites}</p>
                <p>Rating: {anime.rating}</p>
                <p>Aired: {anime.aired.string}</p>
                <p>Broadcast: {anime.broadcast.string}</p>
            </div>

            {/* Genre */}
            <div className="flex flex-wrap justify-center gap-3 text-lg">
                {anime.genres.map((genre) => (
                    <span key={genre.mal_id} className="border px-4 py-2 rounded-lg shadow-sm">
                        {genre.name}
                    </span>
                ))}
            </div>

            {/* Informasi Studio, Produser, dan Lisensor */}
            <div className="w-full text-lg text-center space-y-4 border-t pt-6">
                <p><strong>Producers:</strong> {anime.producers.map(p => p.name).join(", ")}</p>
                <p><strong>Studios:</strong> {anime.studios.map(s => s.name).join(", ")}</p>
                <p><strong>Licensors:</strong> {anime.licensors.map(l => l.name).join(", ")}</p>
            </div>

            {/* Tema dan Demografi */}
            <div className="w-full text-lg text-center space-y-4 border-t pt-6">
                <p><strong>Themes:</strong> {anime.themes.map(t => t.name).join(", ")}</p>
                <p><strong>Demographics:</strong> {anime.demographics.map(d => d.name).join(", ")}</p>
            </div>

            {/* Sinopsis */}
            <div className="text-justify leading-relaxed border-t pt-6 max-w-4xl">
                <h2 className="text-3xl font-bold mb-3">Synopsis</h2>
                <p className="text-lg">{anime.synopsis}</p>
            </div>

            {/* Latar Belakang */}
            {anime.background && (
                <div className="text-justify leading-relaxed border-t pt-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-3">Background</h2>
                    <p className="text-lg">{anime.background}</p>
                </div>
            )}

            {/* Video Player */}
            <VideoPlayer YoutubeId={anime.trailer.youtube_id} />
        </div>
    );
};

export default Page;
