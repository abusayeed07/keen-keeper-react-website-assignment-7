// src/context/FriendsContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import friendsData from '../data/friends.json';
import toast from 'react-hot-toast';

const FriendsContext = createContext();

export const useFriends = () => useContext(FriendsContext);

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timelineEntries, setTimelineEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      const savedTimeline = localStorage.getItem('friendship_timeline');
      if (savedTimeline) {
        setTimelineEntries(JSON.parse(savedTimeline));
      }
      setLoading(false);
    }, 800);
  }, []);

  const addTimelineEntry = (friendId, friendName, type) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      friendName,
      type,
      title: `${type === 'call' ? 'Call' : type === 'text' ? 'Text' : 'Video'} with ${friendName}`,
      date: new Date().toISOString(),
    };
    
    const updatedEntries = [newEntry, ...timelineEntries];
    setTimelineEntries(updatedEntries);
    localStorage.setItem('friendship_timeline', JSON.stringify(updatedEntries));
    
    toast.success(`Added: ${newEntry.title}`);
  };

  // Remove all timeline entries
  const removeAllTimelineEntries = () => {
    setTimelineEntries([]);
    localStorage.removeItem('friendship_timeline');
    toast.success(`🗑️ Removed all ${timelineEntries.length} timeline entries!`);
  };

  const getFriendById = (id) => friends.find(f => f.id === parseInt(id));

  return (
    <FriendsContext.Provider value={{ 
      friends, 
      loading, 
      timelineEntries, 
      addTimelineEntry, 
      removeAllTimelineEntries,
      getFriendById 
    }}>
      {children}
    </FriendsContext.Provider>
  );
};