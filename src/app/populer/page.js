import List from "@/components/List";
import Header from "@/components/List/Header";

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const topAnime = await response.json();
  
  return (
    <>
      <section>
      <Header title={"SEMUA YANG PALING POPULER"} linktitle={"kembali"} linkhref={"/"} /> 
      <List api = {topAnime}/>
      </section>

    </>
  );
};

export default page; 
