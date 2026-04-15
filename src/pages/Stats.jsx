// src/pages/Stats.jsx
import { useFriends } from '../context/FriendsContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const { timelineEntries } = useFriends();
  
  const callCount = timelineEntries.filter(e => e.type === 'call').length;
  const textCount = timelineEntries.filter(e => e.type === 'text').length;
  const videoCount = timelineEntries.filter(e => e.type === 'video').length;
  
  const pieData = [
    { name: 'Calls', value: callCount, color: '#10B981' },
    { name: 'Texts', value: textCount, color: '#3B82F6' },
    { name: 'Videos', value: videoCount, color: '#8B5CF6' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Friendship Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interaction Breakdown</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Total Interactions</span>
              <span className="text-2xl font-bold text-gray-800">{timelineEntries.length}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-medium">📞 Calls</span>
              <span className="text-xl font-semibold text-green-700">{callCount}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-medium">💬 Texts</span>
              <span className="text-xl font-semibold text-blue-700">{textCount}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <span className="font-medium">🎥 Videos</span>
              <span className="text-xl font-semibold text-purple-700">{videoCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;