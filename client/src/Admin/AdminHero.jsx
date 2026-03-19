import { useState, useEffect } from "react";
import {
  useGetAdminHeroQuery,
  useSaveHeroMutation,
} from "../redux/apis/heroApi";

export default function AdminHero() {

  const { data, isLoading } = useGetAdminHeroQuery();
  const [saveHero] = useSaveHeroMutation();

  const [title,setTitle] = useState("");
  const [subtitle,setSubtitle] = useState("");
  const [buttonText,setButtonText] = useState("");
  const [buttonLink,setButtonLink] = useState("");

  const [image,setImage] = useState(null);
  const [preview,setPreview] = useState(null);

  /* LOAD HERO DATA */

  useEffect(()=>{

    if(data?.hero){

      setTitle(data.hero.title || "")
      setSubtitle(data.hero.subtitle || "")
      setButtonText(data.hero.buttonText || "")
      setButtonLink(data.hero.buttonLink || "")

      if(data.hero.image){
        setPreview(data.hero.image)
      }

    }

  },[data])


  /* IMAGE CHANGE */

  const handleImageChange = (e)=>{

    const file = e.target.files[0]

    if(file){

      setImage(file)

      const imagePreview = URL.createObjectURL(file)

      setPreview(imagePreview)

    }

  }


  /* SAVE HERO */

  const handleSubmit = async(e)=>{

    e.preventDefault()

    const formData = new FormData()

    formData.append("title",title)
    formData.append("subtitle",subtitle)
    formData.append("buttonText",buttonText)
    formData.append("buttonLink",buttonLink)

    if(image){
      formData.append("image",image)
    }

    await saveHero(formData)

  }


  if(isLoading){
    return <p>Loading...</p>
  }


  return(

    <div className="max-w-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Edit Hero Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e)=>setSubtitle(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Button Text"
          value={buttonText}
          onChange={(e)=>setButtonText(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Button Link"
          value={buttonLink}
          onChange={(e)=>setButtonLink(e.target.value)}
        />

        {/* IMAGE UPLOAD */}

        <input
          type="file"
          onChange={handleImageChange}
        />

        {/* IMAGE PREVIEW */}

        {preview && (

          <img
            src={preview}
            alt="hero preview"
            className="w-full h-40 object-cover rounded"
          />

        )}

        <button className="bg-black text-white px-4 py-2">
          Save Hero
        </button>

      </form>

    </div>

  )

}