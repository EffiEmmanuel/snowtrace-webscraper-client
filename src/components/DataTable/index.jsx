import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import moment from "moment";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

export default function DataTable() {
  const [medGasPrices, setMedGasPrices] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // socket.io setup
  useEffect(() => {
    // client-side
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("medGasPricesUpdate", (payload) => {
      console.log("PAYLOAD FROM SOCKET SERVER:", payload);
      setMedGasPrices(payload?.medGasPrices);
    });
  }, [socket]);

  // FUNCTION: This function fetches the med gas prices
  async function fetchMedGasPrices() {
    setIsLoading(true);
    await axios
      .get("http://localhost:3001/api/v1/med-gas-price")
      .then((res) => {
        setIsLoading(false);
        console.log("FETCHED MED GAS PRICES FROM API:", res.data);
        setMedGasPrices(res.data?.medGasPrices);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("An error occured while fetching med gas prices:", err);
      });
  }
  // Fetch the med gas prices on page load
  useEffect(() => {
    fetchMedGasPrices();
  }, []);

  return (
    <div className="mt-11 w-full">
      <div className="w-full rounded-lg border-[1.3px] lg:border-[.3px] p-3 border-gray-100 h-auto">
        <div className="flex items-baseline justify-between">
          <div className="flex items-center gap-x-2">
            <p className="font-medium flex items-center gap-x-1">
              Med Gas Price -{" "}
              {medGasPrices?.length > 0 && (
                <p className="text-xs">
                  {" "}
                  Last Updated -{" "}
                  <ReactTimeAgo
                    date={medGasPrices[0]?.createdAt}
                    locale="en-US"
                  />
                </p>
              )}
            </p>
            <div className="h-2 w-2 rounded-full bg-rnsidBlue"></div>
          </div>
        </div>
        {!isLoading && medGasPrices?.length < 1 && (
          <div className="flex justify-center items-center h-full w-full mb-2 pb-2 text-shuttlelaneBlack mt-4">
            <p className="w-full text-xs text-center">
              No data to show for now. Data will update in the next 30 minutes
            </p>
          </div>
        )}

        {!medGasPrices?.length < 1 && (
          <div className="overflow-x-scroll shuttlelaneScrollbarHoriz shuttlelaneScrollbar">
            {/* Table header */}
            <div className="flex justify-between items-baseline mb-2 border-b-[.3px] border-b-gray-100 text-gray-400 mt-2">
              <p className="min-w-[200px] w-[200px] lg:w-[50%] text-xs">
                Med Gas Price
              </p>
              <p className="min-w-[200px] w-[200px] lg:w-[50%] text-xs">
                Time Stamp
              </p>
            </div>

            {medGasPrices?.map((medGasPrice) => (
              <div className="cursor-pointer flex justify-between items-baseline mb-2 pb-2 border-b-[.3px] border-b-gray-100 text-shuttlelaneBlack mt-4">
                <div className="flex justify-between items-baseline w-full">
                  <p className="min-w-[200px] w-[200px] lg:w-[50%] text-xs">
                    {medGasPrice?.medGasPriceInAVAX}{" "}
                    <span className="text-xs text-gray-500">
                      {medGasPrice?.medGasPriceInUSD}
                    </span>
                  </p>
                  <p className="min-w-[200px] w-[200px] lg:w-[50%] text-xs">
                    {moment(medGasPrice?.createdAt).format("HH:mm:ss A")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
