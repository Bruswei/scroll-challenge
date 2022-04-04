import Section from './components/Section/Section.js';
import './App.css';

function App() {
  
  const numberOfSections = 100;
  const sections = [];

  for(let i = 0; i < numberOfSections-1; i++) {
    sections.push(<Section score={i} ></Section>)
  }

  return (
    <div className="App">
    {
      sections
    }
    </div>
  );
}

export default App;
