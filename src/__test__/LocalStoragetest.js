import { list } from './__mocks__/state';

import { useLocalStorage } from '../../hooks'
import { LOCAL_STORAGE_KEY } from '../../helpers/constant'

const [ links, setLink ] = useLocalStorage(LOCAL_STORAGE_KEY,'')


describe('state was changed correctly', () => {

  test('added links', () => {
    let link = {
      id: "_6hipx00i8",
      name: "hepsiorada",
      link: "hepsiorada.com",
      vote: 3
    }
    setLink(link)
    expect(links.length).toBe(3)
  })

  test('updated Item', () => {
    let updatedLink = {
      id: "_6hipx00i8",
      name: "hepsiorada",
      link: "hepsiorada.com",
      vote: 10
    }
    setLink(updatedLink)
    expect(list.find(item => item.id === '_6hipx00i8').vote).toBe(10)
  })
})