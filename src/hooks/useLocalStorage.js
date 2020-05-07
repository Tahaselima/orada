import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            let item = JSON.parse(localStorage.getItem(key));
            let ls = item ? [...item, ...valueToStore] : valueToStore
            window.localStorage.setItem(key, JSON.stringify(ls));
        } catch (error) {
            console.log(error);
        }
    };

    const deleteValue = value => {
        try {
            let item = JSON.parse(localStorage.getItem(key));
            let deleteItemIndex = item.findIndex(l => l.id === value.id)
            item.splice(deleteItemIndex, 1)
            setStoredValue(item);
            window.localStorage.setItem(key, JSON.stringify(item));
        } catch (error) {
            console.log(error);
        }
    };

    const voteUpValue = value => {
        try {
            let items = JSON.parse(localStorage.getItem(key));
            items.find(l => l.id === value.id).votes += 1
            items.find(l => l.id === value.id).updatedDate = new Date()
            setStoredValue(items);
            window.localStorage.setItem(key, JSON.stringify(items));
        } catch (error) {
            console.log(error);
        }
    };

    const voteDownValue = value => {
        try {
            let items = JSON.parse(localStorage.getItem(key));
            items.find(l => l.id === value.id).votes -= 1
            items.find(l => l.id === value.id).updatedDate = new Date()
            setStoredValue(items);
            window.localStorage.setItem(key, JSON.stringify(items));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue, deleteValue, voteUpValue, voteDownValue];
}