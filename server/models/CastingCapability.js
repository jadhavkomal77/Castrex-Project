// import mongoose from "mongoose"

// const castingCapabilitySchema = new mongoose.Schema({

// title:{
// type:String,
// required:true
// },

// slug:{
// type:String,
// required:true,
// unique:true
// },

// description:String,

// icon:String,

// order:{
// type:Number,
// default:0
// },

// heroImage:String,

// processImage:String,

// applicationsImage:String, // ⭐ ADD THIS

// detailDescription:String,

// specifications:[
// {
// title:String,
// value:String
// }
// ],

// advantages:[
// {
// title:String,
// desc:String
// }
// ],

// applications:[
// {
// title:String,
// desc:String
// }
// ],

// alloys:[
// {
// name:String,
// desc:String
// }
// ],

// isActive:{
// type:Boolean,
// default:true
// }

// },{timestamps:true})

// export default mongoose.model(
// "CastingCapability",
// castingCapabilitySchema
// )







//  final schema


import mongoose from "mongoose"

/* ---------- ITEM ---------- */

const itemSchema = new mongoose.Schema({
title:{
type:String,
trim:true,
maxlength:150
},
subtitle:{
type:String,
trim:true
},
desc:{
type:String,
trim:true
},
value:{
type:String,
trim:true
},
icon:String,
image:String,
link:String
},{_id:false})

/* ---------- STEP ---------- */

const stepSchema = new mongoose.Schema({
step:Number,
title:{
type:String,
trim:true
},
desc:{
type:String,
trim:true
},
image:String
},{_id:false})

/* ---------- SPECIFICATION ---------- */

const specificationSchema = new mongoose.Schema({
title:{
type:String,
trim:true
},
value:{
type:String,
trim:true
}
},{_id:false})

/* ---------- GALLERY ---------- */

const gallerySchema = new mongoose.Schema({
image:{
type:String,
required:true
},
alt:String
},{_id:false})

/* ---------- SECTION ---------- */

const sectionSchema = new mongoose.Schema({

sectionType:{
type:String,
required:true,
enum:[
"features",
"advantages",
"applications",
"gallery",
"specifications",
"process",
"industries",
"alloys",
"manufacturing",
"services",
"facilities",
"stats",
"cta",
"video",
"overview"
]
},

order:{
type:Number,
default:0
},

title:{
type:String,
trim:true
},

subtitle:{
type:String,
trim:true
},

description:{
type:String,
trim:true
},

image:String,

video:String,

items:{
type:[itemSchema],
default:[]
},

steps:{
type:[stepSchema],
default:[]
},

specifications:{
type:[specificationSchema],
default:[]
},

gallery:{
type:[gallerySchema],
default:[]
},

stats:{
type:[
{
title:{ type:String, trim:true },
value:{ type:String, trim:true }
}
],
default:[]
},

cta:{
title:String,
description:String,
buttonText:String,
buttonLink:String
}

},{_id:false})

/* ---------- MAIN MODEL ---------- */

const capabilitySchema = new mongoose.Schema({

title:{
type:String,
required:true,
trim:true,
maxlength:150
},

slug:{
type:String,
required:true,
unique:true,
lowercase:true,
trim:true
},

icon:String,

category:{
type:String,
enum:[
"casting",
"machining",
"tooling",
"surface",
"engineering",
"facility"
],
default:"casting"
},

order:{
type:Number,
default:0
},

/* HERO */

hero:{
title:{ type:String, trim:true },
subtitle:{ type:String, trim:true },
description:{ type:String, trim:true },
image:String,
video:String
},

/* OVERVIEW */

overview:{
title:{ type:String, trim:true },
description:{ type:String, trim:true },
image:String
},

/* DYNAMIC SECTIONS */

sections:{
type:[sectionSchema],
default:[]
},

/* SEO */

seo:{
metaTitle:{ type:String, trim:true },
metaDescription:{ type:String, trim:true },
metaKeywords:{
type:[String],
default:[]
}
},

isActive:{
type:Boolean,
default:true
}

},{
timestamps:true,
strict:true
})

/* ---------- INDEXES ---------- */

capabilitySchema.index({ slug:1 })
capabilitySchema.index({ category:1 })
capabilitySchema.index({ order:1 })
capabilitySchema.index({ isActive:1 })

/* ---------- SLUG NORMALIZATION ---------- */

capabilitySchema.pre("save",function(next){
if(this.slug){
this.slug = this.slug
.toLowerCase()
.trim()
.replace(/\s+/g,"-")
}
next()
})

export default mongoose.model("Capability", capabilitySchema)








// *********************************************








// import mongoose from "mongoose"

// /* ---------- ITEM ---------- */

// const itemSchema = new mongoose.Schema({
// title:String,
// subtitle:String,
// desc:String,
// value:String,
// icon:String,
// image:String,
// link:String
// },{_id:false})

// /* ---------- STEP ---------- */

// const stepSchema = new mongoose.Schema({
// step:Number,
// title:String,
// desc:String,
// image:String
// },{_id:false})

// /* ---------- SPECIFICATION ---------- */

// const specificationSchema = new mongoose.Schema({
// title:String,
// value:String
// },{_id:false})

// /* ---------- GALLERY ---------- */

// const gallerySchema = new mongoose.Schema({
// image:String,
// alt:String
// },{_id:false})

// /* ---------- SECTION ---------- */

// const sectionSchema = new mongoose.Schema({

// sectionType:{
// type:String,
// required:true,
// enum:[
// "features",
// "advantages",
// "applications",
// "gallery",
// "specifications",
// "process",
// "industries",
// "alloys",
// "manufacturing",
// "services",
// "facilities",
// "stats",
// "cta"
// ]
// },

// title:String,
// subtitle:String,
// description:String,

// image:String,
// video:String,

// /* reusable content blocks */

// items:{
// type:[itemSchema],
// default:[]
// },

// steps:{
// type:[stepSchema],
// default:[]
// },

// specifications:{
// type:[specificationSchema],
// default:[]
// },

// gallery:{
// type:[gallerySchema],
// default:[]
// },

// stats:{
// type:[
// {
// title:String,
// value:String
// }
// ],
// default:[]
// },

// cta:{
// title:String,
// description:String,
// buttonText:String,
// buttonLink:String
// }

// },{_id:false})

// /* ---------- MAIN MODEL ---------- */

// const capabilitySchema = new mongoose.Schema({

// title:{
// type:String,
// required:true,
// trim:true
// },

// slug:{
// type:String,
// required:true,
// unique:true,
// index:true,
// lowercase:true
// },

// icon:String,

// category:{
// type:String,
// enum:[
// "casting",
// "machining",
// "tooling",
// "surface",
// "engineering",
// "facility"
// ],
// default:"casting"
// },

// order:{
// type:Number,
// default:0
// },

// /* HERO SECTION */

// hero:{
// title:String,
// subtitle:String,
// description:String,
// image:String,
// video:String
// },

// /* OVERVIEW */

// overview:{
// title:String,
// description:String,
// image:String
// },

// /* DYNAMIC SECTIONS */

// sections:{
// type:[sectionSchema],
// default:[]
// },

// /* SEO */

// seo:{
// metaTitle:String,
// metaDescription:String
// },

// isActive:{
// type:Boolean,
// default:true
// }

// },{timestamps:true})

// export default mongoose.model("Capability", capabilitySchema)