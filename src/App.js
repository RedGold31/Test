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
                <div>
                <Navbar />
                    <div class="main-route">
                        <Routes>
                            <Route path="/" element={<HelpDesk />} />
                            <Route path="/AccountingTable" element={<AccountingTable />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;
