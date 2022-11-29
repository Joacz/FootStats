package com.footstats.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.footstats.api.models.League;
import com.footstats.api.models.Player;
import com.footstats.api.services.db.PlayerServiceJpa;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

  @Autowired
  private PlayerServiceJpa playerRepository;

  @GetMapping("")
  public List<Player> findAll() {
    return playerRepository.findAll();
  }

  @GetMapping("/{id}")
  public Player findById(@PathVariable Integer id) {
    return playerRepository.findById(id);
  }

  @GetMapping("/team/{id}")
  public List<Player> findByTeam(@PathVariable Integer team_id) {
    return playerRepository.findByTeam(team_id);
  }

  @PostMapping("")
  public ResponseEntity<Player> create(@RequestBody Player player) {

    if (player == null) {
      return new ResponseEntity<Player>(HttpStatus.NOT_ACCEPTABLE);
    }

    playerRepository.save(player);

    return new ResponseEntity<Player>(HttpStatus.OK);

  }

  @DeleteMapping("/{id}")
  public ResponseEntity<League> delete(@PathVariable Integer id) {

    Player player = playerRepository.findById(id);

    if (player == null) {
      return new ResponseEntity<League>(HttpStatus.NOT_FOUND);
    }

    playerRepository.delete(player);

    return new ResponseEntity<League>(HttpStatus.OK);
  }

}
