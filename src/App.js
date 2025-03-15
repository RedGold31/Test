import React from 'react';
import { DataProvider } from './DataContext';
import Dashboard from './Dashboard';
import AccountingTable from './AccountingTable';
import HelpDesk from './HelpDesk';

function App() {
    return (
        <DataProvider>
            <div className="App">
                <Dashboard />
                <AccountingTable />
                <HelpDesk />
            </div>
        </DataProvider>
    );
}

export default App;
