import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

   const User = mongoose.model('User',userSchema)

   export default User;