import { useEffect, useState } from 'react';

export default function MapSection() {
  const [MapComponent, setMapComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        // Fix for default markers in React Leaflet
        delete L.default.Icon.Default.prototype._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setMapComponent({ MapContainer, TileLayer, Marker, Popup });
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load map:', error);
        setIsLoading(false);
      }
    };

    loadMap();
  }, []);

  const scamLocations = [
    {
      id: 1,
      name: 'Oslo',
      position: [59.9139, 10.7522],
      date: '27. august',
      description: 'Falske SMS-er om «energistøtte» fra «Oslo kommune»',
      type: 'SMS-kampanje'
    },
    {
      id: 2,
      name: 'Sarpsborg',
      position: [59.2833, 11.1167],
      date: '14. september',
      description: 'E-post om «krisehjelp» med kommunelogo',
      type: 'E-post'
    },
    {
      id: 3,
      name: 'Fredrikstad',
      position: [59.2167, 10.9500],
      date: '29. september',
      description: 'Falsk søknadsside for strømstøtte med BankID-login',
      type: 'Falsk nettside'
    },
    {
      id: 4,
      name: 'Halden',
      position: [59.1167, 11.3833],
      date: '29. september',
      description: 'Fysiske svindlere utga seg for å være fra helsetjenesten',
      type: 'Fysisk besøk'
    }
  ];

  return (
    <section className='scene'>
      <div className='left'>
        <h2>Angrepene startet lokalt</h2>
        <p>
          På få dager ble det meldt om både digitale og fysiske svindelforsøk i flere kommuner 
          i Østlandsområdet. Svindlerne brukte lokale referanser og kommunespesifikke detaljer 
          for å virke troverdig. Kartet viser hvor hendelsene ble rapportert og spredningen av metodene.
        </p>
        <ul>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Oslo – 27. august:</strong> Falske SMS-er om «energistøtte» fra «Oslo kommune»</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Sarpsborg – 14. september:</strong> E-post om «krisehjelp» med kommunelogo</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Fredrikstad – 29. september:</strong> Falsk søknadsside for strømstøtte med BankID-login</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Halden – 29. september:</strong> Fysiske svindlere utga seg for å være fra helsetjenesten</li>
        </ul>
        <p style={{fontSize: '0.9rem', color: '#888', marginTop: '1rem', fontStyle: 'italic'}}>
          <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
          Data basert på rapporter fra kommuner og politiet, høst 2024
        </p>
        <p style={{fontSize: '0.9rem', color: '#888', marginTop: '1rem'}}>
          <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
          Kartdata fra Infowiz-visualisering
        </p>
      </div>
      <div className='right sticky'>
        <div className='card' style={{padding: '0', overflow: 'hidden'}}>
          <div style={{
            padding: '1.5rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px 20px 0 0'
          }}>
            <h3 style={{marginBottom: '0.5rem', color: '#e0e0e0', fontSize: '1.1rem'}}>
              <i className="fas fa-map-marked-alt" style={{marginRight: '8px', color: '#ef4444'}}></i>
              Interaktivt kart
            </h3>
            <p style={{fontSize: '0.8rem', color: '#888', margin: 0}}>
              Klikk på markørene for å se detaljer om hver hendelse
            </p>
          </div>
          
          <div style={{
            height: '400px',
            width: '100%',
            background: 'rgba(255,255,255,0.02)'
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
                Laster kart...
              </div>
            ) : MapComponent ? (
              <MapComponent.MapContainer
                center={[59.4, 11.0]}
                zoom={8}
                style={{ height: '100%', width: '100%' }}
                className="map-container"
              >
                <MapComponent.TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                {scamLocations.map((location) => (
                  <MapComponent.Marker key={location.id} position={location.position}>
                    <MapComponent.Popup>
                      <div style={{color: '#333', minWidth: '200px'}}>
                        <h4 style={{margin: '0 0 0.5rem 0', color: '#ef4444'}}>
                          {location.name}
                        </h4>
                        <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem', fontWeight: 'bold'}}>
                          {location.date}
                        </p>
                        <p style={{margin: '0 0 0.5rem 0', fontSize: '0.85rem'}}>
                          {location.description}
                        </p>
                        <div style={{
                          padding: '0.3rem 0.6rem',
                          background: '#ef4444',
                          color: 'white',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          display: 'inline-block'
                        }}>
                          {location.type}
                        </div>
                      </div>
                    </MapComponent.Popup>
                  </MapComponent.Marker>
                ))}
              </MapComponent.MapContainer>
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
                  <p>Kartet kunne ikke lastes</p>
                  <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>
                    Sjekk internettforbindelsen din
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div style={{
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '0 0 20px 20px',
            fontSize: '0.8rem',
            color: '#888',
            textAlign: 'center'
          }}>
            <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
            Data basert på rapporter fra kommuner og politiet, høst 2024
          </div>
        </div>
      </div>
    </section>
  );
}