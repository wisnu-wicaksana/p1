"use client";

import List from "@/components/List";
import HeaderMenu from "@/components/utilities/HeadrMenu";
import Pagination from "@/components/utilities/Pagination";
import { useState, useEffect, useCallback } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [TopAnime, setTopAnime] = useState([]);

  const FacingData = useCallback(async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}` );
    const data = await response.json();
    setTopAnime(data);
  }, [page]); 
  useEffect(() => {
    FacingData();
  }, [FacingData]); 

  return (
    <>
      <section >

        <HeaderMenu title={`SEMUA YANG PALING POPULER #${page}` }/>
        <List api={TopAnime} />
        <Pagination page={page} LastPage={TopAnime?.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </> 
  );
};

export default Page;
