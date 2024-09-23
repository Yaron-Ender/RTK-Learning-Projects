import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
title:{
type:String,
require:true
},
aouther:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
},
content:{
type:String,
require:true
}
},
{}
)
const Blog = mongoose.model("Blog",blogsSchema)

export default Blog