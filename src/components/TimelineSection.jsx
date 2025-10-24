import { useEffect, useState } from 'react';

export default function TimelineSection() {
  const [ChartComponent, setChartComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadChart = async () => {
      try {
        const { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } = await import('chart.js');
        const { Line } = await import('react-chartjs-2');
        await import('chartjs-adapter-date-fns');

        ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);
        setChartComponent({ Line });
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load chart:', error);
        setIsLoading(false);
      }
    };

    loadChart();
  }, []);

  const timelineData = {
    labels: ['27. aug', '29. aug', '14. sep', '29. sep'],
    datasets: [
      {
        label: 'Antall svindelforsøk',
        data: [
          { x: '2024-08-27', y: 1 },
          { x: '2024-08-29', y: 2 },
          { x: '2024-09-14', y: 3 },
          { x: '2024-09-29', y: 4 }
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
            const dates = ['Oslo - 27. august', 'Fredrikstad - 29. august', 'Sarpsborg - 14. september', 'Halden - 29. september'];
            return dates[context[0].dataIndex];
          },
          label: function(context) {
            return `Antall registrerte forsøk: ${context.parsed.y}`;
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
        <h2>En svindel sprer seg som ild</h2>
        <p>
          Etter den første hendelsen i Oslo spredte metodene seg raskt til nabokommuner.  
          Innen to uker ble det registrert over tretti ulike forsøk – mange med identisk språk og logoer.  
          Politiet beskriver kampanjen som koordinert og profesjonell, med tydelige tegn på organisert kriminalitet.
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
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444'}}>27. august</div>
            </div>
            <div>
              <strong>Oslo – Første melding sendt ut</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                SMS-kampanje som etterlignet kommunens offisielle meldinger om energistøtte
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
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#f59e0b'}}>29. august</div>
            </div>
            <div>
              <strong>Fredrikstad – Lik SMS-variant oppdaget</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Identisk tekst og design, men med lokal kommunelogo og referanser
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
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981'}}>14. september</div>
            </div>
            <div>
              <strong>Sarpsborg – E-postkampanje</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Falske e-poster med «krisehjelp» som påskudd for å stjele personopplysninger
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
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#8b5cf6'}}>29. september</div>
            </div>
            <div>
              <strong>Halden – Angrep rettet mot eldre</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Svindlere utga seg for å være fra helsetjenesten og forsøkte å få tilgang til boliger
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
          <strong>Politiet beskriver kampanjen som koordinert og profesjonell.</strong>
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