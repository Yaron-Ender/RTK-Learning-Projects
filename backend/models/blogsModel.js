import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
title:{
type:string,
require:true
},
aouther:{
type:mongoose.schema.Types.ObjectId,
ref:'User',
require:true
},
content:{
type:string,
require:true
}
},
{}
)
const Blog = mongoose.model("Blog",blogsSchema)

export default Blog