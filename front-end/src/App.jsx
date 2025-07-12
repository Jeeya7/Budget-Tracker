import { useState, useEffect } from 'react';
import IncomePrompt from './components/IncomePrompt';

function App() {
    const [income, setIncome] = useState(null);
    useEffect(() => {
        const saved = localStorage.getItem('userIncome');
        if (saved) setIncome(Number(saved));
    }, []);

    const handleIncomeSubmit = (value) => {
        setIncome(value);
        localStorage.setItem('userIncome', value);
    };

    if (income === null) {
        // income not yet provided
        return <IncomePrompt onSubmit={handleIncomeSubmit} />;
    }

    return (
        <div className="center-screen">
        <h1>Budget Tracker</h1>
        <p>Your monthly income: ${income.toLocaleString()}</p>
        {/* rest of your app here */}
        </div>
    );
};

export default App;