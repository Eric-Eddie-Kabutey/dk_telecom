'use client';
import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Typography from '../shared/typography';
import { Button } from '../ui/button';

// Type definitions
interface Location {
  id: string;
  location: string;
  town: string;
  tele: string;
  lat: number;
  lng: number;
}

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations: Location[] = [
  {
    id: "1",
    location: "Sukuta Traffic Lights",
    town: "Isatou Jallow",
    tele: "+220-123-4567",
    lat: 13.4106,
    lng: -16.7080
  },
  {
    id: "2",
    location: "Kololi Casino",
    town: "Ramatoulie Jallow",
    tele: "+220-234-5678",
    lat: 13.4584,
    lng: -16.6914
  },
  {
    id: "3",
    location: "Tippa Garage",
    town: "Binta Jallow",
    tele: "+220-345-6789",
    lat: 13.4538,
    lng: -16.5780
  },
  {
    id: "4",
    location: "Fajara",
    town: "Momodou Jallow",
    tele: "+220-456-7890",
    lat: 13.4689,
    lng: -16.6910
  },
  {
    id: "5",
    location: "Kerr Serign",
    town: "Absa Kah",
    tele: "+220-567-8901",
    lat: 13.4567,
    lng: -16.6812
  },
  {
    id: "6",
    location: "Latrikunda",
    town: "Sainabou Jobe",
    tele: "+220-678-9012",
    lat: 13.3829,
    lng: -16.6803
  },
  {
    id: "7",
    location: "Bundung",
    town: "Hulaimatou Jallow",
    tele: "+220-789-0123",
    lat: 13.4098,
    lng: -16.6789
  },
  {
    id: "8",
    location: "Bakau Sanchaba",
    town: "Sira Jallow",
    tele: "+220-890-1234",
    lat: 13.4776,
    lng: -16.6820
  },
  {
    id: "9",
    location: "Mariama Kololi",
    town: "Hussainatou Jallow",
    tele: "+220-901-2345",
    lat: 13.4599,
    lng: -16.6890
  },
  {
    id: "10",
    location: "Kololi Gamtel",
    town: "Fatou Saidy",
    tele: "+220-012-3456",
    lat: 13.4605,
    lng: -16.6880
  },
];

const LocateBranchMain: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const mapRef = useRef<L.Map | null>(null);

  const filteredLocations = locations.filter(location =>
    location.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.town.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    if (mapRef.current) {
      mapRef.current.flyTo([location.lat, location.lng], 15);
    }
  };

  const handleGetDirections = (location: Location) => {
    window.open(`https://www.openstreetmap.org/directions?from=&to=${location.lat},${location.lng}`);
  };

  return (
    <div className='w-full py-12'>
      <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col md:flex-row justify-between md:gap-0 gap-6'>
        <div className='w-full md:w-[40%] px-5 flex flex-col'>
          <Typography typo="header-4-semibold"
            className='pb-4'
          >Locations</Typography>
          
          <div className='mb-4'>
            <input 
              placeholder='Search location...'
              className='w-full px-4 py-2 border border-gray-600 rounded-md outline-none focus:outline-none focus:ring-0'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className='h-[60vh] overflow-auto'>
            <div className='w-full h-fit flex flex-col'>
              {filteredLocations.map(data => (
                <div 
                  key={data.id} 
                  className={`w-full py-2 px-3 flex flex-col hover:bg-gray-100 border-b cursor-pointer ${selectedLocation?.id === data.id ? 'bg-blue-50' : ''}`}
                  onClick={() => handleLocationClick(data)}
                >
                  <Typography typo="header-6-medium" className='text-app-primary'>
                    {data.location}
                  </Typography>
                  <Typography typo="body-medium-medium" className='text-gray-600'>
                    {data.tele}
                  </Typography>
                  <Typography typo="body-medium-medium" className='text-gray-600'>
                    {data.town}
                  </Typography>
                  <div className='py-2'>
                    <Button
                      variant="primary"
                      className='w-fit text-base rounded-md'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetDirections(data);
                      }}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className='w-full md:flex-1 xl:h-[600px] sm:h-[500px] h-[400px]'>
          <MapContainer
            center={[13.4549, -16.5790]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {filteredLocations.map((location) => (
              <Marker 
                key={location.id} 
                position={[location.lat, location.lng]}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div className='p-2'>
                    <Typography typo="header-6-medium">{location.location}</Typography>
                    <Typography typo="body-medium-regular">{location.town}</Typography>
                    <Typography typo="body-medium-regular">{location.tele}</Typography>
                    <Button
                      variant="primary"
                      className='w-full mt-2 text-base rounded-md'
                      onClick={() => handleGetDirections(location)}
                    >
                      Get Directions
                    </Button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default LocateBranchMain;