"use client"

import { SearchFilter } from "@/components/Search-filter/Search-filter";
import { Roboto } from 'next/font/google';
import { FilmsList } from "@/components/Films-list/Films-list";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export default function Page() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <SearchFilter/>
      <FilmsList/>
    </>
  );
}
