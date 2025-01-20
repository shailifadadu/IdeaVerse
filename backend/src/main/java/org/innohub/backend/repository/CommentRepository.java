package org.innohub.backend.repository;

import java.util.List;
import java.util.Optional;

import org.innohub.backend.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}