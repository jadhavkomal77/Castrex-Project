import { useState } from "react";
import {
  useGetAdminTopNavbarQuery,
  useCreateTopNavbarMutation,
  useUpdateTopNavbarMutation,
} from "../redux/apis/topNavbarApi";

export default function AdminTopNavbar() {

  const { data } = useGetAdminTopNavbarQuery();

  const [createNavbar] = useCreateTopNavbarMutation();
  const [updateNavbar] = useUpdateTopNavbarMutation();

  const [label, setLabel] = useState("");
  const [link, setLink] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = async () => {

    const newLinks = [...(data?.links || []), { label, link }];

    if (!data?._id) {
      await createNavbar({ links: newLinks });
    } else {
      await updateNavbar({
        id: data._id,
        links: newLinks,
      });
    }

    setLabel("");
    setLink("");
  };

  const handleDelete = async (index) => {

    const newLinks = data.links.filter((_, i) => i !== index);

    await updateNavbar({
      id: data._id,
      links: newLinks,
    });
  };

  const handleEdit = (item, index) => {
    setLabel(item.label);
    setLink(item.link);
    setEditIndex(index);
  };

  const handleUpdate = async () => {

    const newLinks = [...data.links];

    newLinks[editIndex] = { label, link };

    await updateNavbar({
      id: data._id,
      links: newLinks,
    });

    setLabel("");
    setLink("");
    setEditIndex(null);
  };

  return (
    <div className="p-10">

      <h2 className="text-2xl mb-6">
        Top Navbar Admin
      </h2>

      <div className="flex gap-3 mb-6">

        <input
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2"
        />

        {editIndex !== null ? (

          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4"
          >
            Update
          </button>

        ) : (

          <button
            onClick={handleAdd}
            className="bg-black text-white px-4"
          >
            Add
          </button>

        )}

      </div>

      {data?.links?.map((item, index) => (

        <div
          key={index}
          className="flex justify-between border p-3 mb-2"
        >

          <span>
            {item.label} — {item.link}
          </span>

          <div className="flex gap-4">

            <button
              onClick={() => handleEdit(item, index)}
              className="text-blue-500"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(index)}
              className="text-red-500"
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}