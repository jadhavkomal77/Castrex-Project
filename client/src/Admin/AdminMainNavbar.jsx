import { useState, useEffect } from "react";
import {
  useGetAdminMainNavbarQuery,
  useCreateMainNavbarMutation,
  useUpdateMainNavbarMutation
} from "../redux/apis/mainNavbarApi";

export default function AdminNavbar() {

  const { data, refetch } = useGetAdminMainNavbarQuery();

  const [createNavbar] = useCreateMainNavbarMutation();
  const [updateNavbar] = useUpdateMainNavbarMutation();

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (data?.navbar?.menu) {
      setMenu(structuredClone(data.navbar.menu));
    }
  }, [data]);

  /* SLUG */

  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  /* ADD MENU */

  const addMenu = () => {

    const updated = structuredClone(menu);

    updated.push({
      label: "",
      link: "",
      order: updated.length + 1,
      isActive: true,
      submenu: []
    });

    setMenu(updated);
  };

  /* DELETE MENU */

  const deleteMenu = (index) => {

    const updated = structuredClone(menu);

    updated.splice(index, 1);

    updated.forEach((item, i) => {
      item.order = i + 1;
    });

    setMenu(updated);
  };

  /* UPDATE MENU */

  const handleMenuChange = (index, field, value) => {

    const updated = structuredClone(menu);

    updated[index][field] = value;

    if (field === "label") {
      updated[index].link = "/" + slugify(value);
    }

    setMenu(updated);
  };

  /* ADD SUBMENU */

  const addSubmenu = (menuIndex) => {

    const updated = structuredClone(menu);

    if (!updated[menuIndex].submenu) {
      updated[menuIndex].submenu = [];
    }

    updated[menuIndex].submenu.push({
      label: "",
      link: ""
    });

    setMenu(updated);
  };

  /* UPDATE SUBMENU */

  const handleSubmenuChange = (menuIndex, subIndex, field, value) => {

    const updated = structuredClone(menu);

    updated[menuIndex].submenu[subIndex][field] = value;

    if (field === "label") {
      updated[menuIndex].submenu[subIndex].link =
        "/" + slugify(value);
    }

    setMenu(updated);
  };

  /* DELETE SUBMENU */

  const deleteSubmenu = (menuIndex, subIndex) => {

    const updated = structuredClone(menu);

    updated[menuIndex].submenu.splice(subIndex, 1);

    setMenu(updated);
  };

  /* SAVE NAVBAR */

  const saveNavbar = async () => {

    try {

      if (data?.navbar?._id) {

        await updateNavbar({
          id: data.navbar._id,
          menu
        });

      } else {

        await createNavbar({ menu });

      }

      refetch();

      alert("Navbar updated successfully");

    } catch (err) {

      console.error(err);

      alert("Update failed");
    }
  };

  return (

    <div className="p-8 max-w-5xl">

      <h1 className="text-2xl font-bold mb-6">
        Navbar Manager
      </h1>

      {menu.map((item, index) => (

        <div key={index} className="border p-4 mb-6 rounded bg-gray-50">

          <div className="flex gap-3 mb-4">

            <input
              value={item.label}
              placeholder="Menu label"
              onChange={(e) =>
                handleMenuChange(index, "label", e.target.value)
              }
              className="border p-2 flex-1"
            />

            <input
              value={item.link}
              placeholder="/menu-link"
              onChange={(e) =>
                handleMenuChange(index, "link", e.target.value)
              }
              className="border p-2 flex-1"
            />

            <button
              onClick={() => addSubmenu(index)}
              className="bg-blue-500 text-white px-3 rounded"
            >
              + Sub
            </button>

            <button
              onClick={() => deleteMenu(index)}
              className="bg-red-500 text-white px-3 rounded"
            >
              Delete
            </button>

          </div>

          {item.submenu?.map((sub, subIndex) => (

            <div key={subIndex} className="flex gap-3 mb-2 ml-6">

              <input
                value={sub.label}
                placeholder="Submenu label"
                onChange={(e) =>
                  handleSubmenuChange(
                    index,
                    subIndex,
                    "label",
                    e.target.value
                  )
                }
                className="border p-2 flex-1"
              />

              <input
                value={sub.link}
                placeholder="/submenu-link"
                onChange={(e) =>
                  handleSubmenuChange(
                    index,
                    subIndex,
                    "link",
                    e.target.value
                  )
                }
                className="border p-2 flex-1"
              />

              <button
                onClick={() =>
                  deleteSubmenu(index, subIndex)
                }
                className="bg-red-400 text-white px-3 rounded"
              >
                X
              </button>

            </div>

          ))}

        </div>

      ))}

      <div className="flex gap-4">

        <button
          onClick={addMenu}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Add Menu
        </button>

        <button
          onClick={saveNavbar}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Navbar
        </button>

      </div>

    </div>
  );
}

