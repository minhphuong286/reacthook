
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const useFetch = (url, isCovidCpn) => {
    let [data, setData] = useState([]);
    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step   
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                let data = (res && res.data) ? res.data : []; // true, false
                if (data && data.length > 0 && isCovidCpn === true) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                    data = data.reverse()
                }
                setData(data); // Warning React don't update
            }
            catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    console.log('Error from fetchApi (fetchData()): ', e.message)
                }

            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000);
        return (() => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        })
    }, [url]);

    return {
        data
    }
}

export default useFetch;