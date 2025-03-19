import React from 'react';
import { User, Mail, MapPin, Calendar, Shield, Award, BookOpen, TrendingUp } from 'lucide-react';

interface ProfilePageProps {
  onSignOut: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onSignOut }) => {
  const user = {
    name: "Abebe Bekele",
    email: "abebe.bekele@example.com",
    location: "Addis Ababa, Ethiopia",
    joinDate: "March 2024",
    role: "Senior Fact Checker",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80",
    stats: {
      factsChecked: 324,
      accuracy: "98%",
      contributions: 156,
      reputation: 4.8
    },
    recentActivity: [
      {
        type: "Fact Check",
        title: "Verified claim about Ethiopian coffee origins",
        date: "2024-03-15",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
      },
      {
        type: "Source Review",
        title: "Reviewed academic paper on Ethiopian calendar",
        date: "2024-03-14",
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80"
      },
      {
        type: "Contribution",
        title: "Added new source for historical verification",
        date: "2024-03-13",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="relative h-48 mb-24">
        <img
          src="https://images.unsplash.com/photo-1576437125754-22b8a7c58d99?auto=format&fit=crop&q=80"
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
        <div className="overlay-gradient"></div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            className="h-32 w-32 rounded-full border-4 border-dark object-cover"
            src={user.avatar}
            alt={user.name}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-blue-400 font-medium">{user.role}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>

              <button
                onClick={onSignOut}
                className="mt-6 w-full btn-secondary"
              >
                SIGN OUT
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Facts Checked", value: user.stats.factsChecked },
                { icon: Award, label: "Accuracy", value: user.stats.accuracy },
                { icon: BookOpen, label: "Contributions", value: user.stats.contributions },
                { icon: TrendingUp, label: "Reputation", value: user.stats.reputation }
              ].map((stat, index) => (
                <div key={index} className="card group hover:border-white transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <stat.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="mt-2 text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {user.recentActivity.map((activity, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 bg-dark-200 hover:bg-dark-300 transition-all duration-300">
                    <div className="flex-shrink-0 w-16 h-16 relative image-hover">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="overlay-gradient"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-400">{activity.type}</span>
                        <span className="text-sm text-gray-400">{activity.date}</span>
                      </div>
                      <p className="mt-1 text-white group-hover:text-gray-300 transition-colors duration-300">
                        {activity.title}
                      </p>
                      <span className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-none text-xs font-medium ${
                        activity.status === 'Completed' ? 'bg-green-900 text-green-200' : 'bg-yellow-900 text-yellow-200'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;