import { useState } from "react";

  function useSorted(initData) {
        const [sortType, setSortType] = useState();
        const [sortedList, setData] = useState(initData);

        function sortedData(data, val) {
            setData(val === '' || val === undefined 
                ? data ? data.sort((a,b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime()) : data
                : data.sort(( a,b ) => {
                    if(a.votes > b.votes) return val === 'asc' ? -1 : +1
                    else if(a.votes < b.votes) return val === 'asc' ? +1 : -1
                    else if(a.votes === b.votes) return new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime();
                    else return 0
            }))
        }

        function setType (data, val) {
            setSortType(val)
            sortedData(data, val)
        }

        return { sortedList, sortType, setType };
    }

 export default useSorted;