'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import L from 'leaflet';
import { houses } from '@/lib/data';

// Fix default icon
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function createIcon() {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width:36px;height:42px;position:relative;cursor:pointer;
      ">
        <svg viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 1C9.716 1 3 7.716 3 16c0 11.25 15 25 15 25s15-13.75 15-25c0-8.284-6.716-15-15-15z" fill="#1C3829" stroke="#D4C4A8" stroke-width="1"/>
          <circle cx="18" cy="16" r="5" fill="#D4C4A8"/>
        </svg>
      </div>`,
    iconSize: [36, 42],
    iconAnchor: [18, 42],
    popupAnchor: [0, -44],
  });
}

const CENTER: LatLngTuple = [55.82, 37.28];

export default function MapClient() {
  const icon = createIcon();

  return (
    <MapContainer
      center={CENTER}
      zoom={10}
      className="h-full w-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {houses.map((house) => (
        <Marker key={house.id} position={[house.lat, house.lng] as LatLngTuple} icon={icon}>
          <Popup>
            <div style={{ fontFamily: 'var(--font-jost, system-ui)', minWidth: 180 }}>
              <div style={{ fontWeight: 600, color: '#1C3829', fontSize: 15, marginBottom: 4 }}>
                {house.name}
              </div>
              <div style={{ fontSize: 12, color: '#5A5A56', marginBottom: 8 }}>
                {house.address}
              </div>
              <div style={{ fontWeight: 600, color: '#2D5240' }}>
                от {house.price.toLocaleString('ru-RU')} ₽/сут
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
