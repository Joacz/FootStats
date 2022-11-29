package com.footstats.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.footstats.api.models.Player;
import com.footstats.api.models.Team;
import com.footstats.api.services.db.PlayerServiceJpa;
import com.footstats.api.services.db.TeamServiceJpa;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

  @Autowired
  private TeamServiceJpa teamRepository;

  @GetMapping("")
  public List<Team> findAll() {
    return teamRepository.findAll();
  }

  @GetMapping("/league/{league_id}")
  public List<Team> findAllByLeague(@PathVariable Integer league_id) {
    return teamRepository.findAllByLeague_id(league_id);
  }

  @GetMapping("/{id}")
  public Team findById(@PathVariable Integer id) {
    return teamRepository.findById(id);
  }

  @PostMapping("")
  public ResponseEntity<Team> create(@RequestBody Team team) {

    if (team == null) {
      return new ResponseEntity<Team>(HttpStatus.NOT_ACCEPTABLE);
    }

    teamRepository.save(team);

    return new ResponseEntity<Team>(HttpStatus.OK);

  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Team> delete(@PathVariable Integer id) {

    Team team = teamRepository.findById(id);

    if (team == null) {
      return new ResponseEntity<Team>(HttpStatus.NOT_FOUND);
    }

    teamRepository.delete(team);

    return new ResponseEntity<Team>(HttpStatus.OK);
  }

}
