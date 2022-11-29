package com.footstats.api.services.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.footstats.api.models.League;
import com.footstats.api.repositories.LeagueRepository;
import com.footstats.api.services.InLeagueService;

@Service
@Primary
public class LeagueServiceJpa implements InLeagueService {

  @Autowired
  private LeagueRepository repository;

  @Override
  public void delete(League league) {
    repository.delete(league);
  }

  @Override
  public League findByTeam(Integer team_id) {
    return repository.findUsingTeam_id(team_id);
  }

  @Override
  public List<League> findAll() {
    return repository.findAll();
  }

  @Override
  public League findById(Integer id) {
    Optional<League> league = repository.findById(id);
    return league.get();
  }

  @Override
  public void save(League league) {
    repository.save(league);
  }

}
