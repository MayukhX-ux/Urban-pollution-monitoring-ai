import { AlertCircle, Leaf, LayoutDashboard, Video } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface DashboardHeaderProps {
  currentPage: 'dashboard' | 'cameras';
  onPageChange: (page: 'dashboard' | 'cameras') => void;
}

export function DashboardHeader({ currentPage, onPageChange }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-slate-900">Raipur Municipal Corporation</h1>
              <p className="text-slate-600 text-sm">Environment Monitoring Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <Button
                variant={currentPage === 'dashboard' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange('dashboard')}
                className="gap-2"
              >
                <LayoutDashboard className="size-4" />
                Dashboard
              </Button>
              <Button
                variant={currentPage === 'cameras' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange('cameras')}
                className="gap-2"
              >
                <Video className="size-4" />
                Cameras
              </Button>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-slate-600">Last Updated</p>
              <p className="text-slate-900">{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            {currentPage === 'dashboard' && (
              <Badge variant="destructive" className="gap-1">
                <AlertCircle className="size-3" />
                12 Active Hotspots
              </Badge>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}