import { Card } from './ui/card';
import { AlertTriangle, Wind, Droplets, Thermometer } from 'lucide-react';

const metrics = [
  {
    label: 'PM2.5',
    value: '156',
    unit: 'µg/m³',
    status: 'Poor',
    statusColor: 'text-red-600',
    icon: Wind,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    change: '+12%',
    changeType: 'negative'
  },
  {
    label: 'PM10',
    value: '234',
    unit: 'µg/m³',
    status: 'Poor',
    statusColor: 'text-red-600',
    icon: Wind,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    change: '+8%',
    changeType: 'negative'
  },
  {
    label: 'AQI',
    value: '187',
    unit: '',
    status: 'Unhealthy',
    statusColor: 'text-orange-600',
    icon: AlertTriangle,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    change: '+5%',
    changeType: 'negative'
  },
  {
    label: 'Humidity',
    value: '68',
    unit: '%',
    status: 'Normal',
    statusColor: 'text-green-600',
    icon: Droplets,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    change: '-2%',
    changeType: 'positive'
  },
  {
    label: 'Temperature',
    value: '32',
    unit: '°C',
    status: 'Normal',
    statusColor: 'text-green-600',
    icon: Thermometer,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    change: '+1°C',
    changeType: 'neutral'
  }
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.label} className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-slate-600">{metric.label}</p>
                <div className="mt-2">
                  <span className="text-slate-900 text-2xl">{metric.value}</span>
                  {metric.unit && <span className="text-slate-600 text-sm ml-1">{metric.unit}</span>}
                </div>
                <p className={`text-sm mt-1 ${metric.statusColor}`}>{metric.status}</p>
              </div>
              <div className={`${metric.iconBg} p-2 rounded-lg`}>
                <Icon className={`size-5 ${metric.iconColor}`} />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t">
              <span className={`text-sm ${metric.changeType === 'negative' ? 'text-red-600' : metric.changeType === 'positive' ? 'text-green-600' : 'text-slate-600'}`}>
                {metric.change} from yesterday
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
