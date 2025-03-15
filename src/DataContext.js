import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [citizens, setCitizens] = useState([
        { id: 1, fullName: 'Иванов Иван Иванович', birthDate: '1990-01-01', email: 'ivanov@example.com', phone: '+7 (999) 111-22-33', city: 'Москва' },
        { id: 2, fullName: 'Петров Пётр Петрович', birthDate: '1985-05-15', email: 'petrov@example.com', phone: '+7 (999) 222-33-44', city: 'Санкт-Петербург' },
        { id: 3, fullName: 'Сидоров Сидор Сидорович', birthDate: '1992-10-30', email: 'sidorov@example.com', phone: '+7 (999) 333-44-55', city: 'Екатеринбург' },
        { id: 4, fullName: 'Кузнецов Алексей Викторович', birthDate: '1988-03-22', email: 'kuznetsov@example.com', phone: '+7 (999) 444-55-66', city: 'Казань' },
        { id: 5, fullName: 'Смирнова Анна Сергеевна', birthDate: '1995-07-12', email: 'smirnova@example.com', phone: '+7 (999) 555-66-77', city: 'Нижний Новгород' },
        { id: 6, fullName: 'Попов Дмитрий Александрович', birthDate: '1983-11-05', email: 'popov@example.com', phone: '+7 (999) 666-77-88', city: 'Челябинск' },
        { id: 7, fullName: 'Морозова Екатерина Владимировна', birthDate: '1991-02-18', email: 'morozova@example.com', phone: '+7 (999) 777-88-99', city: 'Ростов-на-Дону' },
        { id: 8, fullName: 'Фёдоров Сергей Николаевич', birthDate: '1980-09-25', email: 'fedorov@example.com', phone: '+7 (999) 888-99-00', city: 'Уфа' },
        { id: 9, fullName: 'Соловьёв Андрей Юрьевич', birthDate: '1987-04-14', email: 'solovyev@example.com', phone: '+7 (999) 999-00-11', city: 'Волгоград' },
        { id: 10, fullName: 'Васильева Ольга Петровна', birthDate: '1993-06-30', email: 'vasilieva@example.com', phone: '+7 (999) 101-12-13', city: 'Красноярск' },
        { id: 11, fullName: 'Ковалёв Игорь Васильевич', birthDate: '1986-12-20', email: 'kovalev@example.com', phone: '+7 (999) 202-13-14', city: 'Воронеж' },
        { id: 12, fullName: 'Лебедева Мария Алексеевна', birthDate: '1994-08-11', email: 'lebedeva@example.com', phone: '+7 (999) 303-14-15', city: 'Пермь' },
        { id: 13, fullName: 'Григорьев Николай Сергеевич', birthDate: '1989-01-29', email: 'grigoryev@example.com', phone: '+7 (999) 404-15-16', city: 'Тюмень' },
        { id: 14, fullName: 'Тихонов Артём Владимирович', birthDate: '1992-03-03', email: 'tikhonov@example.com', phone: '+7 (999) 505-16-17', city: 'Саратов' },
        { id: 15, fullName: 'Семенова Дарья Викторовна', birthDate: '1996-05-17', email: 'semenova@example.com', phone: '+7 (999) 606-17-18', city: 'Калуга' },
        { id: 16, fullName: 'Климов Роман Сергеевич', birthDate: '1984-10-10', email: 'klimov@example.com', phone: '+7 (999) 707-18-19', city: 'Тула' },
        { id: 17, fullName: 'Зайцева Светлана Николаевна', birthDate: '1990-02-22', email: 'zaitseva@example.com', phone: '+7 (999) 808-19-20', city: 'Ярославль' },
        { id: 18, fullName: 'Борисов Владислав Андреевич', birthDate: '1988-07-07', email: 'borisov@example.com', phone: '+7 (999) 909-20-21', city: 'Ижевск' },
        { id: 19, fullName: 'Костина Анастасия Сергеевна', birthDate: '1993-11-15', email: 'kostina@example.com', phone: '+7 (999) 101-21-22', city: 'Барнаул' },
        { id: 20, fullName: 'Сидорова Виктория Игоревна', birthDate: '1991-04-04', email: 'sidorova@example.com', phone: '+7 (999) 202-22-23', city: 'Сочи' },
    ]);

    return (
        <DataContext.Provider value={{ citizens, setCitizens }}>
            {children}
        </DataContext.Provider>
    );
};