import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import { DataProvider } from './DataContext';
import Dashboard from './Dashboard';
import AccountingTable from './AccountingTable';
import HelpDesk from './HelpDesk';

function App() {
    return (
        <DataProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/AccountingTable" element={<AccountingTable />} />
                        <Route path="/HelpDesk" element={<HelpDesk />} />
                    </Routes>
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;
