import { useEffect, useState } from 'react';

export default function TimelineSection() {
  const [ChartComponent, setChartComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadChart = async () => {
      try {
        await import('chart.js/auto');
        const reactChartjs2 = await import('react-chartjs-2');
        await import('chartjs-adapter-date-fns');

        setChartComponent({ Line: reactChartjs2.Line });
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load chart:', error);
        setIsLoading(false);
      }
    };

    loadChart();
  }, []);

  const timelineData = {
    labels: ['jan 2023', 'des 2023', 'aug 2024', 'okt 2024', 'jun 2025', 'feb 2025'],
    datasets: [
      {
        label: 'Antall registrerte saker',
        data: [
          { x: '2023-01-01', y: 1 },
          { x: '2023-12-08', y: 2 },
          { x: '2024-08-01', y: 3 },
          { x: '2024-10-31', y: 4 },
          { x: '2025-06-19', y: 5 },
          { x: '2025-02-21', y: 6 }
        ],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 8,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#8b5cf6',
        borderWidth: 1,
        callbacks: {
          title: function(context) {
            const dates = ['Bjørkelangen - jan 2023', 'Fredrikstad - des 2023', 'Hamar - aug 2024', 'Risør - okt 2024', 'Drøbak - jun 2025', 'Drammen - feb 2025'];
            return dates[context[0].dataIndex];
          },
          label: function(context) {
            return `Antall registrerte saker: ${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'dd. MMM'
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#a0a0a0'
        }
      },
      y: {
        beginAtZero: true,
        max: 5,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#a0a0a0',
          stepSize: 1
        }
      }
    }
  };

  return (
    <section className='scene'>
      <div className='left'>
        <h2>Svindelen utvikler seg over tid</h2>
        <p>
          Fra januar 2023 til februar 2025 har politiet registrert en eskalering i svindelmetodene. 
          Det som startet som enkle telefonbedragerier har utviklet seg til sofistikerte operasjoner 
          som kombinerer telefon, falske dokumenter og fysiske besøk. De fleste ofre er eldre kvinner.
        </p>
        
        <div style={{marginTop: '2rem'}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #ef4444'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444'}}>jan 2023</div>
            </div>
            <div>
              <strong>Bjørkelangen – Falsk el-inspektør</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Mann utga seg for å være fra «Lillestrøm elverk» og prøvde å få betaling for tilsyn
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #f59e0b'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#f59e0b'}}>des 2023</div>
            </div>
            <div>
              <strong>Fredrikstad – Ny kombinasjonsmetode</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Politiet registrerte at svindlere ikke bare ringer, men også dukker opp fysisk
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #10b981'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981'}}>aug 2024</div>
            </div>
            <div>
              <strong>Hamar – «Olga-svindel»</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Falske politi ringte og sendte «patruljer» for å hente bankkort og koder
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#8b5cf6'}}>jun 2025</div>
            </div>
            <div>
              <strong>Drøbak – 32 millioner kroner</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Falske håndverkere lurte ektepar for 32 millioner kroner med investeringssvindel
              </p>
            </div>
          </div>
        </div>

        <p style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          fontSize: '0.95rem',
          color: '#e0e0e0'
        }}>
          <i className="fas fa-exclamation-triangle" style={{marginRight: '8px', color: '#ef4444'}}></i>
          <strong>Politiet advarer om at svindelmetodene blir stadig mer sofistikerte.</strong>
        </p>
      </div>
      <div className='right sticky'>
        <div className='card'>
          <div style={{marginBottom: '1rem'}}>
            <i className="fas fa-clock" style={{fontSize: '3rem', color: '#8b5cf6'}}></i>
          </div>
          <h3 style={{marginBottom: '1rem', color: '#e0e0e0'}}>Tidslinje-visualisering</h3>
          <p style={{fontSize: '0.9rem', color: '#a0a0a0', marginBottom: '1rem'}}>
            Interaktiv tidslinje som viser spredningen av svindelen
          </p>
          
          <div style={{
            height: '300px',
            width: '100%',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1rem'
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
                Laster tidslinje...
              </div>
            ) : ChartComponent ? (
              <ChartComponent.Line data={timelineData} options={options} />
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
                  <p>Tidslinjen kunne ikke lastes</p>
                  <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>
                    Sjekk internettforbindelsen din
                  </p>
                </div>
              </div>
            )}
          </div>

          <div style={{
            padding: '1rem',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: '#a0a0a0',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            <i className="fas fa-chart-line" style={{marginRight: '5px', color: '#8b5cf6'}}></i>
            Hover over punktene for å se detaljer om hver hendelse
          </div>
        </div>
      </div>
    </section>
  );
}