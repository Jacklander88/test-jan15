import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressCharts = ({ workouts, steps, meals }) => {
  const aggregateDataByDate = () => {
    const dataMap = {};

    workouts.forEach(workout => {
      if (!dataMap[workout.date]) {
        dataMap[workout.date] = { date: workout.date, workouts: 0, steps: 0, calories: 0 };
      }
      dataMap[workout.date].workouts += 1;
    });

    steps.forEach(step => {
      if (!dataMap[step.date]) {
        dataMap[step.date] = { date: step.date, workouts: 0, steps: 0, calories: 0 };
      }
      dataMap[step.date].steps += step.steps;
    });

    meals.forEach(meal => {
      if (!dataMap[meal.date]) {
        dataMap[meal.date] = { date: meal.date, workouts: 0, steps: 0, calories: 0 };
      }
      dataMap[meal.date].calories += meal.calories;
    });

    return Object.values(dataMap).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const chartData = aggregateDataByDate();

  if (chartData.length === 0) {
    return (
      <div className="card">
        <h2>📊 Progress Charts</h2>
        <p className="empty-state">Start logging your activities to see progress charts!</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>📊 Progress Charts</h2>

      <div className="chart-container">
        <h3>Daily Steps</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="steps" stroke="#8884d8" name="Steps" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>Daily Calories</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#82ca9d" name="Calories" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>Workout Frequency</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="workouts" fill="#ffc658" name="Workouts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressCharts;
