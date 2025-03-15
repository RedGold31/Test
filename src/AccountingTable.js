import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const AccountingTable = () => {
    const { citizens } = useContext(DataContext);

    return (
        <div>
            <h1>Учётные записи</h1>
            <table>
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Дата рождения</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Город</th>
                    </tr>
                </thead>
                <tbody>
                    {citizens.map((item) => (
                        <tr key={item.id}>
                            <td>{item.fullName}</td>
                            <td>{item.birthDate}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountingTable; 