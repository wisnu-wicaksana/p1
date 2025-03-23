import List from "./components/List";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const anime = await response.json();

  return (
    <>
      <div>
        <h1>PALING POPULER</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-5">
          {anime.data.map(data => (
            <div key={data.mal_id} className="shadow-xl">
              <List title={data.title} image={data.images.webp.image_url} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
