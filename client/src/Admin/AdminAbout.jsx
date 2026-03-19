
import { useEffect, useState } from "react";
import {
  useGetAdminAboutQuery,
  useSaveAboutMutation
} from "../redux/apis/aboutApi";

export default function AdminAbout() {

  const { data } = useGetAdminAboutQuery();
  const [saveAbout] = useSaveAboutMutation();

  const [headingSmall,setHeadingSmall] = useState("");
  const [title,setTitle] = useState("");
  const [description1,setDescription1] = useState("");
  const [description2,setDescription2] = useState("");
  const [image,setImage] = useState(null);

  const [stats,setStats] = useState([
    {number:"",label:""},
    {number:"",label:""},
    {number:"",label:""},
    {number:"",label:""}
  ]);


  useEffect(()=>{

    if(data){

      setHeadingSmall(data.headingSmall || "");
      setTitle(data.title || "");
      setDescription1(data.description1 || "");
      setDescription2(data.description2 || "");

      if(data.stats) setStats(data.stats);

    }

  },[data]);


  const handleStatChange=(index,key,value)=>{

    const updated=[...stats];

    updated[index][key]=value;

    setStats(updated);

  };


  const handleSubmit=async(e)=>{

    e.preventDefault();

    const formData = new FormData();

    formData.append("headingSmall",headingSmall);
    formData.append("title",title);
    formData.append("description1",description1);
    formData.append("description2",description2);
    formData.append("stats",JSON.stringify(stats));

    if(image) formData.append("image",image);

    await saveAbout(formData);

    alert("About Updated");

  };


  return (

    <div className="p-8 max-w-4xl">

      <h1 className="text-2xl font-bold mb-6">
        Edit About Section
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* SMALL HEADING */}
        <input
          value={headingSmall}
          onChange={(e)=>setHeadingSmall(e.target.value)}
          placeholder="Small Heading"
          className="border p-2 w-full"
        />

        {/* TITLE */}
        <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full"
        />

        {/* DESCRIPTION 1 */}
        <textarea
          value={description1}
          onChange={(e)=>setDescription1(e.target.value)}
          placeholder="Description 1"
          className="border p-2 w-full"
        />

        {/* DESCRIPTION 2 */}
        <textarea
          value={description2}
          onChange={(e)=>setDescription2(e.target.value)}
          placeholder="Description 2"
          className="border p-2 w-full"
        />

        {/* IMAGE */}
        <input
          type="file"
          onChange={(e)=>setImage(e.target.files[0])}
        />

        {/* STATS */}
        <h2 className="font-semibold mt-6">
          Stats
        </h2>

        {stats.map((s,i)=>(

          <div key={i} className="flex gap-4">

            <input
              value={s.number}
              onChange={(e)=>handleStatChange(i,"number",e.target.value)}
              placeholder="Number"
              className="border p-2 w-32"
            />

            <input
              value={s.label}
              onChange={(e)=>handleStatChange(i,"label",e.target.value)}
              placeholder="Label"
              className="border p-2 flex-1"
            />

          </div>

        ))}

        {/* BUTTON */}
        <button className="bg-black text-white px-6 py-2 mt-6">
          Save
        </button>

      </form>

    </div>

  );

}