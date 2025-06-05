import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <div className="input-group" style={{ maxWidth: 400 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search events by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-label="Search events by name"
        />
        <span className="input-group-text bg-white border-start-0">
          {/* Bootstrap icon or Unicode magnifier */}
          <span role="img" aria-label="search" style={{ fontSize: '1.2rem', color: '#4f709c' }}>&#128269;</span>
        </span>
      </div>
    </div>
  );
}

export default SearchBar; 