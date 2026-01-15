# Fitness Tracker Demo

A simple and intuitive React-based fitness tracking application that helps you monitor your workouts, daily steps, calorie intake, and visualize your progress over time.

## Features

- **Workout Logger**: Track exercises with sets, reps, and duration
- **Step Counter**: Log daily steps with a 10,000 step goal
- **Calorie Tracker**: Record meals and track calorie intake
- **Progress Charts**: Visualize your fitness data with interactive charts
- **Recent Activity**: View your latest logged activities
- **Local Storage**: All data is saved in your browser

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## How to Use

### Logging a Workout
1. Enter the exercise name (e.g., "Push-ups", "Running")
2. Add sets, reps, or duration
3. Select the date
4. Click "Log Workout"

### Tracking Steps
1. Enter the number of steps taken
2. Select the date
3. Click "Log Steps"

### Recording Meals
1. Enter the meal name
2. Add calorie count
3. Select meal type (Breakfast, Lunch, Dinner, Snack)
4. Select the date
5. Click "Log Meal"

### Viewing Progress
- The dashboard displays today's summary stats
- Scroll down to view interactive charts showing trends over time
- Check "Recent Activity" for your latest 10 entries

## Technology Stack

- React 18
- Recharts (for data visualization)
- Local Storage (for data persistence)
- CSS3 (with responsive design)

## Project Structure

```
fitness-tracker-demo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── WorkoutLogger.js
│   │   ├── StepCounter.js
│   │   ├── CalorieTracker.js
│   │   └── ProgressCharts.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Features in Detail

### Data Persistence
All your fitness data is automatically saved to your browser's local storage, so you won't lose your progress when you close the app.

### Responsive Design
The app is fully responsive and works on desktop, tablet, and mobile devices.

### Visual Progress Tracking
Three interactive charts show:
- Daily step count trends
- Calorie intake patterns
- Workout frequency over time

## Future Enhancements

Potential features to add:
- User authentication
- Cloud data sync
- Weekly/monthly reports
- Custom fitness goals
- Export data to CSV
- Exercise library with images
- BMI calculator
- Water intake tracker

## License

This is a demo project for educational purposes.

## Contributing

Feel free to fork this project and add your own features!
