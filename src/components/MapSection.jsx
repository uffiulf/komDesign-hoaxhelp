import { useEffect, useState } from 'react';

export default function MapSection() {
  const [MapComponent, setMapComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const reactLeaflet = await import('react-leaflet');
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        // Fix for default markers in React Leaflet
        delete L.default.Icon.Default.prototype._getIconUrl;
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setMapComponent({
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup
        });
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
      name: 'Drammen',
      position: [59.7440, 10.2045],
      date: '21. feb 2025',
      description: 'Falsk hjemmehjelper stjal kontanter og smykker fra 80-årig kvinne',
      type: 'Hjemmehjelp-svindel',
      belop: 'Kontanter og smykker'
    },
    {
      id: 2,
      name: 'Drøbak',
      position: [59.6639, 10.6306],
      date: '19. jun 2025',
      description: 'Falske håndverkere lurte ektepar for 32 millioner kroner',
      type: 'Håndverker-svindel',
      belop: '32 millioner kroner'
    },
    {
      id: 3,
      name: 'Hamar',
      position: [60.7945, 11.0680],
      date: 'aug 2024',
      description: '«Olga-svindel»: Falske politi ringte og sendte patruljer',
      type: 'Politi-svindel',
      belop: 'Ukjent'
    },
    {
      id: 4,
      name: 'Fredrikstad',
      position: [59.2167, 10.9500],
      date: '8. des 2023',
      description: 'Kombinert telefon- og besøksmetode for BankID-tyveri',
      type: 'BankID-svindel',
      belop: 'BankID-informasjon'
    },
    {
      id: 5,
      name: 'Bjørkelangen',
      position: [59.8833, 11.5667],
      date: 'jan 2023',
      description: 'Falsk el-inspektør fra «Lillestrøm elverk»',
      type: 'Inspektør-svindel',
      belop: 'Ingen tap'
    },
    {
      id: 6,
      name: 'Risør',
      position: [58.7206, 9.2342],
      date: '31. okt 2024',
      description: 'Falske kommunale fakturaer med feil kontonummer',
      type: 'Faktura-svindel',
      belop: 'Ukjent'
    }
  ];

  return (
    <section className='scene'>
      <div className='left'>
        <h2>Svindelen sprer seg over hele Norge</h2>
        <p>
          Fra januar 2023 til februar 2025 har politiet registrert svindelsaker i hele Norge, med konsentrasjon i Østfold, Viken og Oslo-området. 
          Svindlerne har utviklet nye metoder som kombinerer telefonbedrageri med fysiske besøk, og de fleste ofre er eldre kvinner.
        </p>
        <ul>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Drammen – 21. feb 2025:</strong> Falsk hjemmehjelper stjal kontanter og smykker fra 80-årig kvinne</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Drøbak – 19. jun 2025:</strong> Falske håndverkere lurte ektepar for 32 millioner kroner</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Hamar – aug 2024:</strong> «Olga-svindel» med falske politi som sendte patruljer</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Fredrikstad – 8. des 2023:</strong> Ny metode med kombinert telefon- og besøksmetode</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Bjørkelangen – jan 2023:</strong> Falsk el-inspektør fra «Lillestrøm elverk»</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Risør – 31. okt 2024:</strong> Falske kommunale fakturaer med feil kontonummer</li>
        </ul>
        <p style={{fontSize: '0.9rem', color: '#888', marginTop: '1rem', fontStyle: 'italic'}}>
          <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
          Data basert på politirapporter og kommunale advarsler, 2023-2025
        </p>
      </div>
      <div className='right sticky'>
        <div className="map-embed" role="region" aria-label="Interaktivt kart over rapporterte svindelhendelser">
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
              center={[59.5, 10.5]}
              zoom={7}
              style={{ height: '500px', width: '100%' }}
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
                        display: 'inline-block',
                        marginBottom: '0.5rem'
                      }}>
                        {location.type}
                      </div>
                      <p style={{margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#666'}}>
                        <strong>Tap:</strong> {location.belop}
                      </p>
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
        <p className="caption">Kilde: Kommunale varsler og NSM. Noen hendelser er digitale, andre fysiske.</p>
      </div>
    </section>
  );
}
