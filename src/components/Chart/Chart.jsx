import React,{ useState,useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = () =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

    const LineChart = (
        dailyData.length
            ? (
                <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(225,0,0)',
                        fill: true,
                    }],
                }}
                />
            ) : null
        
    )
    return (
        <div className={StyleSheet.container}>
            {LineChart}
        </div>
    );
};

export default Chart;