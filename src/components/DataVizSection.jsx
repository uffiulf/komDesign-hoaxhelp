import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DataVizSection() {
  const chartData = {
    labels: ['Falsk energistøtte', 'Helse- og omsorg', 'BankID-tyveri', 'Andre metoder'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          '#ef4444',
          '#f59e0b', 
          '#10b981',
          '#8b5cf6'
        ],
        borderColor: [
          '#dc2626',
          '#d97706',
          '#059669',
          '#7c3aed'
        ],
        borderWidth: 2,
        hoverOffset: 10
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#a0a0a0',
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#06b6d4',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Slik ble folk forsøkt lurt</h2>
        <p>
          De fleste forsøkene etterlignet tjenester fra kommune eller NAV.  
          Svindlerne utnytter folks ønske om å få hjelp i vanskelige tider, spesielt med energikostnader og økonomisk støtte.  
          Tallene er hentet fra Nasjonal sikkerhetsmyndighet (NSM) og politiet, september 2024.
        </p>
        
        <div style={{marginTop: '2rem'}}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-bolt" style={{color: '#ef4444', marginRight: '8px'}}></i>Falsk energistøtte</span>
            <span style={{fontWeight: 'bold', color: '#ef4444'}}>40%</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-heartbeat" style={{color: '#f59e0b', marginRight: '8px'}}></i>Helse- og omsorg</span>
            <span style={{fontWeight: 'bold', color: '#f59e0b'}}>25%</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-id-card" style={{color: '#10b981', marginRight: '8px'}}></i>BankID-tyveri</span>
            <span style={{fontWeight: 'bold', color: '#10b981'}}>20%</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-ellipsis-h" style={{color: '#8b5cf6', marginRight: '8px'}}></i>Andre metoder</span>
            <span style={{fontWeight: 'bold', color: '#8b5cf6'}}>15%</span>
          </div>
        </div>

        <p style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          fontSize: '0.9rem',
          color: '#888',
          fontStyle: 'italic'
        }}>
          <i className="fas fa-chart-bar" style={{marginRight: '5px'}}></i>
          Tallene er hentet fra Nasjonal sikkerhetsmyndighets oversikt (NSM, september 2024).
        </p>
      </div>
      <div className='right sticky'>
        <div className='card'>
          <div style={{marginBottom: '1rem'}}>
            <i className="fas fa-chart-pie" style={{fontSize: '3rem', color: '#06b6d4'}}></i>
          </div>
          <h3 style={{marginBottom: '1rem', color: '#e0e0e0'}}>Svindel-fordeling</h3>
          
          <div style={{
            height: '300px',
            width: '100%',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '12px',
            padding: '1rem'
          }}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
          
          <div style={{
            padding: '1rem',
            background: 'rgba(6, 182, 212, 0.1)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: '#a0a0a0',
            border: '1px solid rgba(6, 182, 212, 0.2)'
          }}>
            <i className="fas fa-chart-bar" style={{marginRight: '5px', color: '#06b6d4'}}></i>
            Hover over sektorene for å se detaljerte tall
          </div>
        </div>
      </div>
    </section>
  );
}