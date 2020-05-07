import React from 'react';
import usePagination from '../../hooks/usePagination'
import useLocalStorage from '../../hooks/useLocalStorage'
import { GoNew, Links, Pagination } from '../../containers'


export function Linklist() {
  // eslint-disable-next-line no-unused-vars
  const [links, setLink, deleteLink] = useLocalStorage('LINK_LIST','');
  const {next, prev, jump, currentData, currentPage, maxPage} = usePagination(links, 5);

  const deleteAction = (data) => {
    deleteLink(data)
  }

  return (
    <div>
      <GoNew/>
      <Links links={currentData()} deleteAction={ (data) => deleteAction(data)}/>
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
