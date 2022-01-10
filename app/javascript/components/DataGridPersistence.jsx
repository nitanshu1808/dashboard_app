import React, { useState } from 'react';

const DataGridPersistence = (storageKey) => {
  if (!storageKey) return {
    attributes: {},
    hideifyColumns: (columns) => columns
  };

  const [dirty, setDirty] = useState(false);

  const [sort, setSort] = useState(JSON.parse(localStorage.getItem(`${storageKey}-sort`)));
  const changeSort = (sort) => {
    setSort(sort);
    setDirty(true);
  }

  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem(`${storageKey}-filter`)));
  const changeFilter = (filter) => {
    setFilter(filter);
    setDirty(true);
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
    setDirty(true);
  }
  const hideifyColumns = (columns) => columns.map((column) => {
    column.hide = hidden[column.field];
    return column;
  });

  const save = () => {
    localStorage.setItem(`${storageKey}-sort`, JSON.stringify(sort));
    localStorage.setItem(`${storageKey}-filter`, JSON.stringify(filter));
    localStorage.setItem(`${storageKey}-hidden`, JSON.stringify(hidden));
    setDirty(false);
  }

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
    hideifyColumns,
    dirty,
    save
  };
}

export default DataGridPersistence;
