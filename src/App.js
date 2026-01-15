import React, { useState, useEffect } from 'react';
import WorkoutLogger from './components/WorkoutLogger';
import StepCounter from './components/StepCounter';
import CalorieTracker from './components/CalorieTracker';
import ProgressCharts from './components/ProgressCharts';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts');
    return saved ? JSON.parse(saved) : [];
  });

  const [steps, setSteps] = useState(() => {
    const saved = localStorage.getItem('steps');
    return saved ? JSON.parse(saved) : [];
  });

  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem('meals');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('steps', JSON.stringify(steps));
  }, [steps]);

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const handleAddSteps = (stepEntry) => {
    setSteps([...steps, stepEntry]);
  };

  const handleAddMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  const getTodayStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const todaySteps = steps.filter(s => s.date === today).reduce((sum, s) => sum + s.steps, 0);
    const todayCalories = meals.filter(m => m.date === today).reduce((sum, m) => sum + m.calories, 0);
    const todayWorkouts = workouts.filter(w => w.date === today).length;

    return { todaySteps, todayCalories, todayWorkouts };
  };

  const stats = getTodayStats();

  return (
    <div className="App">
      <header className="app-header">
        <h1>🏋️ Fitness Tracker</h1>
        <p>Track your workouts, steps, and nutrition</p>
      </header>

      <div className="stats-summary">
        <div className="stat-card">
          <h3>Today's Workouts</h3>
          <p className="stat-value">{stats.todayWorkouts}</p>
        </div>
        <div className="stat-card">
          <h3>Today's Steps</h3>
          <p className="stat-value">{stats.todaySteps.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Today's Calories</h3>
          <p className="stat-value">{stats.todayCalories.toLocaleString()}</p>
        </div>
      </div>

      <div className="app-container">
        <div className="input-section">
          <WorkoutLogger onAddWorkout={handleAddWorkout} />
          <StepCounter onAddSteps={handleAddSteps} />
          <CalorieTracker onAddMeal={handleAddMeal} />
        </div>

        <div className="charts-section">
          <ProgressCharts workouts={workouts} steps={steps} meals={meals} />
        </div>

        {(workouts.length > 0 || steps.length > 0 || meals.length > 0) && (
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {[...workouts.slice(-5).reverse().map(w => ({
                type: 'workout',
                data: w,
                display: `${w.exercise} - ${w.sets ? `${w.sets} sets` : ''} ${w.reps ? `${w.reps} reps` : ''} ${w.duration ? `${w.duration} min` : ''}`,
                date: w.date
              })),
              ...steps.slice(-5).reverse().map(s => ({
                type: 'steps',
                data: s,
                display: `${s.steps.toLocaleString()} steps`,
                date: s.date
              })),
              ...meals.slice(-5).reverse().map(m => ({
                type: 'meal',
                data: m,
                display: `${m.name} - ${m.calories} cal (${m.type})`,
                date: m.date
              }))]
              .sort((a, b) => b.data.id - a.data.id)
              .slice(0, 10)
              .map((activity, index) => (
                <div key={index} className="activity-item">
                  <span className="activity-icon">
                    {activity.type === 'workout' ? '💪' : activity.type === 'steps' ? '🚶' : '🍎'}
                  </span>
                  <span className="activity-text">{activity.display}</span>
                  <span className="activity-date">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
