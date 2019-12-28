package com.romain.espacemembre.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.romain.espacemembre.entity.User;
import com.romain.espacemembre.exception.ResourceNotFoundException;
import com.romain.espacemembre.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
  @Autowired
  private UserRepository userRepository;

  //Create User
  @CrossOrigin(origins = "http://localhost")
  @PostMapping("/users")
  public User createUser(@Valid @RequestBody User user) {
    return userRepository.save(user);
  }

  //Get User
  @CrossOrigin(origins = "http://localhost")
  @GetMapping("/users")
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  @CrossOrigin(origins = "http://localhost")
  @GetMapping("/users/{id}")
  public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
    throws ResourceNotFoundException {
    User user = userRepository.findById(userId)
      .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
    return ResponseEntity.ok().body(user);
  }

  //Update User
  @CrossOrigin(origins = "http://localhost")
  @PutMapping("/users/{id}")
  public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
    User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
    user.setPseudo(userDetails.getPseudo());
    user.setBirthDate(userDetails.getBirthDate());
    user.setPassword(userDetails.getPassword());
    user.setDescription(userDetails.getDescription());
    user.setWayNumber(userDetails.getWayNumber());
    user.setStreet(userDetails.getStreet());
    user.setZipCode(userDetails.getZipCode());
    user.setCity(userDetails.getCity());
    user.setLongitude(userDetails.getLongitude());
    user.setLatitude(userDetails.getLatitude());
    final User updatedUser = userRepository.save(user);
    return ResponseEntity.ok(updatedUser);
  }

  //Delete User
  @CrossOrigin(origins = "http://localhost")
  @DeleteMapping("/users/{id}")
  public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
    throws ResourceNotFoundException {
    User user = userRepository.findById(userId)
      .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

    userRepository.delete(user);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
  }
}
