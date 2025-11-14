import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Flame, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Hotspot {
  id: number;
  name: string;
  x: number;
  y: number;
  severity: 'high' | 'medium' | 'low';
  incidents: number;
}

const hotspots: Hotspot[] = [
  { id: 1, name: 'Civil Lines', x: 45, y: 30, severity: 'high', incidents: 8 },
  { id: 2, name: 'Telibandha', x: 60, y: 45, severity: 'high', incidents: 6 },
  { id: 3, name: 'Shankar Nagar', x: 30, y: 50, severity: 'medium', incidents: 4 },
  { id: 4, name: 'Mowa', x: 70, y: 60, severity: 'medium', incidents: 5 },
  { id: 5, name: 'Gudhiyari', x: 25, y: 70, severity: 'low', incidents: 2 },
  { id: 6, name: 'Kota', x: 80, y: 35, severity: 'high', incidents: 7 },
  { id: 7, name: 'Amanaka', x: 50, y: 65, severity: 'medium', incidents: 3 },
  { id: 8, name: 'Tatibandh', x: 35, y: 40, severity: 'low', incidents: 2 },
  { id: 9, name: 'Devendra Nagar', x: 55, y: 25, severity: 'medium', incidents: 4 },
  { id: 10, name: 'Pandri', x: 65, y: 50, severity: 'high', incidents: 9 },
  { id: 11, name: 'Moudhapara', x: 40, y: 60, severity: 'low', incidents: 1 },
  { id: 12, name: 'Saddu', x: 75, y: 70, severity: 'medium', incidents: 3 },
];

export function HotspotMap() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500 hover:bg-red-600 border-red-600';
      case 'medium':
        return 'bg-orange-500 hover:bg-orange-600 border-orange-600';
      case 'low':
        return 'bg-yellow-500 hover:bg-yellow-600 border-yellow-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getSeveritySize = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'size-6';
      case 'medium':
        return 'size-5';
      case 'low':
        return 'size-4';
      default:
        return 'size-4';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-slate-700" />
          <h2 className="text-slate-900">Waste Burning Hotspots - Raipur</h2>
        </div>
        <Badge variant="outline">Live</Badge>
      </div>

      <div className="relative w-full h-96 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg border-2 border-slate-200 overflow-hidden">
        {/* Map Grid */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full border-t border-slate-400" style={{ top: `${i * 10}%` }} />
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full border-l border-slate-400" style={{ left: `${i * 10}%` }} />
          ))}
        </div>

        {/* City Label */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border">
          <p className="text-slate-900">Raipur, Chhattisgarh</p>
        </div>

        {/* Hotspots */}
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            onMouseEnter={() => setSelectedHotspot(hotspot)}
            onMouseLeave={() => setSelectedHotspot(null)}
          >
            {/* Pulse animation */}
            <div className={`absolute inset-0 ${getSeverityColor(hotspot.severity)} rounded-full ${getSeveritySize(hotspot.severity)} animate-ping opacity-75`} />
            
            {/* Hotspot marker */}
            <div className={`relative ${getSeverityColor(hotspot.severity)} rounded-full ${getSeveritySize(hotspot.severity)} border-2 border-white shadow-lg flex items-center justify-center transition-transform group-hover:scale-125`}>
              <Flame className="size-3 text-white" />
            </div>

            {/* Tooltip */}
            {selectedHotspot?.id === hotspot.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-xl border-2 border-slate-200 p-3 whitespace-nowrap z-10">
                <p className="text-slate-900">{hotspot.name}</p>
                <p className="text-sm text-slate-600">{hotspot.incidents} incidents today</p>
                <p className="text-sm mt-1">
                  <span className={`capitalize ${
                    hotspot.severity === 'high' ? 'text-red-600' :
                    hotspot.severity === 'medium' ? 'text-orange-600' :
                    'text-yellow-600'
                  }`}>
                    {hotspot.severity} severity
                  </span>
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r-2 border-b-2 border-slate-200" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t">
        <div className="flex items-center gap-2">
          <div className="size-4 bg-red-500 rounded-full border-2 border-white shadow" />
          <span className="text-sm text-slate-600">High Severity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-4 bg-orange-500 rounded-full border-2 border-white shadow" />
          <span className="text-sm text-slate-600">Medium Severity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-4 bg-yellow-500 rounded-full border-2 border-white shadow" />
          <span className="text-sm text-slate-600">Low Severity</span>
        </div>
      </div>
    </Card>
  );
}
