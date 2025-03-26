import { getApi } from "@/app/Libs/ApiLips";
import List from "@/components/List";
import Header from "@/components/List/Header";

const Page = async ({ params }) => {
    const keyword = params. keyword.replace(/%20/, " ");
    try {  
        const searchAnime = await getApi ("anime" , `q=${keyword}`)
        return (
            <section>
                <Header title={`Pencarian untuk "${keyword}"`} linktitle={"kembali"} linkhref={"/"}/>
                <List api={searchAnime} />
            </section>
        );
    } catch (error) {
        return <p className="text-red-500">Terjadi kesalahan saat mengambil data: {error.message}</p>;
    }
};

export default Page;
