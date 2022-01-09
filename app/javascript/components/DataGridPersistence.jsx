import React, { useState } from 'react';

const DataGridPersistence = (storageKey) => {
  if (!storageKey) return {
    attributes: {},
    hideifyColumns: (columns) => columns
  };

  const [sort, setSort] = useState(JSON.parse(localStorage.getItem(`${storageKey}-sort`)));
  const changeSort = (sort) => {
    setSort(sort);
    localStorage.setItem(`${storageKey}-sort`, JSON.stringify(sort));
  }

  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem(`${storageKey}-filter`)));
  const changeFilter = (filter) => {
    setFilter(filter);
    localStorage.setItem(`${storageKey}-filter`, JSON.stringify(filter));
  }

  const [hidden, setHidden] = useState(JSON.parse(localStorage.getItem(`${storageKey}-hidden`)) || {});
  const changeHidden = (column) => {
    const updated = { ...hidden };
    if (column.isVisible) {
      delete updated[column.field];
    } else {
      updated[column.field] = true;
    }
    setHidden(updated);
    localStorage.setItem(`${storageKey}-hidden`, JSON.stringify(updated));
  }
  const hideifyColumns = (columns) => columns.map((column) => {
    column.hide = hidden[column.field];
    return column;
  });

  const attributes = {
    ...(sort && {
      sortModel: sort
    }),
    ...(filter && {
      filterModel: filter
    }),
    onSortModelChange: changeSort,
    onFilterModelChange: changeFilter,
    onColumnVisibilityChange: changeHidden
  };

  return {
    attributes,
    hideifyColumns
  };
}

export default DataGridPersistence;
