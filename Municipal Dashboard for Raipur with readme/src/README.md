# Raipur Municipal Corporation - Environment Monitoring Dashboard

A comprehensive environmental monitoring and surveillance dashboard for Raipur Municipal Corporation, Chhattisgarh. This application provides real-time tracking of waste burning hotspots, pollution parameters, and integrated camera surveillance.

## 🌟 Features

### Dashboard View
- **Real-time Metrics**: Live monitoring of PM2.5, PM10, AQI, humidity, and temperature
- **Interactive Hotspot Map**: Visual representation of waste burning locations across Raipur with severity indicators
- **Recent Incidents Panel**: Track waste burning incidents with location, time, severity, and AQI impact
- **Pollution Charts**: 
  - 24-hour PM2.5 and PM10 trend charts
  - Air Quality Index (AQI) trend visualization
  - Comparative pollutant levels chart
- **Geographic Coverage**: 12+ monitored zones across Raipur including Civil Lines, Telibandha, Pandri, Kota, Shankar Nagar, and more

### Camera Surveillance View
- **Multi-camera Support**: Monitor multiple IP camera feeds simultaneously
- **Live Feed Integration**: Real-time video streaming from IP cameras
- **Camera Status Monitoring**: Online/offline status tracking for all cameras
- **Alert System**: Automatic detection and notification of waste burning activities
- **Zone-based Organization**: Cameras organized by geographic zones
- **Fullscreen Mode**: Enhanced viewing experience for detailed monitoring
- **Direct Feed Access**: Quick access to camera IP addresses for direct viewing

## 🛠️ Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4.0
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)

## 📋 Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager
- Access to IP camera network (default: http://10.149.234.33/)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/raipur-environment-dashboard.git
cd raipur-environment-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
/
├── App.tsx                          # Main application component with routing
├── components/
│   ├── DashboardHeader.tsx          # Header with navigation
│   ├── MetricsCards.tsx             # Real-time pollution metrics display
│   ├── HotspotMap.tsx               # Interactive waste burning map
│   ├── RecentIncidents.tsx          # Incident tracking panel
│   ├── PollutionCharts.tsx          # Data visualization charts
│   ├── CameraSurveillance.tsx       # Camera surveillance interface
│   └── ui/                          # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── styles/
│   └── globals.css                  # Global styles and Tailwind config
└── README.md                        # Project documentation
```

## 🎯 Usage

### Navigating Between Views

Use the navigation buttons in the header to switch between:
- **Dashboard**: Environmental monitoring and pollution tracking
- **Cameras**: Live surveillance feed monitoring

### Dashboard Features

1. **View Current Metrics**: Check real-time pollution levels at the top of the dashboard
2. **Monitor Hotspots**: Click on hotspot markers to see incident details
3. **Track Trends**: Scroll down to view 24-hour pollution trend charts
4. **Review Incidents**: Check the recent incidents panel for latest waste burning events

### Camera Surveillance Features

1. **Select Camera**: Click on any camera in the left panel to view its feed
2. **View Alerts**: Cameras with active alerts are highlighted in red
3. **Fullscreen Mode**: Click the maximize button for fullscreen viewing
4. **Direct Access**: Use "Open Direct Feed" to open camera in new tab
5. **Monitor Status**: Check online/offline status of all cameras

## 🔧 Configuration

### Camera IP Addresses

To update camera IP addresses, edit `/components/CameraSurveillance.tsx`:

```typescript
const cameras: Camera[] = [
  {
    id: 1,
    name: 'Main Station Feed',
    ipAddress: 'http://YOUR_CAMERA_IP/',
    // ... other properties
  },
  // Add more cameras
];
```

### Hotspot Locations

To customize hotspot locations, edit `/components/HotspotMap.tsx`:

```typescript
const hotspots: Hotspot[] = [
  {
    id: 1,
    name: 'Location Name',
    x: 45,  // X coordinate (0-100)
    y: 30,  // Y coordinate (0-100)
    severity: 'high',  // 'high' | 'medium' | 'low'
    incidents: 8
  },
  // Add more hotspots
];
```

## 📊 Data Integration

Currently, the application uses mock data for demonstration purposes. For production deployment:

### Backend Integration Options

1. **REST API**: Connect to your existing monitoring API
2. **WebSocket**: Implement real-time data streaming
3. **Database**: Integrate with PostgreSQL, MongoDB, or other databases
4. **Supabase**: Use Supabase for real-time backend functionality

### Example API Integration

```typescript
// Fetch real-time pollution data
async function fetchPollutionData() {
  const response = await fetch('YOUR_API_ENDPOINT/pollution');
  const data = await response.json();
  // Update state with real data
}
```

## 🔒 Security Considerations

- **IP Camera Access**: Ensure camera feeds are on a secure network
- **CORS Configuration**: Configure CORS properly for iframe embedding
- **Authentication**: Add authentication layer for production deployment
- **Data Privacy**: Implement proper data handling for sensitive information
- **Network Security**: Use VPN or secure network for accessing camera feeds

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Popular Platforms

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repository settings
- **Docker**: Use provided Dockerfile (if available)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and queries:
- Create an issue in the GitHub repository
- Contact: Raipur Municipal Corporation IT Department
- Email: support@raipurmc.gov.in (update with actual email)

## 🙏 Acknowledgments

- Raipur Municipal Corporation for environmental data
- shadcn/ui for the component library
- OpenStreetMap contributors for mapping data
- All contributors and maintainers

## 📸 Screenshots

### Dashboard View
![Dashboard](screenshots/dashboard.png)

### Camera Surveillance
![Cameras](screenshots/cameras.png)

*(Add actual screenshots after deploying)*

## 🔮 Future Enhancements

- [ ] Mobile responsive design improvements
- [ ] Real-time alerts and notifications
- [ ] Historical data analysis and reports
- [ ] AI-powered waste burning detection
- [ ] Multi-language support (Hindi, English)
- [ ] Export functionality for reports
- [ ] Admin panel for configuration
- [ ] SMS/Email alert integration
- [ ] Weather data integration
- [ ] Predictive analytics

## 📞 Contact

**Raipur Municipal Corporation**
- Website: https://raipurmc.gov.in
- Address: Raipur, Chhattisgarh, India

---

Made with ❤️ for a cleaner Raipur
