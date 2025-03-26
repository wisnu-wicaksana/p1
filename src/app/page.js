import List from "../components/List";
import Header from "@/components/List/Header";
import { getApi } from "./Libs/ApiLips";

const page = async () => {
  const topAnime = await getApi ("top/anime","limit=10")
  return (
    <>
      <section>
      <Header title={"PALING POPULER"} linktitle={"lihat semua"} linkhref={"/populer"} /> 
      <List api = {topAnime}/>
      </section>

    </>
  );
};

export default page; 



