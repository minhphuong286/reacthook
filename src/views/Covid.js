import './Covid.scss';
// import { useEffect, useState } from 'react';
import useFetch from '../customize/fetchApi';
import moment from 'moment';

const Covid = () => {
    const today = moment().startOf('day').toISOString(true);;
    const priorDate = moment().startOf('day').subtract(10, 'days').toISOString(true);

    const { data: dataCovid }
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true);
    return (

        <>
            {/* {console.log('data check:', dataCovid)} */}
            <p>Covid 19 tracking in Viet Nam</p>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;