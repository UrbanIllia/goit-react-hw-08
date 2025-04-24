import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.scanModule}>
      <label className={css.scanLabel}>
        Сканувати сигнатури повстанців...
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={css.scanInput}
          placeholder="Пошук...."
        />
      </label>
    </div>
  );
};

export default SearchBox;
