import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { DataContext } from './DataContext';
import { FiUsers, FiDollarSign, FiActivity } from 'react-icons/fi';


const Legend = ({ pieData }) => {
    const total = pieData.reduce((acc, entry) => acc + entry.value, 0);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3>Легенда:</h3>
        {pieData.map((entry, index) => {
          const color = `hsl(${index * 60}, 70%, 50%)`;
          const percentage = (entry.value / total) * 100;
  
          return (
            <table class="glass-table-dashboard">        
             <tbody>
                     <tr key={`legend-${index}`}>
                         <td style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: color,
                            borderRadius: '2px',
                            }}></td>
                         <td>{entry.name}</td>
                         <td>Количество: {entry.value}</td>
                         <td>Доля: {(percentage).toFixed(2)}%</td>
                     </tr>
             </tbody>
         </table>
          );
        })}
      </div>
    );
  };

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


    return (
        <div>
            <h1>Панель информации</h1>
            <div class="metric-card-dashboard">
            <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
      <div style={{ width: '48%', height: '50%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(${index * 60}, 70%, 50%)`}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
        <Legend pieData={pieData} />
    </div>
            </div>
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
                        <FiActivity size={30} />
                        <h3>Средний возраст:</h3>
                        <p>{averageAge.toFixed(1)} лет</p>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;