import React, { useEffect } from 'react';

import { usePagination, useLocalStorage, useSorted } from '../../hooks'

import { sortOptions, LOCAL_STORAGE_KEY } from '../../helpers/constant'
import { GoNew, Links, Pagination, SelectBox } from '../../containers'

export function Linklist() {
  // eslint-disable-next-line no-unused-vars
  const [ links, setLink, deleteLink, voteUpLink, voteDownLink ] = useLocalStorage(LOCAL_STORAGE_KEY,'')
  const { sortedList, sortType, setType } = useSorted(links);
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(sortedList, 5);

  useEffect(() => {
    setType(links, sortType);    
  }, [links, setType, sortType]);

  return (
    <div>
      <GoNew/>
      <SelectBox 
        setType={(e) => setType(links, e)}
        sortOptions={sortOptions}
      />
      <Links 
        links={currentData()} 
        deleteAction={ (data) => deleteLink(data)}
        voteUp={ (data) => voteUpLink(data)}
        voteDown={ (data) => voteDownLink(data)}
      />
      <Pagination 
        next={() => next()} 
        prev={() => prev()} 
        jump={(value) => jump(value)} 
        currentPage={currentPage} 
        maxPage={maxPage}
      />
    </div>
  );
}

export default Linklist;
