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

import com.footstats.api.models.League;
import com.footstats.api.services.db.LeagueServiceJpa;

@RestController
@RequestMapping("/api/leagues")
public class LeagueController {

  @Autowired
  private LeagueServiceJpa leagueRepository;

  @GetMapping("")
  public List<League> findAll() {
    return leagueRepository.findAll();
  }

  @GetMapping("/{id}")
  public League findById(@PathVariable Integer id) {
    return leagueRepository.findById(id);
  }

  @GetMapping("/team/{team_id}")
  public League findByTeam(@PathVariable Integer team_id) {
    return leagueRepository.findByTeam(team_id);
  }

  @PostMapping("")
  public ResponseEntity<League> create(@RequestBody League league) {

    if (league == null) {
      return new ResponseEntity<League>(HttpStatus.NOT_ACCEPTABLE);
    }

    leagueRepository.save(league);

    return new ResponseEntity<League>(HttpStatus.OK);

  }

  @DeleteMapping("/{id}")
  public ResponseEntity<League> delete(@PathVariable Integer id) {

    League league = leagueRepository.findById(id);

    if (league == null) {
      return new ResponseEntity<League>(HttpStatus.NOT_FOUND);
    }

    leagueRepository.delete(league);

    return new ResponseEntity<League>(HttpStatus.OK);
  }

}
