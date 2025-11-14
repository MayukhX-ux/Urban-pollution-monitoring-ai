import { Card } from './ui/card';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const pm25Data = [
  { time: '00:00', value: 145, safe: 60 },
  { time: '03:00', value: 138, safe: 60 },
  { time: '06:00', value: 152, safe: 60 },
  { time: '09:00', value: 168, safe: 60 },
  { time: '12:00', value: 175, safe: 60 },
  { time: '15:00', value: 163, safe: 60 },
  { time: '18:00', value: 156, safe: 60 },
  { time: '21:00', value: 149, safe: 60 },
];

const pm10Data = [
  { time: '00:00', value: 215, safe: 100 },
  { time: '03:00', value: 208, safe: 100 },
  { time: '06:00', value: 225, safe: 100 },
  { time: '09:00', value: 242, safe: 100 },
  { time: '12:00', value: 255, safe: 100 },
  { time: '15:00', value: 238, safe: 100 },
  { time: '18:00', value: 234, safe: 100 },
  { time: '21:00', value: 221, safe: 100 },
];

const aqiData = [
  { time: '00:00', value: 165 },
  { time: '03:00', value: 158 },
  { time: '06:00', value: 172 },
  { time: '09:00', value: 185 },
  { time: '12:00', value: 195 },
  { time: '15:00', value: 189 },
  { time: '18:00', value: 187 },
  { time: '21:00', value: 176 },
];

const pollutantsData = [
  { name: 'PM2.5', value: 156, limit: 60 },
  { name: 'PM10', value: 234, limit: 100 },
  { name: 'NO₂', value: 45, limit: 80 },
  { name: 'SO₂', value: 28, limit: 80 },
  { name: 'CO', value: 1.2, limit: 2 },
  { name: 'O₃', value: 65, limit: 100 },
];

export function PollutionCharts() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PM2.5 Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900">PM2.5 Levels (24 Hours)</h3>
              <p className="text-sm text-slate-600">Safe limit: 60 µg/m³</p>
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <TrendingUp className="size-4" />
              <span className="text-sm">+8%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={pm25Data}>
              <defs>
                <linearGradient id="colorPM25" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                labelStyle={{ color: '#0f172a' }}
              />
              <Area type="monotone" dataKey="safe" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeDasharray="5 5" name="Safe Limit" />
              <Area type="monotone" dataKey="value" stroke="#ef4444" fillOpacity={1} fill="url(#colorPM25)" name="PM2.5" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* PM10 Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-900">PM10 Levels (24 Hours)</h3>
              <p className="text-sm text-slate-600">Safe limit: 100 µg/m³</p>
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <TrendingUp className="size-4" />
              <span className="text-sm">+12%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={pm10Data}>
              <defs>
                <linearGradient id="colorPM10" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                labelStyle={{ color: '#0f172a' }}
              />
              <Area type="monotone" dataKey="safe" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeDasharray="5 5" name="Safe Limit" />
              <Area type="monotone" dataKey="value" stroke="#f97316" fillOpacity={1} fill="url(#colorPM10)" name="PM10" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AQI Trend */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-slate-900">Air Quality Index Trend</h3>
            <p className="text-sm text-slate-600">Last 24 hours</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={aqiData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                labelStyle={{ color: '#0f172a' }}
              />
              <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 4 }} name="AQI" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* All Pollutants Comparison */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-slate-900">Current Pollutant Levels</h3>
            <p className="text-sm text-slate-600">vs Safe Limits</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={pollutantsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                labelStyle={{ color: '#0f172a' }}
              />
              <Legend />
              <Bar dataKey="limit" fill="#10b981" name="Safe Limit" radius={[4, 4, 0, 0]} />
              <Bar dataKey="value" fill="#3b82f6" name="Current Level" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
