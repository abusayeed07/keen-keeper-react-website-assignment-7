// src/components/FriendCard.jsx
const statusColors = {
  overdue: 'bg-red-100 text-red-800',
  'almost due': 'bg-yellow-100 text-yellow-800',
  'on-track': 'bg-green-100 text-green-800',
};

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{friend.name}</h3>
            <p className="text-xs text-gray-500">{friend.email}</p>
          </div>
        </div>
        
        <div className="mb-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Days since contact:</span> {friend.days_since_contact}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {friend.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-base-200 text-gray-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[friend.status]}`}>
          {friend.status}
        </div>
      </div>
    </div>
  );
};

export default FriendCard;