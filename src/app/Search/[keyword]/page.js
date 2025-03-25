import List from "@/components/List";
import Header from "@/components/List/Header";

const Page = async ({ params }) => {
    const keyword = params.keyword.replace(/%20/g, " ");
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
        if (!response.ok) throw new Error("Gagal mengambil data"); 
        const searchAnime = await response.json();

        return (
            <section>
                <Header title={`Pencarian untuk "${keyword}"`} />
                <List api={searchAnime} />
            </section>
        );
    } catch (error) {
        return <p className="text-red-500">Terjadi kesalahan saat mengambil data: {error.message}</p>;
    }
};

export default Page;
