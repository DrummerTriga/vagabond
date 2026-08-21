import { useState } from "react";
import {
  TrendingUp,
  MapPin,
  Flame,
  ArrowUpRight,
  Star,
  Users,
  Hash,
} from "lucide-react";
import userIcon from "../../assets/userIcon.png";

const RANGES = ["Today", "This Week", "This Month"];

const TRENDING_DESTINATIONS = [
  {
    rank: 1,
    name: "Lisbon",
    country: "Portugal",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
    travellers: "12.4k",
    growth: "+38%",
    tag: "Best for food",
  },
  {
    rank: 2,
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    travellers: "9.8k",
    growth: "+24%",
    tag: "Temples & culture",
  },
  {
    rank: 3,
    name: "Rome",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    travellers: "8.1k",
    growth: "+19%",
    tag: "History",
  },
  {
    rank: 4,
    name: "Swiss Alps",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    travellers: "6.5k",
    growth: "+15%",
    tag: "Hiking",
  },
];

const TRENDING_GUIDES = [
  {
    title: "48 Hours in Lisbon",
    author: "Sofia Martins",
    rating: 4.9,
    saves: "2.1k",
    price: "Free",
  },
  {
    title: "Hidden Temples of Kyoto",
    author: "Yuki Tanaka",
    rating: 5.0,
    saves: "1.8k",
    price: "35 CHF",
  },
  {
    title: "Alps in 5 Days",
    author: "David Chen",
    rating: 4.7,
    saves: "1.2k",
    price: "20 CHF",
  },
];

const TRENDING_TAGS = [
  { tag: "slowtravel", posts: "18.2k" },
  { tag: "solotrip", posts: "14.7k" },
  { tag: "vanlife", posts: "11.3k" },
  { tag: "hiddengems", posts: "9.1k" },
  { tag: "streetfood", posts: "7.4k" },
];

const RISING_CREATORS = [
  { name: "Marco Rossi", location: "Italy", followers: "4.2k" },
  { name: "Emma Watson", location: "UK", followers: "3.6k" },
  { name: "Miguel Alvarez", location: "Spain", followers: "2.9k" },
];

const TrendingPage = () => {
  const [range, setRange] = useState("This Week");

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-6 flex flex-col gap-8 pb-16">
      {/* Page header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#FEF1EE] rounded-2xl flex items-center justify-center text-[#F05A42] shrink-0">
            <TrendingUp size={24} />
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight">
              Trending
            </h1>
            <p className="text-stone-500 text-sm sm:text-base">
              What the Vagabond community is exploring right now.
            </p>
          </div>
        </div>

        {/* Range filter */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                range === r
                  ? "bg-[#F05A42] text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Trending destinations */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-bold text-lg sm:text-xl text-stone-800 flex items-center gap-2">
            <Flame size={20} className="text-[#F05A42]" /> Top Destinations
          </h2>
          <button className="text-sm font-semibold text-[#F05A42] hover:underline whitespace-nowrap">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRENDING_DESTINATIONS.map((d) => (
            <article
              key={d.rank}
              className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#F05A42]/40 transition-all cursor-pointer"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 text-stone-800 font-bold text-sm flex items-center justify-center shadow-sm">
                  {d.rank}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#F05A42] text-white text-xs font-bold shadow-sm">
                  {d.growth}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-lg leading-tight truncate">
                    {d.name}
                  </h3>
                  <p className="text-xs text-white/80 flex items-center gap-1 truncate">
                    <MapPin size={12} className="shrink-0" /> {d.country}
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 bg-stone-100 text-stone-600 rounded-full truncate">
                  {d.tag}
                </span>
                <span className="text-xs text-stone-500 font-medium flex items-center gap-1 whitespace-nowrap shrink-0">
                  <Users size={14} /> {d.travellers}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guides + tags */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trending guides */}
        <section className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="font-bold text-lg sm:text-xl text-stone-800 flex items-center gap-2">
            <Star size={20} className="text-[#F05A42]" /> Trending Guides
          </h2>

          <div className="flex flex-col gap-3">
            {TRENDING_GUIDES.map((g) => (
              <div
                key={g.title}
                className="flex items-center gap-3 sm:gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:border-[#F05A42]/40 hover:shadow-md transition-all cursor-pointer group"
              >
                <img
                  src={userIcon}
                  alt={g.author}
                  className="w-11 h-11 rounded-full border border-stone-200 shrink-0"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-bold text-stone-800 truncate group-hover:text-[#F05A42] transition-colors">
                    {g.title}
                  </span>
                  <span className="text-xs text-stone-500 truncate">
                    by {g.author} · {g.saves} saves
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <Star size={12} className="text-amber-500 fill-amber-500" />
                    {g.rating}
                  </span>
                  <span className="text-xs font-semibold text-[#F05A42]">
                    {g.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Side column */}
        <div className="flex flex-col gap-6">
          {/* Tags */}
          <section className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <h2 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
              <Hash size={18} className="text-[#F05A42]" /> Popular Tags
            </h2>
            <div className="flex flex-col gap-2">
              {TRENDING_TAGS.map((t) => (
                <button
                  key={t.tag}
                  className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors text-left group"
                >
                  <span className="font-semibold text-stone-700 text-sm truncate group-hover:text-[#F05A42] transition-colors">
                    #{t.tag}
                  </span>
                  <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
                    {t.posts}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Rising creators */}
          <section className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <h2 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
              <ArrowUpRight size={18} className="text-[#F05A42]" /> Rising
              Creators
            </h2>
            <div className="flex flex-col gap-4">
              {RISING_CREATORS.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={userIcon}
                    alt={c.name}
                    className="w-10 h-10 rounded-full border border-stone-200 group-hover:border-[#F05A42] transition-colors shrink-0"
                  />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-semibold text-stone-700 text-sm truncate group-hover:text-[#F05A42] transition-colors">
                      {c.name}
                    </span>
                    <span className="text-xs text-stone-500 truncate">
                      {c.location} · {c.followers} followers
                    </span>
                  </div>
                  <button className="text-xs font-bold text-[#F05A42] hover:bg-[#FEF1EE] px-3 py-1.5 rounded-full transition-colors shrink-0">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
