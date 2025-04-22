import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={css.searchBox}>
      <label className={css.label}>
        Сканувати сигнатури повстанців...
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={css.input}
          placeholder="Пошук...."
        />
      </label>
    </div>
  );
};

export default SearchBox;
