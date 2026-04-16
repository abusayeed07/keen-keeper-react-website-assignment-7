// src/pages/FriendDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useFriends } from '../context/FriendsContext';
import { PhoneIcon, ChatBubbleLeftIcon, VideoCameraIcon, PencilIcon, ClockIcon, ArchiveBoxIcon, TrashIcon } from '@heroicons/react/24/outline';

const FriendDetails = () => {
  const { id } = useParams();
  const { getFriendById, addTimelineEntry } = useFriends();
  const navigate = useNavigate();
  const friend = getFriendById(parseInt(id));

  if (!friend) {
    navigate('/');
    return null;
  }

  const statusColors = {
    overdue: 'bg-red-100 text-red-800',
    'almost due': 'bg-yellow-100 text-yellow-800',
    'on-track': 'bg-green-100 text-green-800',
  };

  const handleInteraction = (type) => {
    addTimelineEntry(friend.id, friend.name, type);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Friend Info Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img src={friend.picture} alt={friend.name} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{friend.name}</h1>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${statusColors[friend.status]}`}>
                {friend.status}
              </span>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {friend.tags.map((tag, idx) => (
                <span key={idx} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Bio</h3>
            <p className="text-gray-700">{friend.bio}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Email</h3>
            <p className="text-gray-700">{friend.email}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            <button className="btn flex items-center space-x-1 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              <ClockIcon className="w-4 h-4" />
              <span>Snooze 2 Weeks</span>
            </button>
            <button className="btn flex items-center space-x-1  text-gray-700 px-4 py-2 rounded-lg transition-colors">
              <ArchiveBoxIcon className="w-4 h-4" />
              <span>Archive</span>
            </button>
            <button className="btn btn-error flex items-center space-x-1  px-4 py-2 rounded-lg transition-colors">
              <TrashIcon className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{friend.days_since_contact}</p>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{friend.goal}</p>
              <p className="text-gray-500 text-sm">Goal (days)</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 text-center">
              <p className="text-sm font-semibold text-gray-800">{friend.next_due_date}</p>
              <p className="text-gray-500 text-sm">Next Due Date</p>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-[#244D3F]">Relationship Goal</h3>
              <button className="text-blue-600 hover:text-blue-700">
                <PencilIcon className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600">Connect every <span className="font-bold">{friend.goal}</span> days</p>
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 rounded-full h-2" 
                style={{ width: `${Math.min(100, (friend.days_since_contact / friend.goal) * 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Check-In</h3>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => handleInteraction('call')}
                className="btn flex items-center space-x-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Call</span>
              </button>
              <button 
                onClick={() => handleInteraction('text')}
                className="btn flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ChatBubbleLeftIcon className="w-5 h-5" />
                <span>Text</span>
              </button>
              <button 
                onClick={() => handleInteraction('video')}
                className="btn flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg transition-colors"
              >
                <VideoCameraIcon className="w-5 h-5" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;