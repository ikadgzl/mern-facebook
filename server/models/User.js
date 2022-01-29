import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
      required: true
    },

    email: {
      type: String,
      max: 50,
      unique: true,
      required: true
    },

    password: {
      type: String,
      min: 8,
      required: true
    },

    profilePicture: {
      type: String,
      default: ''
    },

    coverPicture: {
      type: String,
      default: ''
    },

    followers: {
      type: Array,
      default: []
    },

    profilePicture: {
      type: Array,
      default: []
    },

    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
