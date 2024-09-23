import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from 'colors';
 import connectDB from "./DB/db.js";
 import User from "./models/useModel.js";
import users from "./DB/data/users.js";
import blogs from "./DB/data/blogs.js";
import Blog from "./models/blogsModel.js";
dotenv.config()
 await connectDB()

 const importData = async()=>{
    try{
   await User.deleteMany();
   await Blog.deleteMany();

   const creatUsers = await User.insertMany(users)
 console.log(creatUsers);
   const changedBlogArr = blogs.map((blog,i)=>{
    return {...blog,aouther:creatUsers[i]._id}
   })
     await Blog.insertMany(changedBlogArr)
    console.log('Data Imported!'.green.inverse);
    process.exit(0)
    }catch(err){
      console.error(`${err}`.red.inverse);
      process.exit(1)
    }
 }
 const destroyeData =async()=>{
   try{
   await User.deleteMany();
   await Blog.deleteMany();
   console.log('Data Destroyed'.red.inverse)
   process.exit(0);
   }catch(err){
   console.log('thre are error',err.message);
   process.exit(1);
   }
   }
   if(process.argv[2]==='-d'){
    destroyeData()
   }else{
   importData()
   }
 console.log(process.argv);