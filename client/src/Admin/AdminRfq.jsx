import {
  useGetAdminRfqQuery,
  useDeleteRfqMutation
} from "../redux/apis/rfqApi";

export default function AdminRfq() {

  const { data, isLoading } = useGetAdminRfqQuery();
  const [deleteRfq] = useDeleteRfqMutation();

  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading RFQ requests...
      </div>
    );
  }

  return (

    <div className="p-8">

      {/* PAGE TITLE */}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          RFQ Requests
        </h1>

        <span className="text-sm text-gray-500">
          Total: {data?.rfqs?.length || 0}
        </span>
      </div>


      {/* TABLE CARD */}

      <div className="bg-white shadow-lg rounded-xl overflow-hidden border">

        <table className="w-full text-left">

          {/* TABLE HEADER */}

          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">

            <tr>
              <th className="p-4">Company</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Component</th>
              <th className="p-4 text-center">Action</th>
            </tr>

          </thead>


          {/* TABLE BODY */}

          <tbody>

            {data?.rfqs?.length === 0 && (

              <tr>
                <td colSpan="6" className="text-center p-10 text-gray-500">
                  No RFQ requests found
                </td>
              </tr>

            )}


            {data?.rfqs?.map((item) => (

              <tr
                key={item._id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="p-4 font-medium">
                  {item.company || "-"}
                </td>

                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4 text-blue-600">
                  {item.email}
                </td>

                <td className="p-4">
                  {item.phone}
                </td>

                <td className="p-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {item.componentType}
                  </span>
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => deleteRfq(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}