import { useState } from "react";
import {
  Bookmark,
  BookmarkX,
  Search,
  MapPin,
  Star,
  Calendar,
  Folder,
  LayoutGrid,
  List,
} from "lucide-react";

type SavedKind = "Trip" | "Guide" | "Place";

interface SavedItem {
  id: number;
  kind: SavedKind;
  title: string;
  location: string;
  image: string;
  collection: string;
  meta: string;
  rating?: number;
}

const SAVED_ITEMS: SavedItem[] = [
  {
    id: 1,
    kind: "Trip",
    title: "Rome & the Amalfi Coast",
    location: "Italy",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    collection: "Europe 2026",
    meta: "8 days · Aug 2026",
  },
  {
    id: 2,
    kind: "Guide",
    title: "48 Hours in Lisbon",
    location: "Portugal",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
    collection: "Europe 2026",
    meta: "by Sofia Martins",
    rating: 4.9,
  },
  {
    id: 3,
    kind: "Place",
    title: "Fushimi Inari Shrine",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    collection: "Japan bucket list",
    meta: "Open 24 hours",
  },
  {
    id: 4,
    kind: "Trip",
    title: "Hiking the Swiss Alps",
    location: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    collection: "Someday",
    meta: "5 days · Flexible",
  },
  {
    id: 5,
    kind: "Guide",
    title: "Paris on a Budget",
    location: "France",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    collection: "Europe 2026",
    meta: "by Emma Watson",
    rating: 4.6,
  },
  {
    id: 6,
    kind: "Place",
    title: "Miradouro da Senhora do Monte",
    location: "Lisbon, Portugal",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    collection: "Someday",
    meta: "Best at sunset",
  },
];

const FILTERS = ["All", "Trips", "Guides", "Places"] as const;

const KIND_STYLES: Record<SavedKind, string> = {
  Trip: "bg-[#FEF1EE] text-[#F05A42]",
  Guide: "bg-violet-50 text-violet-600",
  Place: "bg-emerald-50 text-emerald-600",
};

const SavedTripsPage = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [collection, setCollection] = useState("All collections");
  const [query, setQuery] = useState("");
  const [isGrid, setIsGrid] = useState(true);
  const [removed, setRemoved] = useState<number[]>([]);

  const collections = [
    "All collections",
    ...Array.from(new Set(SAVED_ITEMS.map((i) => i.collection))),
  ];

  const visibleItems = SAVED_ITEMS.filter((item) => {
    if (removed.includes(item.id)) return false;
    if (filter !== "All" && `${item.kind}s` !== filter) return false;
    if (collection !== "All collections" && item.collection !== collection)
      return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleRemoved = (id: number) =>
    setRemoved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-6 flex flex-col gap-6 pb-16">
      {/* Page header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#FEF1EE] rounded-2xl flex items-center justify-center text-[#F05A42] shrink-0">
            <Bookmark size={24} />
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight">
              Saved Trips
            </h1>
            <p className="text-stone-500 text-sm sm:text-base">
              {visibleItems.length}{" "}
              {visibleItems.length === 1 ? "item" : "items"} saved for later.
            </p>
          </div>
        </div>

        {/* View toggle - desktop only, grid is the sane default on phones */}
        <div className="hidden sm:flex bg-stone-100 p-1 rounded-lg shrink-0">
          <button
            onClick={() => setIsGrid(true)}
            aria-label="Grid view"
            className={`p-1.5 rounded-md transition-all ${
              isGrid ? "bg-white text-stone-800 shadow-sm" : "text-stone-500"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setIsGrid(false)}
            aria-label="List view"
            className={`p-1.5 rounded-md transition-all ${
              !isGrid ? "bg-white text-stone-800 shadow-sm" : "text-stone-500"
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search saved items..."
              className="w-full bg-white border border-stone-200 pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#F05A42]/30 focus:border-[#F05A42] transition-all"
            />
          </div>

          {/* Collection select */}
          <div className="relative shrink-0">
            <Folder
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            />
            <select
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-white border border-stone-200 pl-10 pr-8 py-2.5 rounded-xl text-sm font-medium text-stone-700 outline-none focus:ring-2 focus:ring-[#F05A42]/30 cursor-pointer"
            >
              {collections.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Kind filter */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                filter === f
                  ? "bg-[#F05A42] text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {visibleItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-16 px-6 bg-white border border-dashed border-stone-300 rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400">
            <Bookmark size={26} />
          </div>
          <h3 className="font-bold text-stone-800">Nothing saved here yet</h3>
          <p className="text-stone-500 text-sm max-w-sm">
            Tap the bookmark icon on any trip, guide, or place to keep it here
            for later.
          </p>
          <button className="mt-2 bg-[#F05A42] text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:bg-[#d94a34] transition-colors active:scale-95">
            Explore trips
          </button>
        </div>
      ) : (
        <div
          className={
            isGrid
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              : "flex flex-col gap-3"
          }
        >
          {visibleItems.map((item) =>
            isGrid ? (
              <article
                key={item.id}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#F05A42]/40 transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${KIND_STYLES[item.kind]}`}
                  >
                    {item.kind}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRemoved(item.id);
                    }}
                    aria-label="Remove from saved"
                    className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-600 hover:text-[#F05A42] shadow-sm transition-colors"
                  >
                    <BookmarkX size={16} />
                  </button>
                </div>

                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-stone-800 leading-snug line-clamp-2 group-hover:text-[#F05A42] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 flex items-center gap-1 truncate">
                    <MapPin size={13} className="shrink-0" /> {item.location}
                  </p>

                  <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-stone-100">
                    <span className="text-xs text-stone-500 truncate flex items-center gap-1">
                      <Calendar size={12} className="shrink-0" /> {item.meta}
                    </span>
                    {item.rating && (
                      <span className="text-xs font-bold text-stone-700 flex items-center gap-1 shrink-0">
                        <Star
                          size={12}
                          className="text-amber-500 fill-amber-500"
                        />
                        {item.rating}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={item.id}
                className="group flex items-center gap-3 sm:gap-4 bg-white border border-stone-200 rounded-2xl p-3 shadow-sm hover:shadow-md hover:border-[#F05A42]/40 transition-all cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex flex-col min-w-0 flex-1 gap-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${KIND_STYLES[item.kind]}`}
                    >
                      {item.kind}
                    </span>
                    <h3 className="font-bold text-stone-800 truncate group-hover:text-[#F05A42] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 flex items-center gap-1 truncate">
                    <MapPin size={13} className="shrink-0" /> {item.location}
                  </p>
                  <span className="text-xs text-stone-400 truncate">
                    {item.collection} · {item.meta}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRemoved(item.id);
                  }}
                  aria-label="Remove from saved"
                  className="p-2 rounded-full text-stone-400 hover:text-[#F05A42] hover:bg-[#FEF1EE] transition-colors shrink-0"
                >
                  <BookmarkX size={18} />
                </button>
              </article>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SavedTripsPage;
