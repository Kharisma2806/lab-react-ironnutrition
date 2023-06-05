import React, { useState } from 'react';
import { Input } from 'antd';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Input.Search
      value={searchTerm}
      placeholder="Search food..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

export default SearchBar;
