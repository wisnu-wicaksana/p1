import List from "@/components/List";
import Header from "@/components/List/Header";

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const topAnime = await response.json();
  
  return (
    <>
      <section>
      <Header taitel={"SEMUA YANG PALING POPULER"} lnktaitel={"lihat semua"} linkhref={"/populer"} /> 
      <List api = {topAnime}/>
      </section>

    </>
  );
};

export default page; 
