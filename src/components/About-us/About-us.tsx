import { FunctionComponent } from "react";
import styles from "./About-us.module.css";
import React from "react";

const facts: FactsT = [
  {
    fact: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
  },
  {
    fact: "Был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их создателях, новости кино, интервью с актерами и другими знаменитостями, рецензии пользователей, расписание сеансов в кинотеатрах, ТВ-программу и другие разделы."
  },
  {
    fact: "Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время)."
  }
]

const FactElem: FunctionComponent<FactT> = ({fact}) => {
  return (
    <div>
      <span className={styles.content_text}>
        {fact}
      </span>
    </div>
  );
}

export const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title_text}>О нас</span>

      {facts.map((item, index) => {
        return <FactElem fact={item.fact} key={index}/>
      })}
    </div>
  )
}