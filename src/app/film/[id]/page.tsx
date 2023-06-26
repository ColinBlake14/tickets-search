import { FilmPage } from "@/components/Film-page/Film-page";

export default function Page({ params }: { params: { id: string } }) {
  return <FilmPage filmId={params.id}/>
}
