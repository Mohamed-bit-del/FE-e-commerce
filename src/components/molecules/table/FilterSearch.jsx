import React, { useState } from 'react';
import { Clock, ChevronDown, Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../../atoms/Button/Button';

const FilterSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Last day');
  const [search, setSearch] = useState('');

  const options = ['Last day', 'Last 7 days', 'Last 30 days', 'Last month', 'Last year'];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-1 bg-white border font-medium rounded-lg text-sm px-3 py-1.5"
        >
          <Clock size="15px" />
          {selected}
          <ChevronDown size="18px" />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm">
            <ul className="p-3 space-y-1 text-sm">
              {options.map((option, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="flex items-center p-2 rounded-sm cursor-pointer"
                    onClick={() => handleSelect(option)}
                  >
                    <input
                      id={`filter-radio-${index}`}
                      type="radio"
                      checked={selected === option}
                      onChange={() => handleSelect(option)}
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor={`filter-radio-${index}`}
                      className="w-full ms-2 text-sm font-medium"
                    >
                      {option}
                    </label>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link to="/admin/create-product">
        <Button variant="secondary" size="md" className="flex items-center gap-2">
          <Plus size="20px" />
          Create Item
        </Button>
      </Link>

      {/* Search Input */}
      <div className="relative">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
          <Search className="text-gray-500" />
        </div>
        <input
          type="text"
          id="table-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 outline-none"
          placeholder="Search for items"
        />
      </div>
    </div>
  );
};

export default FilterSearch;
