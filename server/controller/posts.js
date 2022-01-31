import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req, res) => {
  try {
    const savedPost = await Post.create(req.body);

    res.status(201).json({ msg: 'Post successfully created', post: savedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(201).json({ msg: 'Posts successfully fetched', posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });

    if (!post) {
      return res.status(404).json({ msg: 'Post not exist' });
    }

    res.status(201).json({ msg: 'Post successfully fetched', post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });

    if (post.userId !== req.body.userId) {
      return res.status(403).json({ msg: "You can NOT edit other's post" });
    }

    await post.updateOne({ $set: req.body });

    res.status(200).json({ msg: 'Post successfully updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });

    // TO:DO implement authentication
    // therefore instead of body.userId, would've been using req.user.id / req.user.isAdmin
    if (post.userId !== req.body.userId) {
      return res.status(403).json({ msg: "You can NOT delete other's post" });
    }

    await post.updateOne({ $set: req.body });

    res.status(200).json({ msg: 'Post successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });

    if (post.likes.includes(req.body.userId)) {
      await post.updateOne({ $pull: { likes: req.body.userId } });

      res.status(200).json({ msg: 'Post has been disliked' });
    } else {
      await post.updateOne({ $push: { likes: req.body.userId } });

      res.status(200).json({ msg: 'Post has been liked' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTimeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const currentUserPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => Post.find({ userId: friendId }))
    );

    const timeline = currentUserPosts.concat(...friendPosts);

    res.status(200).json({ msg: 'Timeline fetched successfully', timeline });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
