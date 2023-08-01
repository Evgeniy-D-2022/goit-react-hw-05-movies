import { useState } from "react";
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar=({ setParams }) => {
  const [query, setQuery] = useState('')

  const onChangeInput = e => {
    setQuery(e.target.value.trim().toLowerCase());
  }

  const handleSubmit = e => {
    e.preventDefault();
    setParams(query);
  }

    return (
      <header className={css.searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.SearchForm_button}>
      <FaSearch size={25}/>
    </button>

    <input
      className={css.SearchForm_input}
      type="text"
      name='search'
      value={query}
      onChange={onChangeInput}
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
    />
  </form>
</header>

    )
  };

export default SearchBar;

SearchBar.propType = {
  onSubmit: PropTypes.func,
};
