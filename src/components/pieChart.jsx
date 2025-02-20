import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = () => {

    const data = {
        labels: ['Pending Projects', 'Done Projects', 'New Projects'],
        datasets: [
            {
                data: [44.75, 46.27, 25],
                backgroundColor: [
                    'rgba(128,0,128,1)', // purple
                    'rgba(0,0,255,1)', // blue
                    'rgba(255,165,0,1)' // orange
                ],
                hoverBackgroundColor: [
                    'rgba(128,0,128,0.8)',
                    'rgba(0,0,255,0.8)',
                    'rgba(255,165,0,0.8)'
                ],
            },
        ],
    };

    const options = {
        cutout: '60%', 
        
        borderRadius: 7,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                borderWidth: 1,
                display: true,
                labels: {
                    boxWidth: 20,
                    usePointStyle: true,
                    font: {
                        size: 15, // Increase font size of label
                    },
                    padding: 20, // Add spacing between chart and label
                },
            },
        },
    };

    return (
            <div className="text-5xl flex flex-col  font-bold bg-white rounded-2xl p-4 h-100 w-full shadow-md xl:w-100">
                <div className='text-gray-700 text-lg mb-2'>
                    Monthly Target
                </div>
                <div className='flex-1'>
                    <Pie data={data} options={options}/>
                </div>
            </div>
    );
};

export default PieChart;