import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  LineChart, Line,
  ResponsiveContainer 
} from 'recharts';
import { Brain, BookOpen, Users, TrendingUp, Shield, AlertTriangle, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const factCheckData = [
    { name: 'Jan', verified: 65, false: 45 },
    { name: 'Feb', verified: 75, false: 35 },
    { name: 'Mar', verified: 85, false: 55 },
    { name: 'Apr', verified: 95, false: 25 },
  ];

  const regionData = [
    { name: 'Addis Ababa', value: 400 },
    { name: 'Oromia', value: 300 },
    { name: 'Amhara', value: 300 },
    { name: 'Tigray', value: 200 },
  ];

  const COLORS = ['#FFFFFF', '#E5E5E5', '#CCCCCC', '#B3B3B3'];

  const aiAnalysisData = [
    { time: '00:00', accuracy: 85 },
    { time: '04:00', accuracy: 88 },
    { time: '08:00', accuracy: 92 },
    { time: '12:00', accuracy: 90 },
    { time: '16:00', accuracy: 87 },
    { time: '20:00', accuracy: 89 },
  ];

  const trendingClaims = [
    {
      title: "Electoral Reform Proposal",
      source: "Federal Parliament",
      status: "Under Review",
      image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&q=80"
    },
    {
      title: "Economic Growth Statistics",
      source: "Ministry of Finance",
      status: "Verified",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      title: "Agricultural Policy Changes",
      source: "Ministry of Agriculture",
      status: "False",
      image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Banner */}
        <div className="relative rounded-none overflow-hidden mb-8 image-hover">
          <img 
            src="https://images.unsplash.com/photo-1603976120720-13c66bd4df0a?auto=format&fit=crop&q=80"
            alt="Ethiopian Parliament"
            className="w-full h-64 object-cover"
          />
          <div className="overlay-gradient"></div>
          <div className="absolute inset-0 flex items-center px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">WELCOME TO YOUR DASHBOARD</h1>
              <p className="text-gray-300">Track and analyze political claims across Ethiopia with AI-powered insights</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Brain, title: 'AI ANALYSIS', value: '98%', desc: 'Accuracy Rate' },
            { icon: BookOpen, title: 'ACADEMIC SOURCES', value: '1,234', desc: 'Verified Sources' },
            { icon: Users, title: 'ACTIVE USERS', value: '50K+', desc: 'Monthly Users' },
            { icon: TrendingUp, title: 'CLAIMS VERIFIED', value: '10K+', desc: 'This Month' },
          ].map((stat, index) => (
            <div key={index} className="card group hover:border-white transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <h3 className="text-sm font-medium text-white tracking-wider">{stat.title}</h3>
              <p className="text-sm text-gray-400">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trending Claims */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wider">TRENDING CLAIMS</h3>
            <div className="space-y-4">
              {trendingClaims.map((claim, index) => (
                <div key={index} className="group flex items-center space-x-4 p-4 bg-dark-200 hover:bg-dark-300 transition-all duration-300">
                  <div className="relative w-16 h-16 image-hover">
                    <img 
                      src={claim.image} 
                      alt={claim.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="overlay-gradient"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
                      {claim.title}
                    </h4>
                    <p className="text-sm text-gray-400">{claim.source}</p>
                  </div>
                  <div className="flex items-center">
                    {claim.status === 'Verified' && <CheckCircle2 className="h-5 w-5 text-white" />}
                    {claim.status === 'False' && <XCircle className="h-5 w-5 text-white" />}
                    {claim.status === 'Under Review' && <AlertTriangle className="h-5 w-5 text-white" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fact Check Trends */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wider">FACT CHECK TRENDS</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={factCheckData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2D2D" />
                <XAxis dataKey="name" stroke="#FFFFFF" />
                <YAxis stroke="#FFFFFF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '0' }}
                  labelStyle={{ color: '#FFFFFF' }}
                />
                <Legend />
                <Bar dataKey="verified" fill="#FFFFFF" name="Verified Claims" />
                <Bar dataKey="false" fill="#404040" name="False Claims" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Geographic Distribution */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wider">GEOGRAPHIC DISTRIBUTION</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '0' }}
                  labelStyle={{ color: '#FFFFFF' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* AI Analysis Accuracy */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wider">AI ANALYSIS ACCURACY</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={aiAnalysisData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2D2D" />
                <XAxis dataKey="time" stroke="#FFFFFF" />
                <YAxis domain={[80, 100]} stroke="#FFFFFF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '0' }}
                  labelStyle={{ color: '#FFFFFF' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#FFFFFF" 
                  name="Accuracy %" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;