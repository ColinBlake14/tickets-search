"use client";

import { FunctionComponent, useState } from "react";
import styles from "./Films-list.module.css";
import React from "react";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { ButtonGroup } from "../Buttons-group/Buttons-group";
import { localeGenre } from "@/utils/locale-genre";
import Link from "next/link";
import { LoadingFiller } from "../Loading-filler/Loading-filler";
import { usePathname } from "next/navigation";
import { Modal } from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/features/cart";

export const FilmCard: FunctionComponent<MovieCutI> = (movieData) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function handleOpenModal() {
    setVisible(true);
  };

  function handleCloseModal () {
    setVisible(false);
  };

  return (
    <div className={styles.card_container}>
      <img src={movieData.posterUrl} alt={movieData.title} className={styles.card_img}/>

      <div className={styles.right_container}>
        <div className={styles.card_title}>
          <Link href={`/film/${movieData.id}`}>
            <span className={styles.title}>{movieData.title}</span>
          </Link>
          
          <span className={styles.text}>{localeGenre(movieData.genre)}</span>
        </div>
        
        <ButtonGroup {...movieData}/>

        {pathname === "/cart" && 
          <div className={styles.close_icon} onClick={() => handleOpenModal()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0673 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0673 16.0673C16.0092 16.1254 15.9403 16.1714 15.8644 16.2028C15.7885 16.2343 15.7072 16.2505 15.6251 16.2505C15.543 16.2505 15.4617 16.2343 15.3858 16.2028C15.3099 16.1714 15.241 16.1254 15.1829 16.0673L10.0001 10.8837L4.81729 16.0673C4.70002 16.1846 4.54096 16.2505 4.3751 16.2505C4.20925 16.2505 4.05019 16.1846 3.93292 16.0673C3.81564 15.95 3.74976 15.791 3.74976 15.6251C3.74976 15.4593 3.81564 15.3002 3.93292 15.1829L9.11651 10.0001L3.93292 4.81729C3.81564 4.70002 3.74976 4.54096 3.74976 4.3751C3.74976 4.20925 3.81564 4.05019 3.93292 3.93292C4.05019 3.81564 4.20925 3.74976 4.3751 3.74976C4.54096 3.74976 4.70002 3.81564 4.81729 3.93292L10.0001 9.11651L15.1829 3.93292C15.3002 3.81564 15.4593 3.74976 15.6251 3.74976C15.791 3.74976 15.95 3.81564 16.0673 3.93292C16.1846 4.05019 16.2505 4.20925 16.2505 4.3751C16.2505 4.54096 16.1846 4.70002 16.0673 4.81729L10.8837 10.0001L16.0673 15.1829Z" fill="#333333"/>
            </svg>
          </div>
        }
        
        {visible && (
          <Modal header="Удаление билета" onClose={handleCloseModal}>
            <div className={styles.modal_content_container}>
              <span className={styles.modal_text}>
                Вы уверены, что хотите удалить билет?
              </span>

              <div className={styles.button_group}>
                <button className={styles.button_orange} onClick={() => dispatch(cartActions.remove(movieData.id))}>
                  <span className={styles.button_orange_text}>
                    Да
                  </span>
                </button>

                <button className={styles.button_white}>
                  <span className={styles.button_white_text} onClick={() => handleCloseModal()}>
                    Нет
                  </span>
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export const FilmsList: FunctionComponent = () => {
  const {data, isLoading, error} = useGetMoviesQuery('');
  
  if (isLoading) {
    return <LoadingFiller loadingText={"Loading..."}/>
  }

  if (!data || error) {
    return <LoadingFiller loadingText={"NotFound"}/>
  }

  return (
    <div className={styles.film_cards_container}>
      {data.map((film) => {
        const filmData: MovieCutI = {
          title: film.title,
          posterUrl: film.posterUrl,
          genre: film.genre,
          id: film.id,
        }

        return <FilmCard {...filmData} key={film.id}/>;
      })}
    </div>
  )
}
