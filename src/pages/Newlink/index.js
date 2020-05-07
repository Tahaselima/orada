import React from 'react';
import { GoBack, NewlinkForm } from '../../containers'
import { LOCAL_STORAGE_KEY } from '../../helpers/constant'

import { useLocalStorage } from '../../hooks'

export function Newlink() {
  const [links, setLink] = useLocalStorage(LOCAL_STORAGE_KEY,'');

  return (
    <div>
      <GoBack />
      <NewlinkForm onSubmit={ (value) => setLink([value])} links={links} />
    </div>
  );
}

export default Newlink;
