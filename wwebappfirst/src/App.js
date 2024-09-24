import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empy the dishwasher" />
      <Task title="Laundry" deadline="Tomorrow" description="Take the clothes off the line" />
      <Task title="Tidy" deadline="Today" description="Sweep the hallway" />

    </div>
  );
}

export default App;
