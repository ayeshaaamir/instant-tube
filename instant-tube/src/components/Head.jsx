import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOTUBE_SEARCH_API } from "../utils/constants";
import { Search } from "lucide-react";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOTUBE_SEARCH_API + searchQuery);
    const response = await data.json();
    setSuggestions(response[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAV1BMVEX///8AAADy8vKioqL5+fkrKyt0dHTQ0NDT09O5ubnr6+upqanDw8NeXl7c3Nzi4uI2NjaWlpZFRUVsbGzKyso+Pj4XFxdSUlJlZWWNjY2CgoJ7e3sLCws67o8hAAACSElEQVR4nO3dC26kMAyAYRZmBxhew7RTOo/7n3OhVbXbSjGJtJJj6/9OYCshgWBMUQAAAAAAAAAAAFh1KLN2SEjl1MzD+Xe2zsPcnGJTaS+/sndpo9KpX7QDjfNS7+fSn7WjjHXu93J5NZPLms2rnMs4aEeYYhjFZCrt+NJUUi7NVTu8NNdGSKbVji5VG87ldNQOLtUxvNuMxmbZOs/CS0CjHVu68EVTa4eWLnwb4CqZ5k07tlRv4Wk2LdrBpVqmYDLlTTu4VLcymIyrTbOY3rWjS/MenmX2hkYamKI4mLpqbjsHG5Oh27OjOMk+srlrxxjrvpvLuj53Jm43r52wKv+jrrLfPJcq4mzm02Gq267KVtfWU8qZ5ppQxpISAQAAAAAAAP6frOsakw7OyrGfH8dsPeZ+jDtoXgelfzy1z5L3PB991PCMs3akcWa52OxDbaZ8bth9EdBk/zbjr0WqNiusFWkJBVqbTju+NJ2Uy2hokm0WaREwVgYgFgKUZt40f7mHN8/JwEcA313Cr8+b7Hf+n56UNeZKKGv0NM1cLQCulmZXm6av2xlXN5q+HgFcPZz5emz2daDh66ipcHUI+Dk82kewEuoaAQAAAAAAoEX7k19JWiKOPtR29Am9p+YGntpOeGoI4qpVi7FCALGJjqv2RsYGRi5rNHXFbISWYK6atblqo+eqEtBVMq6agrpq12qrQGsjFWl52jR9NZ921RbcV8N2V630ff3kwNfvJ3z9GKRw9cuWTdZVjdQ1AgAAAAAAAAAAy/4Aij1cOb4TfnMAAAAASUVORK5CYII="
          alt="Menu Logo"
        />
        <img
          className="h-8 cursor-pointer"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="YouTube Icon"
        />
      </div>

      <div className="relative w-1/2">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-600"
            type="text"
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="ml-2 text-gray-600">
            <img
              className="h-6"
              src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
              alt="Search"
            />
          </button>
        </div>

        {showSuggestions && (
          <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-50">
            {suggestions &&
              suggestions.map((suggestion) => {
                return (
                  <li
                    key={suggestion}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    {suggestion}
                  </li>
                );
              })}
          </ul>
        )}
      </div>
      <div className="flex items-center space-x-4 cursor-pointer">
        <img
          className="h-8 w-8 rounded-full"
          src="data:image/png;base64,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"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Head;
