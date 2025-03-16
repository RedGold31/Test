import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { DataContext } from './DataContext';
import { FiUsers, FiDollarSign, FiMapPin } from 'react-icons/fi';

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
    
    const totalCitizens = citizens.length;
    const averageAge = citizens.reduce((acc, citizen) => {
      const years = new Date().getFullYear() - new Date(citizen.birthDate).getFullYear();
      return acc + years;
    }, 0) / totalCitizens;

    const averageIncome = citizens.reduce((acc, citizen) => acc + citizen.income, 0) / totalCitizens;

    const ageDistribution = citizens.map(citizen => {
        const years = new Date().getFullYear() - new Date(citizen.birthDate).getFullYear();
        return years;
      });

    return (
        <div>
            <h1>Панель информации</h1>
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
                <div className="metrics-grid">
                    <div className="metric-card">
                    <FiUsers size={30} />
                    <h3>Всего граждан:</h3>
                    <p>{totalCitizens}</p>
                </div>
                <div className="metric-card">
                    <FiDollarSign size={30} />
                    <h3>Средний доход:</h3>
                    <p>{averageIncome.toFixed(2)} ₽</p>
                </div>
                <div className="metric-card">
                    <FiMapPin size={30} />
                    <h3>Средний возраст:</h3>
                    <p>{averageAge.toFixed(1)} лет</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;