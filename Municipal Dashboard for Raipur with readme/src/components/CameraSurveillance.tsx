import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Video, MapPin, Activity, ExternalLink, Maximize2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface Camera {
  id: number;
  name: string;
  location: string;
  zone: string;
  status: 'online' | 'offline';
  ipAddress: string;
  hasAlert: boolean;
}

const cameras: Camera[] = [
  {
    id: 1,
    name: 'Main Station Feed',
    location: 'Civil Lines, Central Monitoring',
    zone: 'Zone A',
    status: 'online',
    ipAddress: 'http://10.149.234.33/',
    hasAlert: false
  },
  {
    id: 2,
    name: 'Camera 2',
    location: 'Telibandha, Main Road',
    zone: 'Zone B',
    status: 'online',
    ipAddress: 'http://10.149.234.33/',
    hasAlert: true
  },
  {
    id: 3,
    name: 'Camera 3',
    location: 'Pandri, Sector 4',
    zone: 'Zone C',
    status: 'online',
    ipAddress: 'http://10.149.234.33/',
    hasAlert: true
  },
  {
    id: 4,
    name: 'Camera 4',
    location: 'Kota, Industrial Area',
    zone: 'Zone D',
    status: 'offline',
    ipAddress: 'http://10.149.234.33/',
    hasAlert: false
  },
  {
    id: 5,
    name: 'Camera 5',
    location: 'Shankar Nagar, Ward 12',
    zone: 'Zone A',
    status: 'online',
    ipAddress: 'http://10.149.234.33/',
    hasAlert: false
  },
  {
    id: 6,
    name: 'Camera 6',
    location: 'Mowa, Near Market',
    zone: 'Zone E',
    status: 'online',
    ipAddress: 'http://10.149.234.33/',
    hasAlert: false
  }
];

export function CameraSurveillance() {
  const [selectedCamera, setSelectedCamera] = useState<Camera>(cameras[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const onlineCameras = cameras.filter(c => c.status === 'online').length;
  const alertCameras = cameras.filter(c => c.hasAlert).length;

  return (
    <main className="container mx-auto p-6 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Cameras</p>
              <p className="text-slate-900 text-2xl mt-1">{cameras.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Video className="size-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Online Cameras</p>
              <p className="text-slate-900 text-2xl mt-1">{onlineCameras}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Activity className="size-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Active Alerts</p>
              <p className="text-slate-900 text-2xl mt-1">{alertCameras}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="size-6 text-red-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera List */}
        <Card className="p-6 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-slate-900">Camera Feeds</h2>
            <Badge variant="outline">{onlineCameras}/{cameras.length} Online</Badge>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {cameras.map((camera) => (
              <div
                key={camera.id}
                onClick={() => camera.status === 'online' && setSelectedCamera(camera)}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  selectedCamera.id === camera.id
                    ? 'border-blue-500 bg-blue-50'
                    : camera.status === 'offline'
                    ? 'border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-slate-900 truncate">{camera.name}</p>
                      {camera.hasAlert && (
                        <Badge variant="destructive" className="text-xs">Alert</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600 mb-1">
                      <MapPin className="size-3 flex-shrink-0" />
                      <p className="truncate">{camera.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{camera.zone}</Badge>
                      <div className="flex items-center gap-1">
                        <div className={`size-2 rounded-full ${
                          camera.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className={`text-xs ${
                          camera.status === 'online' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {camera.status === 'online' ? 'Online' : 'Offline'}
                        </span>
                      </div>
                    </div>
                  </div>
                  {camera.status === 'online' && (
                    <Video className={`size-5 flex-shrink-0 ${
                      selectedCamera.id === camera.id ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Main Feed */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-slate-900">{selectedCamera.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="size-4 text-slate-600" />
                <p className="text-sm text-slate-600">{selectedCamera.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {selectedCamera.hasAlert && (
                <Badge variant="destructive" className="gap-1">
                  <AlertCircle className="size-3" />
                  Waste Burning Detected
                </Badge>
              )}
              <Badge className="gap-1 bg-green-600">
                <Activity className="size-3" />
                Live
              </Badge>
            </div>
          </div>

          {/* Camera Feed */}
          <div className={`relative bg-slate-900 rounded-lg overflow-hidden ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-video'
          }`}>
            <iframe
              src={selectedCamera.ipAddress}
              className="w-full h-full"
              title={selectedCamera.name}
              sandbox="allow-same-origin allow-scripts"
            />
            
            {/* Overlay Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
              <div className="bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-white text-sm">
                  {new Date().toLocaleString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/80"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <Maximize2 className="size-4" />
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black/70 backdrop-blur-sm hover:bg-black/80 gap-2"
                  onClick={() => window.open(selectedCamera.ipAddress, '_blank')}
                >
                  <ExternalLink className="size-4" />
                  Open Direct Feed
                </Button>
              </div>
            </div>

            {selectedCamera.hasAlert && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-red-600 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3">
                  <AlertCircle className="size-5 text-white flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white">Waste burning activity detected in this area</p>
                    <p className="text-red-100 text-sm">Alert generated at {new Date().toLocaleTimeString('en-IN')}</p>
                  </div>
                  <Button size="sm" variant="secondary">
                    Dispatch Team
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Camera Info */}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
            <div>
              <p className="text-sm text-slate-600">IP Address</p>
              <p className="text-slate-900 font-mono text-sm mt-1">{selectedCamera.ipAddress}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Zone</p>
              <p className="text-slate-900 mt-1">{selectedCamera.zone}</p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
