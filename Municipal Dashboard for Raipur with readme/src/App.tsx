import { DashboardHeader } from './components/DashboardHeader';
import { HotspotMap } from './components/HotspotMap';
import { PollutionCharts } from './components/PollutionCharts';
import { MetricsCards } from './components/MetricsCards';
import { RecentIncidents } from './components/RecentIncidents';
import { CameraSurveillance } from './components/CameraSurveillance';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'cameras'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'dashboard' ? (
        <main className="container mx-auto p-6 space-y-6">
          <MetricsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HotspotMap />
            <RecentIncidents />
          </div>
          
          <PollutionCharts />
        </main>
      ) : (
        <CameraSurveillance />
      )}
    </div>
  );
}