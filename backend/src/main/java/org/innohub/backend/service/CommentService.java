package org.innohub.backend.service;

import org.innohub.backend.entities.Comment;
import org.innohub.backend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public Comment getCommentById(Long id) {
        return commentRepository.findById(id).orElse(null);
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment updateComment(Long id, Comment commentDetails) {
        Comment comment = commentRepository.findById(id).orElse(null);
        if (comment != null) {
            comment.setContent(commentDetails.getContent());
            comment.setPostedDate(commentDetails.getPostedDate());
            return commentRepository.save(comment);
        }
        return null;
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}