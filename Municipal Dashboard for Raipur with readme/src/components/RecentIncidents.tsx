import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Flame, Clock, MapPin } from 'lucide-react';

interface Incident {
  id: number;
  location: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
  status: 'active' | 'resolved' | 'investigating';
  aqiImpact: number;
}

const incidents: Incident[] = [
  {
    id: 1,
    location: 'Pandri, Sector 4',
    time: '15 mins ago',
    severity: 'high',
    status: 'active',
    aqiImpact: 45
  },
  {
    id: 2,
    location: 'Civil Lines, Near Railway Station',
    time: '32 mins ago',
    severity: 'high',
    status: 'investigating',
    aqiImpact: 38
  },
  {
    id: 3,
    location: 'Kota, Industrial Area',
    time: '1 hour ago',
    severity: 'medium',
    status: 'active',
    aqiImpact: 28
  },
  {
    id: 4,
    location: 'Telibandha, Residential Zone',
    time: '2 hours ago',
    severity: 'high',
    status: 'investigating',
    aqiImpact: 42
  },
  {
    id: 5,
    location: 'Mowa, Near Market',
    time: '2 hours ago',
    severity: 'medium',
    status: 'resolved',
    aqiImpact: 25
  },
  {
    id: 6,
    location: 'Shankar Nagar, Ward 12',
    time: '3 hours ago',
    severity: 'low',
    status: 'resolved',
    aqiImpact: 15
  },
  {
    id: 7,
    location: 'Amanaka, Main Road',
    time: '4 hours ago',
    severity: 'medium',
    status: 'resolved',
    aqiImpact: 22
  }
];

export function RecentIncidents() {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Medium</Badge>;
      case 'low':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Low</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="destructive">Active</Badge>;
      case 'investigating':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Investigating</Badge>;
      case 'resolved':
        return <Badge variant="outline" className="text-green-600 border-green-600">Resolved</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame className="size-5 text-slate-700" />
          <h2 className="text-slate-900">Recent Incidents</h2>
        </div>
        <Badge variant="outline">{incidents.length} Today</Badge>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="size-4 text-slate-600 flex-shrink-0" />
                  <p className="text-slate-900 truncate">{incident.location}</p>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="size-4 text-slate-500 flex-shrink-0" />
                  <p className="text-sm text-slate-600">{incident.time}</p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {getSeverityBadge(incident.severity)}
                  {getStatusBadge(incident.status)}
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <p className="text-sm text-slate-600">AQI Impact</p>
                <p className={`text-xl ${incident.aqiImpact > 35 ? 'text-red-600' : incident.aqiImpact > 20 ? 'text-orange-600' : 'text-yellow-600'}`}>
                  +{incident.aqiImpact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
