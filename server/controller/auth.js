import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt();

    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(200).json({ msg: 'User created.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ msg: 'Password is incorrect' });
    }

    res.status(200).json({ msg: 'Connection successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
