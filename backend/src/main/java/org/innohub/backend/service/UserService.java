package org.innohub.backend.service;

import org.innohub.backend.entities.User;
import org.innohub.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setEmail(userDetails.getEmail());
            user.setTwitterLink(userDetails.getTwitterLink());
            user.setGithubLink(userDetails.getGithubLink());
            user.setLinkedinLink(userDetails.getLinkedinLink());
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}