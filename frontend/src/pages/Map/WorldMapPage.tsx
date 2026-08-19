import { useState } from "react";
import { Filter, MapPin, User, Users, X } from "lucide-react";
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
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const filteredMarkers = mockMarkers.filter((m) => {
    if (filter === "all") return true;
    return m.type === filter;
  });

  const filterOptions = [
    { key: "all", label: "All Destinations", icon: <MapPin size={18} /> },
    { key: "me", label: "My Trips", icon: <User size={18} /> },
    { key: "friend", label: "Friends' Trips", icon: <Users size={18} /> },
  ];

  return (
    <div className="flex h-full w-full bg-[#f8f5f2] relative overflow-hidden">
      {/* Mobile backdrop */}
      {isFilterPanelOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setIsFilterPanelOpen(false)}
        />
      )}

      {/* Sidebar - Left */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-[85%] max-w-[300px] md:w-[260px] lg:w-[300px] bg-white border-r border-stone-200 shadow-sm md:shadow-none flex flex-col z-30 md:z-10 shrink-0 transition-transform duration-300 ${
          isFilterPanelOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 sm:p-6 border-b border-stone-100 flex items-start justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-800 tracking-tight flex items-center gap-2">
              <Filter size={24} className="text-[#F05A42]" /> Filters
            </h1>
            <p className="text-stone-500 text-sm mt-2">
              Explore your trips and your friends' adventures around the
              world.
            </p>
          </div>
          <button
            className="md:hidden p-2 -mr-2 text-stone-500 hover:text-stone-800"
            onClick={() => setIsFilterPanelOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => {
                setFilter(option.key);
                setIsFilterPanelOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all font-semibold flex items-center gap-3 ${
                filter === option.key
                  ? "bg-[#FEF1EE] text-[#F05A42] border border-[#F05A42]/20"
                  : "bg-white text-stone-600 hover:bg-stone-50 border border-transparent"
              }`}
            >
              {option.icon} {option.label}
            </button>
          ))}
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
            minZoom={2}
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

        {/* Mobile filter toggle */}
        <button
          onClick={() => setIsFilterPanelOpen(true)}
          className="md:hidden absolute top-4 left-4 bg-white shadow-md border border-stone-200 rounded-xl px-4 py-2.5 flex items-center gap-2 font-semibold text-stone-700 z-10"
        >
          <Filter size={18} className="text-[#F05A42]" /> Filters
        </button>

        {/* Development Note */}
        <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-6 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-stone-600 text-xs sm:text-sm font-medium shadow-sm border border-stone-200 z-10">
          Google Maps (Development Mode)
        </div>
      </div>
    </div>
  );
};

export default WorldMapPage;
