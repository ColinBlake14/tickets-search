import { FunctionComponent } from "react";
import styles from "./Search-filter.module.css";


export const SearchFilter: FunctionComponent = () => {
  return (
    <div className={styles.filter_container}>
      <span className={styles.filter_title}>
        Фильтр поиска
      </span>

      <div className={styles.filter_group}>
        <div className={styles.input_container}>
          <span className={styles.input_title}>Название</span>

          <input type="text" placeholder="Введите название"/>
        </div>
      
        <div className={styles.input_container}>
          <span className={styles.input_title}>Жанр</span>

          <select name="jenre">
              <option value="default">Выберите жанр</option>
              <option value="lion">Lion</option>
              <option value="lion">Lion</option>
          </select>
        </div>
        

        <div className={styles.input_container}>
          <span className={styles.input_title}>Кинотеатр</span>

          <select name="cinema">
              <option value="default">Выберите кинотеатр</option>
              <option value="lion">Lion</option>
              <option value="lion">Lion</option>
          </select>
        </div>
      </div>
    </div>
  );
}
