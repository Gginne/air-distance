import { useMemo, useState } from "react";
import useAddressLookup from "../../hooks/useAddressLookup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function AddressLookup({ onSelectPointA, onSelectPointB }) {
  const [address, setAddress] = useState("");
  const addressLookup = useAddressLookup();

  const handleSearch = () => {
    addressLookup.doRequest(address);
  };

  const addresses = useMemo(
    () => addressLookup.data ?? [],
    [addressLookup.data]
  );

  return (
    <>
      <div class="flex">
        <input
          type="text"
          className="bg-base-700 shadow appearance-none rounded w-full p-3 text-gray-300 mx-3 leading-tight focus:outline-none focus:shadow-outline"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address Lookup"
        />
        <button
          class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <hr className="my-5 bg-base-100" />

      <div className="overflow-y-scroll max-h-96">
        {addressLookup.loading && <div>Loading...</div>}

        {addresses.map((address) => (
          <div key={address.place_id} className="flex flex-col shadow-md mb-3 p-3 bg-base-700 border-none text-white rounded">
            <h4 className="mb-3">{address.display_name}</h4>
            <div className="flex justify-between">
              <p>{address.lat} , {address.lon}{" "}</p>
              <div>
                <button className="mx-1 bg-orange-500 hover:bg-orange-700 text-sm py-1 px-2 rounded-xl" onClick={() => onSelectPointA(address.lat+','+address.lon)}>
                  Point A
                </button>
                <button className="mx-1 bg-orange-500 hover:bg-orange-700 text-sm py-1 px-2 rounded-xl" onClick={() => onSelectPointB(address.lat+','+address.lon)}>
                  Point B
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
