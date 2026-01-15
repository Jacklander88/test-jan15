import React, { useState } from 'react';

const CalorieTracker = ({ onAddMeal }) => {
  const [meal, setMeal] = useState({
    name: '',
    calories: '',
    type: 'breakfast',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (meal.name && meal.calories) {
      onAddMeal({
        ...meal,
        calories: parseInt(meal.calories),
        id: Date.now()
      });
      setMeal({
        name: '',
        calories: '',
        type: 'breakfast',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <div className="card">
      <h2>🍎 Calorie Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Meal name"
            value={meal.name}
            onChange={(e) => setMeal({ ...meal, name: e.target.value })}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            placeholder="Calories"
            value={meal.calories}
            onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
            min="0"
            required
          />
          <select
            value={meal.type}
            onChange={(e) => setMeal({ ...meal, type: e.target.value })}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            value={meal.date}
            onChange={(e) => setMeal({ ...meal, date: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Log Meal</button>
      </form>
    </div>
  );
};

export default CalorieTracker;
