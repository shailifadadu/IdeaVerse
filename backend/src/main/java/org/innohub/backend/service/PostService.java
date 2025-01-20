package org.innohub.backend.service;

import org.innohub.backend.entities.Post;
import org.innohub.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Long id, Post postDetails) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            post.setTitle(postDetails.getTitle());
            post.setContent(postDetails.getContent());
            post.setTags(postDetails.getTags());
            post.setPostedDate(postDetails.getPostedDate());
            post.setUpvotes(postDetails.getUpvotes());
            return postRepository.save(post);
        }
        return null;
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}