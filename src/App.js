import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="min-h-screen bg-white px-7 lg:px-16 py-7">
      <header className="">
        <Navbar />
      </header>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className="text-center text-xl font-semibold">
          RNS.iD Trial Task (Effi Emmanuel)
        </h1>

        {/* Table to display data */}
        <DataTable />
      </div>
    </div>
  );
}

export default App;
