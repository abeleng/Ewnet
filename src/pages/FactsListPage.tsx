import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, XCircle, AlertTriangle, TrendingUp, MessageCircle, Share2 } from 'lucide-react';

const FactsListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFact, setExpandedFact] = useState<number | null>(null);

  const facts = [
    {
      id: 1,
      claim: "Ethiopia's Grand Renaissance Dam has reached 100% power generation capacity",
      verdict: "False",
      explanation: "As of 2024, the GERD is still in its final phases of completion. While significant progress has been made, it has not yet reached full power generation capacity.",
      category: "Infrastructure",
      source: "Ethiopian Electric Power Corporation",
      date: "2024-03-15",
      verifiedBy: "Dr. Alemayehu Tegenu",
      confidence: 98,
      region: "Benishangul-Gumuz",
      impact: "High",
      imageUrl: "https://images.unsplash.com/photo-1591448764624-d7973a442bff?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      claim: "Ethiopian coffee exports have doubled in the last year",
      verdict: "Misleading",
      explanation: "While coffee exports have increased, the actual growth is 35% year-over-year, not double. This considers both volume and value of exports.",
      category: "Economy",
      source: "Ethiopian Coffee and Tea Authority",
      date: "2024-03-14",
      verifiedBy: "Prof. Girma Kebbede",
      confidence: 95,
      region: "National",
      impact: "Medium",
      imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      claim: "New educational policy mandates trilingual instruction in all public schools",
      verdict: "True",
      explanation: "The Ministry of Education has implemented a policy requiring instruction in Amharic, English, and regional languages in public schools starting 2024.",
      category: "Education",
      source: "Ministry of Education",
      date: "2024-03-13",
      verifiedBy: "Dr. Yalew Endawoke",
      confidence: 99,
      region: "National",
      impact: "High",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Economy', 'Education', 'Politics', 'Health'];

  const getVerdictColor = (verdict: string) => {
    switch (verdict.toLowerCase()) {
      case 'true':
        return 'bg-green-100 text-green-800';
      case 'false':
        return 'bg-red-100 text-red-800';
      case 'misleading':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict.toLowerCase()) {
      case 'true':
        return <CheckCircle2 className="h-8 w-8 text-green-600" />;
      case 'false':
        return <XCircle className="h-8 w-8 text-red-600" />;
      case 'misleading':
        return <AlertTriangle className="h-8 w-8 text-yellow-600" />;
      default:
        return null;
    }
  };

  const filteredFacts = facts.filter(fact => {
    const matchesSearch = fact.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         fact.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || fact.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search political claims..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Facts List */}
      <div className="space-y-6">
        {filteredFacts.map(fact => (
          <div 
            key={fact.id} 
            className={`bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 ${
              expandedFact === fact.id ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'
            }`}
            onClick={() => setExpandedFact(expandedFact === fact.id ? null : fact.id)}
          >
            <div className="relative">
              <img 
                src={fact.imageUrl} 
                alt={fact.category}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getVerdictColor(fact.verdict)}`}>
                  {fact.verdict}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {fact.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-500">{fact.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{fact.region}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{fact.claim}</h3>
                  
                  <div className={`transition-all duration-300 ${
                    expandedFact === fact.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="mt-2 text-gray-600">{fact.explanation}</p>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">AI Confidence</p>
                        <p className="text-lg font-semibold text-blue-600">{fact.confidence}%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Impact Level</p>
                        <p className="text-lg font-semibold text-purple-600">{fact.impact}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                          <MessageCircle className="h-5 w-5" />
                          <span>Discuss</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                          <Share2 className="h-5 w-5" />
                          <span>Share</span>
                        </button>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">Verified by:</span>
                        <span className="ml-1">{fact.verifiedBy}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex flex-col items-center">
                  {getVerdictIcon(fact.verdict)}
                  <div className="mt-2 text-center">
                    <TrendingUp className="h-4 w-4 text-blue-500 mx-auto" />
                    <span className="text-xs text-gray-500">Trending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsListPage;