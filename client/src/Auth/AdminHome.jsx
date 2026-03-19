import React from "react";
import { FaUsers, FaBriefcase, FaEnvelope, FaChartBar } from "react-icons/fa";

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 sm:p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Overview of your platform performance
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Total Users</p>
            <FaUsers className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2">1,245</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Jobs Posted</p>
            <FaBriefcase className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2">32</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Messages</p>
            <FaEnvelope className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2">89</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Applications</p>
            <FaChartBar className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mt-2">210</h2>
        </div>

      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - SYSTEM STATUS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            System Overview
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-[#F3F4F6] p-5 rounded-xl">
              <p className="text-gray-500 text-sm">New Users Today</p>
              <h3 className="text-xl font-bold mt-1">+12</h3>
            </div>

            <div className="bg-[#F3F4F6] p-5 rounded-xl">
              <p className="text-gray-500 text-sm">New Jobs Posted</p>
              <h3 className="text-xl font-bold mt-1">+5</h3>
            </div>

            <div className="bg-[#F3F4F6] p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Unread Messages</p>
              <h3 className="text-xl font-bold mt-1">8</h3>
            </div>

            <div className="bg-[#F3F4F6] p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Applications Today</p>
              <h3 className="text-xl font-bold mt-1">+20</h3>
            </div>

          </div>

        </div>

        {/* RIGHT - ACTION PANEL */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button className="w-full bg-[#B91C1C] text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition">
              Add New Job
            </button>

            <button className="w-full bg-[#F3F4F6] py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              View Applications
            </button>

            <button className="w-full bg-[#F3F4F6] py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Manage Users
            </button>

            <button className="w-full bg-[#F3F4F6] py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Settings
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminHome;