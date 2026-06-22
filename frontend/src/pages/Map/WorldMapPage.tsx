import { useState } from "react";
import { Filter, MapPin, User, Users } from "lucide-react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const mockMarkers = [
  {
    id: 1,
    name: "Tokyo Trip",
    position: { lat: 35.6895, lng: 139.6917 },
    type: "me",
  },
  {
    id: 2,
    name: "Rome Escape",
    position: { lat: 41.9028, lng: 12.4964 },
    type: "me",
  },
  {
    id: 3,
    name: "Maria in Lisbon",
    position: { lat: 38.7223, lng: -9.1393 },
    type: "friend",
  },
  {
    id: 4,
    name: "David in NY",
    position: { lat: 40.7128, lng: -74.006 },
    type: "friend",
  },
];

const WorldMapPage = () => {
  const [filter, setFilter] = useState("all");

  const filteredMarkers = mockMarkers.filter((m) => {
    if (filter === "all") return true;
    return m.type === filter;
  });

  return (
    <div className="flex h-full w-full bg-[#f8f5f2]">
      {/* Sidebar - Left */}
      <div className="w-[300px] h-full bg-white border-r border-stone-200 shadow-sm flex flex-col z-10 shrink-0 relative">
        <div className="p-6 border-b border-stone-100">
          <h1 className="text-2xl font-bold text-stone-800 tracking-tight flex items-center gap-2">
            <Filter size={24} className="text-[#F05A42]" /> Filters
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Explore your trips and your friends' adventures around the world.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold flex items-center gap-3 ${
              filter === "all"
                ? "bg-[#FEF1EE] text-[#F05A42] border border-[#F05A42]/20"
                : "bg-white text-stone-600 hover:bg-stone-50 border border-transparent"
            }`}
          >
            <MapPin size={18} /> All Destinations
          </button>

          <button
            onClick={() => setFilter("me")}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold flex items-center gap-3 ${
              filter === "me"
                ? "bg-[#FEF1EE] text-[#F05A42] border border-[#F05A42]/20"
                : "bg-white text-stone-600 hover:bg-stone-50 border border-transparent"
            }`}
          >
            <User size={18} /> My Trips
          </button>

          <button
            onClick={() => setFilter("friend")}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold flex items-center gap-3 ${
              filter === "friend"
                ? "bg-[#FEF1EE] text-[#F05A42] border border-[#F05A42]/20"
                : "bg-white text-stone-600 hover:bg-stone-50 border border-transparent"
            }`}
          >
            <Users size={18} /> Friends' Trips
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 h-full relative z-0">
        <APIProvider apiKey={""}>
          {" "}
          {/* Empty string enables developer mode */}
          <Map
            defaultZoom={3}
            defaultCenter={{ lat: 20, lng: 0 }}
            mapId="DEMO_MAP_ID"
            minZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            className="w-full h-full"
          >
            {filteredMarkers.map((marker) => (
              <AdvancedMarker
                key={marker.id}
                position={marker.position}
                title={marker.name}
              >
                <Pin
                  background={marker.type === "me" ? "#F05A42" : "#8B5CF6"}
                  borderColor={marker.type === "me" ? "#b53e2a" : "#6036b5"}
                  glyphColor={"#ffffff"}
                />
              </AdvancedMarker>
            ))}
          </Map>
        </APIProvider>

        {/* Development Note */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-stone-600 text-sm font-medium shadow-sm border border-stone-200 z-10">
          Google Maps (Development Mode)
        </div>
      </div>
    </div>
  );
};

export default WorldMapPage;
