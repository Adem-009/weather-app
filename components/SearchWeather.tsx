'use client';
export default function SearchWeather({
  select,
  setSelect,
  handleSearch,
  onSelectSuggestion,
  suggestions,
}: any) {
  return (
    <form
      className="max-w-2xl w-full  flex justify-around items-center relative "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="w-full text-white max-w-7/10 border-cyan-200 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg  border-2 rounded-lg p-2  "
        placeholder="enter your city"
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      />
      <button className="w-full max-w-2/10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white border-0.5 h-10 rounded-lg cursor-pointer transition-transform duration-150 active:scale-95">
        search
      </button>
      {suggestions && suggestions.length > 0 && (
        <ul className="absolute top-full left-5 w-full max-w-7/10 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
          {suggestions.map((city:any) => (
            <li
              key={city.id}
              onClick={() => onSelectSuggestion(city)}
              className="px-4 py-2 text-white hover:bg-white/20 cursor-pointer border-b border-white/10 last:border-none text-right"
            >
              {city.name} - {city.country}{' '}
              {city.admin1 ? `(${city.admin1})` : ''}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
