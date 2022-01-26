import React from 'react';

const FoodSearch = ({ inputSearch, callbackSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search food"
        value={inputSearch}
        onChange={(e) => callbackSearch(e.target.value)} />
    </>
  )
};

export default FoodSearch;
