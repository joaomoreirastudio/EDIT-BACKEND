import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, require: true },
    email: { type: Number, require: true },
    password: { type: String, require: true },
});
export default mongoose.model("User", UserSchema);
