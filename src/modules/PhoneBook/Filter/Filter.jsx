import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

import css from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.formGroup}>
      <label className={css.label}>Find contacts by name</label>
      <input
        name="filter"
        onChange={handleChange}
        value={filter}
        className={css.input}
        placeholder="enter name"
      />
    </div>
  );
};

export default Filter;
