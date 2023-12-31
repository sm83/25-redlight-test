import { useAppSelector, useAppDispatch } from '../../hooks';
import styles from './Search.module.css';
// import SearchAllBtn from './SearchAllBtn/SearchAllBtn';
import { SearchIcon } from './SearchIcon';

import SearchAreaBtn from './SearchAreaBtn/SearchAreaBtn';
import {
  setListModeAll,
  setListModeSelected,
  updateSearchField,
} from '../../store/sessionSlice';
// import { addToSelected } from '../../store/sessionSlice';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Search = () => {
  const searchParams = useParams();

  const navigate = useNavigate();

  console.log(searchParams);

  useEffect(() => {
    const searchValueFull = searchParams?.['*'] || '';
    const searchValue = searchValueFull.split('/')?.[1];

    if (searchValue) {
      dispatch(updateSearchField(searchValue));
    }
  }, []);

  const dispatch = useAppDispatch();

  const handleAllSet = () => {
    dispatch(setListModeAll());
  };

  const handleSelectedSet = () => {
    dispatch(setListModeSelected());
  };

  // const [searchField, setSearchField] = useState('');

  const handleSearchInput = (e: any) => {
    // setSearchField(e.target.value);
    dispatch(updateSearchField(e.target.value));
    navigate(`/search/${e.target.value}`);
  };

  const mode = useAppSelector((state) => state.session.postsDisplayMode);

  const searchField = useAppSelector((state) => state.session.searchField);

  return (
    <div className={styles.searchCompArea}>
      <div className={styles.searchBar}>
        <SearchIcon />
        <input
          className={styles.searchField}
          placeholder="Search by operation or DeFi company name"
          type="text"
          value={searchField}
          onChange={(e) => handleSearchInput(e)}
        ></input>
      </div>
      <SearchAreaBtn btnText="all" active={!mode} action={handleAllSet} />
      <SearchAreaBtn
        btnText="selected"
        active={mode}
        action={handleSelectedSet}
      />

      {/* <SearchAllBtn mode={mode} /> */}
    </div>
  );
};

export default Search;
