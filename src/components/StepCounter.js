import React, { useState } from 'react';

const StepCounter = ({ onAddSteps }) => {
  const [steps, setSteps] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (steps) {
      onAddSteps({
        steps: parseInt(steps),
        date: date,
        id: Date.now()
      });
      setSteps('');
    }
  };

  return (
    <div className="card">
      <h2>🚶 Daily Steps</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            placeholder="Steps taken today"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Log Steps</button>
      </form>
      <div className="goal-indicator">
        <p>Daily Goal: 10,000 steps</p>
      </div>
    </div>
  );
};

export default StepCounter;
