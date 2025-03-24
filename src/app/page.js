import List from "../components/List";
import Header from "@/components/List/Header";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const topAnime = await response.json();
  
  return (
    <>
      <section>
      <Header taitel={"PALING POPULER"} lnktaitel={"lihat semua"} linkhref={"/populer"} /> 
      <List api = {topAnime}/>
      </section>

    </>
  );
};

export default Home; 



