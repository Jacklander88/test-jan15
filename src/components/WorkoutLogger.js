import React, { useState } from 'react';

const WorkoutLogger = ({ onAddWorkout }) => {
  const [workout, setWorkout] = useState({
    exercise: '',
    sets: '',
    reps: '',
    duration: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workout.exercise && (workout.sets || workout.duration)) {
      onAddWorkout({
        ...workout,
        id: Date.now(),
        sets: parseInt(workout.sets) || 0,
        reps: parseInt(workout.reps) || 0,
        duration: parseInt(workout.duration) || 0
      });
      setWorkout({
        exercise: '',
        sets: '',
        reps: '',
        duration: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  return (
    <div className="card">
      <h2>💪 Workout Logger</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Exercise (e.g., Push-ups, Running)"
            value={workout.exercise}
            onChange={(e) => setWorkout({ ...workout, exercise: e.target.value })}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            placeholder="Sets"
            value={workout.sets}
            onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
            min="0"
          />
          <input
            type="number"
            placeholder="Reps"
            value={workout.reps}
            onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
            min="0"
          />
          <input
            type="number"
            placeholder="Duration (min)"
            value={workout.duration}
            onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
            min="0"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={workout.date}
            onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Log Workout</button>
      </form>
    </div>
  );
};

export default WorkoutLogger;
