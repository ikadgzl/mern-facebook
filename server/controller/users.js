import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({ msg: 'Successful', users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const { password, updatedAt, ...others } = user._doc;

    res.status(200).json({ msg: 'Successful', user: others });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      if (req.body.password) {
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }

      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      });

      res.status(200).json({ msg: 'Updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({ msg: 'You can not update this user' });
  }
};

export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.delete({ _id: req.params.id });

      res.status(200).json({ msg: 'Deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({ msg: 'You can not delete this user' });
  }
};
