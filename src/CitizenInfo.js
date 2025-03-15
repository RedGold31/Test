import React from 'react';

const CitizenInfo = ({ citizen }) => {
    if (!citizen) return null;

    return (
        <div className="citizen-info">
            <h2>Информация о гражданине</h2>
            <h3>{citizen.fullName}</h3>
            <p><strong>Дата рождения:</strong> {citizen.birthDate}</p>
            <p><strong>Email:</strong> {citizen.email}</p>
            <p><strong>Телефон:</strong> {citizen.phone}</p>
            <p><strong>Город:</strong> {citizen.city}</p>

            <h4>Члены семьи</h4>
            <ul>
                {/* Пример данных о членах семьи */}
                <li>Жена: Иванова Мария Петровна</li>
                <li>Сын: Иванов Алексей Иванович</li>
            </ul>

            <h4>Образование</h4>
            <ul>
                {/* Пример данных об образовании */}
                <li>Московский государственный университет, бакалавр</li>
                <li>Санкт-Петербургский государственный университет, магистр</li>
            </ul>
        </div>
    );
};

export default CitizenInfo;