import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/selectors';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="filter">Search Kin by Name or Holocomm</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
        placeholder="Enter name or holocomm..."
      />
    </div>
  );
}

export default SearchBox;
