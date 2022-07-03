
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const useFetch = (url) => {
    let [data, setData] = useState([]);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url)
                let data = (res && res.data) ? res.data : []; // true, false
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                    data = data.reverse()
                }
                setData(data);
            }

            fetchData();
        }
        catch (e) {
            console.log('Error from fetchApi: ', e)
        }

    }, []);

    return {
        data
    }
}

export default useFetch;