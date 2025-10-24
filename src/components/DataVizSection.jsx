import { useEffect, useState } from 'react';

export default function DataVizSection() {
  const [ChartComponent, setChartComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadChart = async () => {
      try {
        const { Chart as ChartJS, ArcElement, Tooltip, Legend } = await import('chart.js');
        const { Doughnut } = await import('react-chartjs-2');

        ChartJS.register(ArcElement, Tooltip, Legend);
        setChartComponent({ Doughnut });
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load chart:', error);
        setIsLoading(false);
      }
    };

    loadChart();
  }, []);

          const chartData = {
            labels: ['Politi/Bank-svindel', 'Hjemmehjelp', 'Håndverkere', 'Inspektører', 'Helsepersonell', 'Faktura-svindel'],
            datasets: [
              {
                data: [35, 20, 15, 12, 10, 8],
                backgroundColor: [
                  '#ef4444',
                  '#f59e0b', 
                  '#10b981',
                  '#8b5cf6',
                  '#06b6d4',
                  '#f97316'
                ],
                borderColor: [
                  '#dc2626',
                  '#d97706',
                  '#059669',
                  '#7c3aed',
                  '#0891b2',
                  '#ea580c'
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
          Basert på politirapporter fra 2023-2025 kan vi se at svindlerne bruker flere forskjellige metoder for å utnytte tillit til offentlige etater. 
          De fleste forsøkene retter seg mot eldre kvinner, og svindlerne kombinerer telefonbedrageri med fysiske besøk for å virke mer troverdig.
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
            <span><i className="fas fa-phone" style={{color: '#ef4444', marginRight: '8px'}}></i>Politi/Bank-svindel</span>
            <span style={{fontWeight: 'bold', color: '#ef4444'}}>35%</span>
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
            <span><i className="fas fa-home" style={{color: '#f59e0b', marginRight: '8px'}}></i>Hjemmehjelp</span>
            <span style={{fontWeight: 'bold', color: '#f59e0b'}}>20%</span>
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
            <span><i className="fas fa-hammer" style={{color: '#10b981', marginRight: '8px'}}></i>Håndverkere</span>
            <span style={{fontWeight: 'bold', color: '#10b981'}}>15%</span>
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
            <span><i className="fas fa-search" style={{color: '#8b5cf6', marginRight: '8px'}}></i>Inspektører</span>
            <span style={{fontWeight: 'bold', color: '#8b5cf6'}}>12%</span>
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
            <span><i className="fas fa-user-md" style={{color: '#06b6d4', marginRight: '8px'}}></i>Helsepersonell</span>
            <span style={{fontWeight: 'bold', color: '#06b6d4'}}>10%</span>
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
            <span><i className="fas fa-file-invoice" style={{color: '#f97316', marginRight: '8px'}}></i>Faktura-svindel</span>
            <span style={{fontWeight: 'bold', color: '#f97316'}}>8%</span>
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
          Tallene er basert på politirapporter og kommunale advarsler fra 2023-2025.
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
            {isLoading ? (
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-spinner fa-spin" style={{marginRight: '8px'}}></i>
                Laster graf...
              </div>
            ) : ChartComponent ? (
              <ChartComponent.Doughnut data={chartData} options={chartOptions} />
            ) : (
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                fontSize: '0.9rem',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div>
                  <i className="fas fa-exclamation-triangle" style={{fontSize: '2rem', color: '#f59e0b', marginBottom: '1rem'}}></i>
                  <p>Grafen kunne ikke lastes</p>
                  <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>
                    Sjekk internettforbindelsen din
                  </p>
                </div>
              </div>
            )}
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