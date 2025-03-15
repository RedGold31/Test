import React, { useContext } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from './DataContext';

const Dashboard = () => {
    const { citizens } = useContext(DataContext);

    const cityData = citizens.reduce((acc, citizen) => {
        acc[citizen.city] = (acc[citizen.city] || 0) + 1;
        return acc;
    }, {});

    const pieData = Object.keys(cityData).map((city) => ({
        name: city,
        value: cityData[city],
    }));
    
    return (
        <div>
            <h1>Панель управления</h1>
            <h2>Распределение сотрудников по городам</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`hsl(${index * 60}, 70%, 50%)`} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;