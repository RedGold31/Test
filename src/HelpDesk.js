import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import CitizenInfo from './CitizenInfo';

const HelpDesk = () => {
    const { citizens } = useContext(DataContext);
    const [filter, setFilter] = useState('');
    const [requests, setRequests] = useState([
        { id: 1, citizenId: 1, request: 'Запрос на получение справки', status: 'В обработке' },
        { id: 2, citizenId: 2, request: 'Жалоба на качество услуг', status: 'Закрыто' },
        { id: 3, citizenId: 3, request: 'Запрос на консультацию', status: 'В обработке' },
        { id: 4, citizenId: 4, request: 'Запрос на изменение данных', status: 'Ожидание' },
        { id: 5, citizenId: 5, request: 'Запрос на получение информации', status: 'Закрыто' },
    ]);
    const [editingRequest, setEditingRequest] = useState(null);
    const [newRequest, setNewRequest] = useState({ citizenId: '', request: '', status: 'В обработке' });
    const [selectedCitizen, setSelectedCitizen] = useState(null);

    // Фильтрация граждан по имени
    const filteredCitizens = citizens.filter(citizen => 
        citizen.fullName.toLowerCase().includes(filter.toLowerCase())
    );

    const handleAddOrUpdateRequest = () => {
        if (editingRequest) {
            setRequests(requests.map(req => req.id === editingRequest.id ? { ...req, ...newRequest } : req));
            setEditingRequest(null);
        } else {
            setRequests([...requests, { id: requests.length + 1, ...newRequest }]);
        }
        setNewRequest({ citizenId: '', request: '', status: 'В обработке' });
    };

    const handleEditRequest = (request) => {
        setEditingRequest(request);
        setNewRequest({ citizenId: request.citizenId, request: request.request, status: request.status });
    };

    const handleDeleteRequest = (id) => {
        setRequests(requests.filter(req => req.id !== id));
    };

    return (
        <div>
            <h1>Картотека заявок</h1>
            <input
                type="text"
                placeholder="Фильтр по ФИО"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <h2>Всего граждан: {filteredCitizens.length}</h2>

            <h2>{editingRequest ? 'Редактировать заявку' : 'Добавить заявку'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddOrUpdateRequest(); }}>
                <select
                    value={newRequest.citizenId}
                    onChange={(e) => {
                        const selectedId = e.target.value;
                        setNewRequest({ ...newRequest, citizenId: selectedId });
                        setSelectedCitizen(citizens.find(c => c.id === parseInt(selectedId)));
                    }}
                    required
                >
                    <option value="">Выберите гражданина</option>
                    {citizens.map(citizen => (
                        <option key={citizen.id} value={citizen.id}>{citizen.fullName}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Запрос"
                    value={newRequest.request}
                    onChange={(e) => setNewRequest({ ...newRequest, request: e.target.value })}
                    required
                />
                <button type="submit">{editingRequest ? 'Обновить' : 'Добавить'}</button>
                {editingRequest && <button onClick={() => setEditingRequest(null)}>Отменить</button>}
            </form>

            <CitizenInfo citizen={selectedCitizen} />

            <table class="glass-table">
                <thead>
                    <tr>
                        <th>ID Заявки</th>
                        <th>ФИО Гражданина</th>
                        <th>Запрос</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => {
                        const citizen = filteredCitizens.find(c => c.id === request.citizenId);
                        return (
                            citizen && (
                                <tr key={request.id}>
                                    <td>{request.id}</td>
                                    <td>{citizen.fullName}</td>
                                    <td>{request.request}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        <button onClick={() => handleEditRequest(request)}>Редактировать</button>
                                        <button onClick={() => handleDeleteRequest(request.id)}>Удалить</button>
                                    </td>
                                </tr>
                            )
                        );
                    })}
                </tbody>
            </table>


        </div>
    );
};

export default HelpDesk;