import { useState } from 'react';
import { MapPin, Navigation, Star, TrendingDown, Fuel, Search, Droplets } from 'lucide-react';
import { fuelStations, priceTrends } from '@/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FuelSection() {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel'>('petrol');
  const [postcode, setPostcode] = useState('');

  const cheapestStation = fuelStations.reduce((min, station) =>
    station.petrolPrice < min.petrolPrice ? station : min
  );

  const avgPrice = fuelStations.reduce((sum, s) => sum + (fuelType === 'petrol' ? s.petrolPrice : s.dieselPrice), 0) / fuelStations.length;

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E6F0FF] rounded-lg">
              <Fuel className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Fuel Price Checker</h2>
              <p className="text-sm text-gray-500">Find the cheapest fuel near you</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-gray-500">UK Average</span>
              <div className="text-lg font-bold text-[#0066FF]">{avgPrice.toFixed(1)}p</div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500">Lowest</span>
              <div className="text-lg font-bold text-[#00C853]">{Math.min(...fuelStations.map(s => fuelType === 'petrol' ? s.petrolPrice : s.dieselPrice))}p</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Search & List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search Box */}
            <div className="bg-[#F5F7FA] rounded-xl p-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Enter postcode..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all duration-200 bg-white"
                  />
                </div>
                <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-4 py-2.5 rounded-lg transition-colors duration-200">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <button className="w-full mt-2 flex items-center justify-center gap-2 text-sm text-[#0066FF] hover:bg-white py-2 rounded-lg transition-colors duration-200">
                <Navigation className="w-4 h-4" />
                Use my location
              </button>
            </div>

            {/* Fuel Type Toggle */}
            <div className="bg-[#F5F7FA] rounded-xl p-2 flex gap-2">
              <button
                onClick={() => setFuelType('petrol')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  fuelType === 'petrol'
                    ? 'bg-[#0066FF] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Droplets className="w-4 h-4" />
                Petrol (E10)
              </button>
              <button
                onClick={() => setFuelType('diesel')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  fuelType === 'diesel'
                    ? 'bg-[#0066FF] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Fuel className="w-4 h-4" />
                Diesel
              </button>
            </div>

            {/* Station List */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Nearby Stations</span>
                <span className="text-xs text-gray-400">Updated 1h ago</span>
              </div>
              <div className="max-h-[350px] overflow-y-auto">
                {fuelStations.map((station) => (
                  <div
                    key={station.id}
                    onClick={() => setSelectedStation(station.id)}
                    className={`p-3 border-b border-gray-100 cursor-pointer transition-all duration-200 ${
                      selectedStation === station.id
                        ? 'bg-[#E6F0FF] border-l-4 border-l-[#0066FF]'
                        : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-gray-800">{station.name}</span>
                          {!station.isOpen && (
                            <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">Closed</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{station.address}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-gray-500">{station.rating}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{station.distance} mi</span>
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <span className={`text-lg font-bold ${
                          station.id === cheapestStation.id ? 'text-[#00C853]' : 'text-[#0066FF]'
                        }`}>
                          {fuelType === 'petrol' ? station.petrolPrice : station.dieselPrice}p
                        </span>
                        {station.id === cheapestStation.id && (
                          <div className="flex items-center gap-1 text-[#00C853] text-xs">
                            <TrendingDown className="w-3 h-3" />
                            Best
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Map & Chart */}
          <div className="lg:col-span-2 space-y-4">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="relative h-[280px] bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Simulated Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Grid Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0066FF" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    
                    {/* Roads */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#fff" strokeWidth="8" />
                      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#fff" strokeWidth="8" />
                      <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#fff" strokeWidth="4" />
                      <line x1="30%" y1="0" x2="70%" y2="100%" stroke="#fff" strokeWidth="4" />
                    </svg>

                    {/* Station Markers */}
                    {fuelStations.map((station, index) => {
                      const positions = [
                        { left: '25%', top: '35%' },
                        { left: '65%', top: '25%' },
                        { left: '45%', top: '60%' },
                        { left: '75%', top: '55%' },
                        { left: '35%', top: '75%' },
                        { left: '85%', top: '80%' },
                      ];
                      const pos = positions[index % positions.length];
                      const isCheapest = station.id === cheapestStation.id;
                      const isSelected = selectedStation === station.id;

                      return (
                        <div
                          key={station.id}
                          onClick={() => setSelectedStation(station.id)}
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                            isSelected ? 'scale-125 z-10' : 'hover:scale-110'
                          }`}
                          style={{ left: pos.left, top: pos.top }}
                        >
                          <div className={`relative ${isCheapest ? 'animate-bounce' : ''}`}>
                            <MapPin className={`w-8 h-8 ${
                              isCheapest ? 'text-[#00C853]' : 
                              isSelected ? 'text-[#0066FF]' : 'text-gray-600'
                            }`} />
                            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap px-2 py-0.5 rounded-full shadow ${
                              isCheapest ? 'bg-[#00C853] text-white' : 'bg-white text-gray-800'
                            }`}>
                              {fuelType === 'petrol' ? station.petrolPrice : station.dieselPrice}p
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {/* User Location */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-4 h-4 bg-[#0066FF] rounded-full border-2 border-white shadow-lg" />
                        <div className="absolute inset-0 w-4 h-4 bg-[#0066FF] rounded-full animate-ping opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Trend Chart */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Price Trends (7 Days)</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#0066FF]" />
                    <span className="text-gray-600">Petrol</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#00C853]" />
                    <span className="text-gray-600">Diesel</span>
                  </div>
                </div>
              </div>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 12 }} stroke="#999" domain={['dataMin - 3', 'dataMax + 3']} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                      formatter={(value: number) => [`${value}p`, '']}
                    />
                    <Line
                      type="monotone"
                      dataKey="petrol"
                      stroke="#0066FF"
                      strokeWidth={2}
                      dot={{ fill: '#0066FF', strokeWidth: 0, r: 4 }}
                      activeDot={{ r: 6, stroke: '#0066FF', strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="diesel"
                      stroke="#00C853"
                      strokeWidth={2}
                      dot={{ fill: '#00C853', strokeWidth: 0, r: 4 }}
                      activeDot={{ r: 6, stroke: '#00C853', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between mt-3 text-sm">
                <div className="flex items-center gap-1 text-[#00C853]">
                  <TrendingDown className="w-4 h-4" />
                  <span>National average down 0.8p this week</span>
                </div>
                <span className="text-gray-400 text-xs">Data: PetrolPrices API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
