"use client"

import { FunctionComponent } from "react";
import styles from "./Q-and-A.module.css";
import React from "react";

const qAndAData: QandADataArrT = [
  {
    q: "Что такое Билетопоиск?",
    a: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
  },
  {
    q: "Какой компании принадлежит Билетопоиск?",
    a: "Не Яндексу, но это не точно."
  },
  {
    q: "Как купить билет на Билетопоиск?",
    a: "Никак, этот сайт никогда не попадет в прод."
  },
  {
    q: "Как оставить отзыв на Билетопоиск?",
    a: "А смысл?"
  }
]

const QandA: FunctionComponent<QandAT> = ({q, a}) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <button onClick={() => {setIsActive(!isActive)}} className={styles.q_button}>
      <div className={styles.text_q_and_a_container}>
        <span className={styles.q_text_container}>
          {q}
        </span>
        {isActive && <span className={styles.answer_text}>{a}</span>}
      </div>

      <div className={styles.arrow_container}>
        {isActive ?
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 1.66658L12 1.66658C4.75999 1.66658 1.66666 4.75992 1.66666 11.9999L1.66666 19.9999C1.66666 27.2399 4.75999 30.3333 12 30.3333L20 30.3333C27.24 30.3333 30.3333 27.2399 30.3333 19.9999L30.3333 11.9999C30.3333 4.75992 27.24 1.66658 20 1.66658ZM28.3333 19.9999C28.3333 26.1466 26.1467 28.3333 20 28.3333L12 28.3333C5.85333 28.3333 3.66666 26.1466 3.66666 19.9999L3.66666 11.9999C3.66666 5.85325 5.85333 3.66658 12 3.66658L20 3.66658C26.1467 3.66658 28.3333 5.85325 28.3333 11.9999L28.3333 19.9999ZM16.7067 12.4132C16.5067 12.2132 16.2533 12.1199 16 12.1199C15.7467 12.1199 15.4933 12.2132 15.2933 12.4132L10.5867 17.1199C10.2 17.5066 10.2 18.1466 10.5867 18.5332C10.9733 18.9199 11.6133 18.9199 12 18.5332L16 14.5332L20 18.5332C20.3867 18.9199 21.0267 18.9199 21.4133 18.5332C21.8 18.1466 21.8 17.5066 21.4133 17.1199L16.7067 12.4132Z" fill="#333333"/>
          </svg>
          :
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 30.3334H20C27.24 30.3334 30.3333 27.2401 30.3333 20.0001V12.0001C30.3333 4.76008 27.24 1.66675 20 1.66675H12C4.76001 1.66675 1.66667 4.76008 1.66667 12.0001V20.0001C1.66667 27.2401 4.76001 30.3334 12 30.3334ZM3.66667 12.0001C3.66667 5.85341 5.85334 3.66675 12 3.66675H20C26.1467 3.66675 28.3333 5.85341 28.3333 12.0001V20.0001C28.3333 26.1467 26.1467 28.3334 20 28.3334H12C5.85334 28.3334 3.66667 26.1467 3.66667 20.0001V12.0001ZM15.2933 19.5868C15.4933 19.7868 15.7467 19.8801 16 19.8801C16.2533 19.8801 16.5067 19.7868 16.7067 19.5868L21.4133 14.8801C21.8 14.4934 21.8 13.8534 21.4133 13.4668C21.0267 13.0801 20.3867 13.0801 20 13.4668L16 17.4668L12 13.4668C11.6133 13.0801 10.9733 13.0801 10.5867 13.4668C10.2 13.8534 10.2 14.4934 10.5867 14.8801L15.2933 19.5868Z" fill="#333333"/>
          </svg>
        }
      </div>      
    </button>
  );
}

export const QandASet: FunctionComponent = () => {
  return (
    <div>
      <div className={styles.title}>
        <span className={styles.title_text}>Вопросы-ответы</span>
      </div>
      <div className={styles.q_and_a_container}>
        {qAndAData.map(item => {
          return <QandA q = {item.q} a = {item.a} key={item.q}/>
        })}
      </div>
    </div>
  )
}
