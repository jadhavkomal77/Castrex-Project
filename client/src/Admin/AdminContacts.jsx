import { useState } from "react";
import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from "../redux/apis/contactApi";

export default function AdminContacts() {

  const { data, isLoading } = useGetAllContactsQuery();
  const contacts = data?.data || [];

  const [deleteContact] = useDeleteContactMutation();

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  if (isLoading)
    return <div className="p-10 text-center">Loading contacts...</div>;

  const filtered = contacts.filter(
    (item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.phone?.includes(search)
  );

  return (
    <div className="p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          📩 Contact Requests
        </h2>

        <input
          type="text"
          placeholder="Search name, email, phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full lg:w-72 focus:ring-2 focus:ring-red-400"
        />

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow border overflow-x-auto">

        <table className="min-w-[900px] w-full text-sm">

          <thead className="bg-gray-100 text-gray-700 text-xs uppercase">

            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((item) => {

              const d = new Date(item.createdAt);
              const date = d.toLocaleDateString();

              return (

                <tr
                  key={item._id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-3 font-medium">
                    {item.name}
                  </td>

                  <td className="px-4 py-3 break-all">
                    {item.email}
                  </td>

                  <td className="px-4 py-3">
                    {item.phone}
                  </td>

                  {/* VIEW MESSAGE */}
                  <td className="px-4 py-3">

                    <button
                      onClick={() => setSelected(item)}
                      className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700"
                    >
                      View
                    </button>

                  </td>

                  <td className="px-4 py-3">
                    {date}
                  </td>

                  <td className="px-4 py-3 text-center">

                    <button
                      onClick={() => {
                        if (confirm("Delete this message?")) {
                          deleteContact(item._id);
                        }
                      }}
                      className="bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

      {/* MESSAGE MODAL */}
      {selected && (

        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >

          <div
            className="bg-white max-w-xl w-full rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >

            <h3 className="text-xl font-bold mb-4">
              Message from {selected.name}
            </h3>

            <div className="bg-gray-100 p-4 rounded-lg text-gray-700 whitespace-pre-wrap">
              {selected.message}
            </div>

            <div className="flex justify-end mt-6">

              <button
                onClick={() => setSelected(null)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}