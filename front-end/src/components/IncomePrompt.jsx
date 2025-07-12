import { useState } from 'react';

export default function IncomePrompt({ onSubmit }) {
    const [income, setIncome] = useState('');
    const [error, setError] = useState('');

    const handleChange = e => {
        const val = e.target.value;
        // Allow only numbers and at most two decimals
        if (/^\d*\.?\d{0,2}$/.test(val)) {
            setIncome(val);
            setError('');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const num = parseFloat(income);
        if (isNan(num) || num <= 0) {
            setError('Please enter a valid positive number.');
        }
        else {
            onSubmit(num);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2rem auto' }}>
            <label htmlFor="income">What is your monthly income?</label>
            <input
                id="income"
                type="text"
                value={income}
                onChange={handleChange}
                placeholder="Enter your income."
                style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
            {error && (<p style={{ color: 'red' }}>{error}</p>)}
            <button type="submit" style={{ marginTop: '1rem' }}>
                Submit
            </button>
        </form>
    );
            
};