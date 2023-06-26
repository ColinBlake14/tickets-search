'use client'

import styles from "./Film-page.module.css";
import React, { FunctionComponent, useEffect } from "react";
import { useGetMovieQuery } from "@/redux/services/movieApi";
import { ButtonGroup } from "../Buttons-group/Buttons-group";
import { localeGenre } from "@/utils/locale-genre";
import { Comments } from "./Comments/Comments";
import { LoadingFiller } from "../Loading-filler/Loading-filler";

const AboutDouble: FunctionComponent<{title: string, info: string | number}> = ({title, info}) => {
  return (
    <div className={styles.about_double}>
      <span className={styles.about_double_left}>
        {title}
      </span>
      <span className={styles.about_double_right}>
        {info}
      </span>
    </div>
  );
}

const Movie: FunctionComponent<{movieId: string}> = ({movieId}) => {
  const {data, isLoading, error} = useGetMovieQuery(movieId);

  if (isLoading) {
    return <LoadingFiller loadingText={"Loading..."}/>
  }

  if (!data || error) {
    return <LoadingFiller loadingText={"NotFound"}/>
  }

  return (
    <div className={styles.film_container}>
      <img src={data.posterUrl} alt={data.title} className={styles.card_img}/>

      <div className={styles.about_container}>
        <div className={styles.about_top}>
          <div className={styles.title_container}>
            <span className={styles.about_title}>
              {data.title}
            </span>

            <ButtonGroup {...{
              title: data.title,
              posterUrl: data.posterUrl,
              genre: data.genre,
              id: data.id,
            }}/>
          </div>

          <div className={styles.about_top_mini}>
            <AboutDouble title="Жанр:" info={localeGenre(data.genre)}/>
            <AboutDouble title="Год выпуска:" info={data.releaseYear}/>
            <AboutDouble title="Рейтинг:" info={data.rating}/>
            <AboutDouble title="Режиссер:" info={data.director}/>
          </div>
        </div>
        
        <div className={styles.about_bot}>
          <span className={styles.about_bot_title}>
            Описание
          </span>

          <span className={styles.about_bot_text}>
            {data.description}
          </span>
        </div>
          
      </div>
    </div>
  );
}

export const FilmPage: FunctionComponent<{ filmId: string }> = ({ filmId }) => {
  return (
    <div className={styles.film_and_comments_container}>
      <Movie movieId={filmId}/>

      <Comments movieId={filmId}/>
    </div>
  )
}
