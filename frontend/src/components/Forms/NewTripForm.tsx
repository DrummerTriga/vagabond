import { useState } from "react";
import {
  Plane,
  MapPin,
  Users,
  EyeOff,
  Eye,
  Plus,
  Trash2,
  Home,
  Utensils,
  Activity as ActivityIcon,
} from "lucide-react";

// Types
type Currency = "€" | "$" | "£" | "¥";

interface Accommodation {
  id: string;
  name: string;
  currency: Currency;
  price: string;
}

interface Restaurant {
  id: string;
  name: string;
  currency: Currency;
  price: string;
}

interface Activity {
  id: string;
  name: string;
  currency: Currency;
  price: string;
}

interface Destination {
  id: string;
  cityName: string;
  accommodations: Accommodation[];
  restaurants: Restaurant[];
  activities: Activity[];
}

const CURRENCIES: Currency[] = ["€", "$", "£", "¥"];

const NewTripForm = () => {
  // General Trip State
  const [tripTitle, setTripTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hideDates, setHideDates] = useState(false);
  const [companions, setCompanions] = useState(""); // Simplified to a single string for now

  // Destinations State
  const [destinations, setDestinations] = useState<Destination[]>([
    {
      id: "dest-1",
      cityName: "",
      accommodations: [],
      restaurants: [],
      activities: [],
    },
  ]);

  // Helpers
  const addDestination = () => {
    setDestinations([
      ...destinations,
      {
        id: `dest-${Date.now()}`,
        cityName: "",
        accommodations: [],
        restaurants: [],
        activities: [],
      },
    ]);
  };

  const removeDestination = (id: string) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  const updateDestination = (
    id: string,
    field: keyof Destination,
    value: any
  ) => {
    setDestinations(
      destinations.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  const addAccommodation = (destId: string) => {
    setDestinations(
      destinations.map((d) => {
        if (d.id === destId) {
          return {
            ...d,
            accommodations: [
              ...d.accommodations,
              { id: `acc-${Date.now()}`, name: "", currency: "€", price: "" },
            ],
          };
        }
        return d;
      })
    );
  };

  const removeAccommodation = (destId: string, accId: string) => {
    setDestinations(
      destinations.map((d) => {
        if (d.id === destId) {
          return {
            ...d,
            accommodations: d.accommodations.filter((a) => a.id !== accId),
          };
        }
        return d;
      })
    );
  };

  const addRestaurant = (destId: string) => {
    setDestinations(
      destinations.map((d) => {
        if (d.id === destId) {
          return {
            ...d,
            restaurants: [
              ...d.restaurants,
              { id: `rest-${Date.now()}`, name: "", currency: "€", price: "" },
            ],
          };
        }
        return d;
      })
    );
  };

  const removeRestaurant = (destId: string, restId: string) => {
    setDestinations(
      destinations.map((d) => {
        if (d.id === destId) {
          return {
            ...d,
            restaurants: d.restaurants.filter((r) => r.id !== restId),
          };
        }
        return d;
      })
    );
  };

  const addActivity = (destId: string) => {
    setDestinations(
      destinations.map((d) => {
        if (d.id === destId) {
          return {
            ...d,
            activities: [
              ...d.activities,
              { id: `act-${Date.now()}`, name: "", currency: "€", price: "" },
            ],
          };
        }
        return d;
      })
    );
  };

  const removeActivity = (destId: string, actId: string) => {
    setDestinations(
      destinations.map((d) => {
        if (d.id === destId) {
          return {
            ...d,
            activities: d.activities.filter((a) => a.id !== actId),
          };
        }
        return d;
      })
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 flex items-center gap-3">
        <div className="w-12 h-12 bg-[#FEF1EE] rounded-xl flex items-center justify-center text-[#F05A42] shadow-sm">
          <Plane size={24} />
        </div>
        Plan a New Trip
      </h2>

      <form className="flex flex-col gap-10">
        {/* --- SECTION 1: GENERAL INFO --- */}
        <section className="flex flex-col gap-6 bg-stone-50/50 p-6 rounded-2xl border border-stone-100">
          <h3 className="font-bold text-lg text-stone-800 border-b border-stone-200 pb-2">
            General Details
          </h3>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-stone-700">Trip Title</label>
            <input
              type="text"
              value={tripTitle}
              onChange={(e) => setTripTitle(e.target.value)}
              placeholder="e.g. Japan Spring 2025"
              className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all text-lg font-medium"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-stone-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all text-stone-600"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-stone-700">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all text-stone-600"
              />
            </div>
          </div>

          {/* Privacy & Companions */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 flex flex-col gap-2 w-full">
              <label className="font-semibold text-stone-700 flex items-center gap-2">
                <Users size={18} /> Travel Companions (Optional)
              </label>
              <input
                type="text"
                value={companions}
                onChange={(e) => setCompanions(e.target.value)}
                placeholder="e.g. @maria, @david"
                className="w-full bg-white border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2 md:mt-6">
              <button
                type="button"
                onClick={() => setHideDates(!hideDates)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all font-semibold ${
                  hideDates
                    ? "bg-stone-800 text-white border-stone-800 shadow-sm"
                    : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                }`}
              >
                {hideDates ? <EyeOff size={18} /> : <Eye size={18} />}
                {hideDates ? "Dates Hidden" : "Hide Dates"}
              </button>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: DESTINATIONS --- */}
        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-end border-b border-stone-200 pb-2">
            <h3 className="font-bold text-lg text-stone-800 flex items-center gap-2">
              <MapPin className="text-[#F05A42]" size={20} /> Destinations &
              Itinerary
            </h3>
          </div>

          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className="flex flex-col gap-6 p-5 md:p-6 bg-white border border-stone-200 rounded-2xl shadow-sm relative group"
            >
              {/* Remove Destination Button */}
              {destinations.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDestination(dest.id)}
                  className="absolute -top-3 -right-3 bg-red-50 border border-red-200 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full shadow-sm transition-all z-10"
                >
                  <Trash2 size={16} />
                </button>
              )}

              <div className="flex flex-col gap-2">
                <label className="font-bold text-stone-800 text-sm uppercase tracking-wider text-[#F05A42]">
                  Destination {index + 1}
                </label>
                <input
                  type="text"
                  value={dest.cityName}
                  onChange={(e) =>
                    updateDestination(dest.id, "cityName", e.target.value)
                  }
                  placeholder="e.g. Tokyo, Osaka, Rome..."
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F05A42]/30 transition-all font-semibold text-lg"
                />
              </div>

              {/* Accommodations */}
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-stone-100">
                <h4 className="font-semibold text-stone-700 flex items-center gap-2">
                  <Home size={16} className="text-stone-400" /> Accommodations
                </h4>
                {dest.accommodations.map((acc, aIndex) => (
                  <div
                    key={acc.id}
                    className="flex flex-col md:flex-row gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200 items-start md:items-center relative"
                  >
                    <input
                      type="text"
                      placeholder="Hotel name"
                      className="flex-1 bg-white border border-stone-200 px-3 py-2 rounded-lg outline-none text-sm w-full"
                    />
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <select className="bg-white border border-stone-200 px-2 py-2 rounded-lg outline-none text-sm font-medium">
                        {CURRENCIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="relative flex-1 md:w-28">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full bg-white border border-stone-200 pl-3 pr-10 py-2 rounded-lg outline-none text-sm"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 font-medium">
                          /night
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAccommodation(dest.id, acc.id)}
                        className="p-2 text-stone-400 hover:text-red-500 bg-white border border-stone-200 hover:border-red-200 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addAccommodation(dest.id)}
                  className="text-sm font-semibold text-[#F05A42] hover:text-[#d94a34] self-start flex items-center gap-1 transition-colors mt-1"
                >
                  <Plus size={16} /> Add Hotel
                </button>
              </div>

              {/* Restaurants */}
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-stone-100 mt-2">
                <h4 className="font-semibold text-stone-700 flex items-center gap-2">
                  <Utensils size={16} className="text-stone-400" /> Restaurants
                  & Dining
                </h4>
                {dest.restaurants.map((rest, rIndex) => (
                  <div
                    key={rest.id}
                    className="flex flex-col md:flex-row gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200 items-start md:items-center relative"
                  >
                    <input
                      type="text"
                      placeholder="Restaurant name"
                      className="flex-1 bg-white border border-stone-200 px-3 py-2 rounded-lg outline-none text-sm w-full"
                    />
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <select className="bg-white border border-stone-200 px-2 py-2 rounded-lg outline-none text-sm font-medium">
                        {CURRENCIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="relative flex-1 md:w-32">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full bg-white border border-stone-200 pl-3 pr-12 py-2 rounded-lg outline-none text-sm"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 font-medium">
                          /person
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeRestaurant(dest.id, rest.id)}
                        className="p-2 text-stone-400 hover:text-red-500 bg-white border border-stone-200 hover:border-red-200 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addRestaurant(dest.id)}
                  className="text-sm font-semibold text-[#F05A42] hover:text-[#d94a34] self-start flex items-center gap-1 transition-colors mt-1"
                >
                  <Plus size={16} /> Add Restaurant
                </button>
              </div>

              {/* Activities & Experiences */}
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-stone-100 mt-2">
                <h4 className="font-semibold text-stone-700 flex items-center gap-2">
                  <ActivityIcon size={16} className="text-stone-400" />{" "}
                  Activities & Experiences
                </h4>
                {dest.activities.map((act, actIndex) => (
                  <div
                    key={act.id}
                    className="flex flex-col md:flex-row gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200 items-start md:items-center relative"
                  >
                    <input
                      type="text"
                      placeholder="e.g. Scuba diving, Museum tour..."
                      className="flex-1 bg-white border border-stone-200 px-3 py-2 rounded-lg outline-none text-sm w-full"
                    />
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <select className="bg-white border border-stone-200 px-2 py-2 rounded-lg outline-none text-sm font-medium">
                        {CURRENCIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="relative flex-1 md:w-32">
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full bg-white border border-stone-200 pl-3 pr-12 py-2 rounded-lg outline-none text-sm"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 font-medium">
                          /person
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeActivity(dest.id, act.id)}
                        className="p-2 text-stone-400 hover:text-red-500 bg-white border border-stone-200 hover:border-red-200 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addActivity(dest.id)}
                  className="text-sm font-semibold text-[#F05A42] hover:text-[#d94a34] self-start flex items-center gap-1 transition-colors mt-1"
                >
                  <Plus size={16} /> Add Activity
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addDestination}
            className="w-full border-2 border-dashed border-stone-300 text-stone-500 font-bold py-4 rounded-2xl hover:bg-stone-50 hover:text-[#F05A42] hover:border-[#F05A42] transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Add Another Destination
          </button>
        </section>

        {/* --- SUBMIT --- */}
        <div className="border-t border-stone-200 pt-8 flex justify-end">
          <button
            type="button"
            className="w-full md:w-auto bg-[#F05A42] text-white font-bold py-3 px-10 rounded-xl hover:bg-[#d94a34] transition-colors shadow-sm text-lg"
          >
            Create Trip
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTripForm;
