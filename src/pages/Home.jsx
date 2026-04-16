// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { useFriends } from "../context/FriendsContext";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const { friends, loading } = useFriends();
  const navigate = useNavigate();

  const summaryCards = [
    { title: "Total Friends", value: friends.length, color: "bg-blue-500" },
    {
      title: "Overdue",
      value: friends.filter((f) => f.status === "overdue").length,
      color: "bg-red-500",
    },
    {
      title: "Almost Due",
      value: friends.filter((f) => f.status === "almost due").length,
      color: "bg-yellow-500",
    },
    {
      title: "On Track",
      value: friends.filter((f) => f.status === "on-track").length,
      color: "bg-green-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn py-6 bg-teal-800 hover:bg-teal-700 text-white font-semibold  px-6 rounded-lg inline-flex items-center space-x-2 transition-colors">
          <UserPlusIcon className="w-5 h-5" />
          <span>Add a Friend</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border-l-4 border-l-blue-500"
          >
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-3xl font-bold text-gray-800">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Friends Grid */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => navigate(`/friend/${friend.id}`)}
            className="cursor-pointer"
          >
            <FriendCard friend={friend} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
