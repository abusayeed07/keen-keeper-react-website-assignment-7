// src/pages/Timeline.jsx
import { useState } from 'react';
import { useFriends } from '../context/FriendsContext';
import { PhoneIcon, ChatBubbleLeftIcon, VideoCameraIcon, FunnelIcon, TrashIcon, InboxIcon } from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Timeline = () => {
  const { timelineEntries, removeAllTimelineEntries } = useFriends();
  const [filter, setFilter] = useState('all');

  const filteredEntries = timelineEntries.filter(entry => 
    filter === 'all' ? true : entry.type === filter
  );

  const getIcon = (type) => {
    switch(type) {
      case 'call': return <PhoneIcon className="w-5 h-5 text-green-600" />;
      case 'text': return <ChatBubbleLeftIcon className="w-5 h-5 text-blue-600" />;
      case 'video': return <VideoCameraIcon className="w-5 h-5 text-purple-600" />;
      default: return null;
    }
  };

  const handleRemoveAll = () => {
    if (timelineEntries.length === 0) {
      toast.info('No entries to remove!', {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    removeAllTimelineEntries();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Timeline</h1>
        
        <div className="flex items-center gap-3">
          {/* Filter Dropdown */}
          <div className="flex items-center space-x-2">
            <FunnelIcon className="w-5 h-5 text-gray-500" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Interactions</option>
              <option value="call">Calls Only</option>
              <option value="text">Texts Only</option>
              <option value="video">Videos Only</option>
            </select>
          </div>

          {/* Remove All Button */}
          {timelineEntries.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="btn btn-error flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
              <span>Remove All ({timelineEntries.length})</span>
            </button>
          )}
        </div>
      </div>

      {filteredEntries.length === 0 ? (
        // Enhanced Empty State UI
        <div className="text-center py-16 bg-white rounded-xl shadow-sm">
          {timelineEntries.length === 0 ? (
            <>
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <InboxIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Timeline Entries Yet</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Go to a friend's detail page and log an interaction to start building your timeline.
              </p>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.location.href = '/'}
                  className="btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Friends
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <FunnelIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Matching Entries</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                No {filter !== 'all' ? filter : ''} interactions found. Try changing the filter.
              </p>
              <button 
                onClick={() => setFilter('all')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Show All Interactions
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow group">
              <div className="bg-gray-100 p-3 rounded-full">
                {getIcon(entry.type)}
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-gray-800">{entry.title}</p>
                <p className="text-sm text-gray-500">with {entry.friendName}</p>
              </div>
              <div className="text-sm text-gray-400">
                {new Date(entry.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;