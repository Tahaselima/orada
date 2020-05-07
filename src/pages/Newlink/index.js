import React from 'react';
import { GoBack, NewlinkForm } from '../../containers'
import useLocalStorage from '../../hooks/useLocalStorage'

export function Newlink() {
  // eslint-disable-next-line no-unused-vars
  const [links, setLink] = useLocalStorage('LINK_LIST','');

  return (
    <div>
      <GoBack />
      <NewlinkForm onSubmit={ (value) => setLink([value])} links={links} />
    </div>
  );
}

export default Newlink;
