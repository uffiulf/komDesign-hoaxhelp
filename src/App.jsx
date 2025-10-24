import './styles/globals.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import TimelineSection from './components/TimelineSection';
import DataVizSection from './components/DataVizSection';
import SafetySection from './components/SafetySection';

export default function App(){
  useScrollAnimation();
  return (
    <main className='story-container'>
      <Hero/>
      <MapSection/>
      <TimelineSection/>
      <DataVizSection/>
      <SafetySection/>
    </main>
  );
}