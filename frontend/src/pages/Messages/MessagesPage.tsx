import { useState } from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Info,
  Send,
  Image as ImageIcon,
  Paperclip,
  Smile,
} from "lucide-react";

// Mock Data
const MOCK_CHATS = [
  {
    id: "1",
    name: "Maria Silva",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    lastMessage: "Are we still meeting at the Colosseum tomorrow?",
    timestamp: "10:30 AM",
    unread: 2,
    isOnline: true,
    isArchived: false,
  },
  {
    id: "2",
    name: "David Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    lastMessage: "That sounds like a great plan! See you there.",
    timestamp: "Yesterday",
    unread: 0,
    isOnline: false,
    isArchived: false,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    lastMessage: "Can you send me the link to that guide?",
    timestamp: "Tuesday",
    unread: 1,
    isOnline: true,
    isArchived: false,
  },
  {
    id: "4",
    name: "Tokyo Explorers Group",
    avatar:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=150&q=80",
    lastMessage: "Kenji: I'll book the tickets for the bullet train.",
    timestamp: "Monday",
    unread: 0,
    isOnline: false,
    isArchived: false,
  },
  {
    id: "5",
    name: "Airbnb Host - Rome",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    lastMessage: "Your booking is confirmed. Have a safe flight!",
    timestamp: "Last week",
    unread: 0,
    isOnline: false,
    isArchived: true,
  },
];

const MOCK_MESSAGES = [
  {
    id: "1",
    senderId: "me",
    text: "Hey Maria! How are your travel plans coming along?",
    timestamp: "10:15 AM",
  },
  {
    id: "2",
    senderId: "1",
    text: "Hi Gil! Everything is booked. I arrive in Rome on Friday.",
    timestamp: "10:20 AM",
  },
  {
    id: "3",
    senderId: "me",
    text: "Awesome! I've been looking at some tours for us.",
    timestamp: "10:25 AM",
  },
  {
    id: "4",
    senderId: "1",
    text: "Are we still meeting at the Colosseum tomorrow?",
    timestamp: "10:30 AM",
  },
];

const MessagesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeChatId, setActiveChatId] = useState("1");
  const [messageText, setMessageText] = useState("");

  const filteredChats = MOCK_CHATS.filter((chat) => {
    if (activeFilter === "Unread") return chat.unread > 0;
    if (activeFilter === "Archived") return chat.isArchived;
    return !chat.isArchived; // 'All' shows non-archived
  });

  const activeChat = MOCK_CHATS.find((c) => c.id === activeChatId);

  return (
    <div className="flex h-full w-full max-w-7xl mx-auto bg-white border-x border-stone-200 shadow-sm">
      {/* Left Panel: Chat List */}
      <div className="w-full md:w-1/3 lg:w-[350px] flex flex-col border-r border-stone-200">
        {/* Header & Tabs */}
        <div className="p-5 border-b border-stone-100 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
              Messages
            </h1>
            <button className="text-stone-500 hover:text-stone-800 transition-colors p-2 hover:bg-stone-100 rounded-full">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-stone-100 text-stone-700 pl-10 pr-4 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {["All", "Unread", "Archived"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === tab
                    ? "bg-[#F05A42] text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* List of Chats */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filteredChats.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-400 p-6 text-center">
              <p>No conversations found.</p>
            </div>
          ) : (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`flex items-start gap-3 p-4 border-b border-stone-50 cursor-pointer transition-colors ${
                  activeChatId === chat.id
                    ? "bg-[#FEF1EE] border-l-4 border-l-[#F05A42]"
                    : "hover:bg-stone-50 border-l-4 border-l-transparent"
                }`}
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                {/* Chat Preview */}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3
                      className={`font-bold text-sm truncate ${chat.unread > 0 ? "text-stone-900" : "text-stone-700"}`}
                    >
                      {chat.name}
                    </h3>
                    <span
                      className={`text-xs whitespace-nowrap ml-2 ${chat.unread > 0 ? "text-[#F05A42] font-bold" : "text-stone-400"}`}
                    >
                      {chat.timestamp}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p
                      className={`text-sm truncate ${chat.unread > 0 ? "text-stone-800 font-semibold" : "text-stone-500"}`}
                    >
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="shrink-0 ml-2 bg-[#F05A42] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Panel: Active Chat */}
      <div className="hidden md:flex flex-col flex-1 bg-stone-50/30">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-stone-200 flex justify-between items-center bg-white shadow-sm z-10">
              <div className="flex items-center gap-3">
                <img
                  src={activeChat.avatar}
                  alt={activeChat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold text-stone-800">
                    {activeChat.name}
                  </h2>
                  <span className="text-xs text-stone-500">
                    {activeChat.isOnline ? "Active now" : "Offline"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <Phone size={20} />
                </button>
                <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <Video size={20} />
                </button>
                <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <Info size={20} />
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {MOCK_MESSAGES.map((msg) => {
                const isMe = msg.senderId === "me";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[70%] ${isMe ? "self-end items-end" : "self-start items-start"}`}
                  >
                    <div
                      className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm ${
                        isMe
                          ? "bg-[#F05A42] text-white rounded-br-sm"
                          : "bg-white border border-stone-200 text-stone-800 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-stone-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-stone-200">
              <div className="flex items-center gap-2 bg-stone-100 p-2 rounded-2xl">
                <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
                  <Smile size={20} />
                </button>
                <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
                  <ImageIcon size={20} />
                </button>
                <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="flex-1 bg-transparent px-2 outline-none text-stone-800 placeholder:text-stone-400 text-sm"
                  placeholder="Type a message..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && messageText.trim() !== "") {
                      setMessageText("");
                    }
                  }}
                />
                <button
                  className={`p-2 rounded-xl transition-all ${
                    messageText.trim() !== ""
                      ? "bg-[#F05A42] text-white shadow-sm hover:bg-[#d94a34]"
                      : "bg-stone-200 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  <Send
                    size={18}
                    className={messageText.trim() !== "" ? "ml-0.5" : ""}
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-stone-400">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
