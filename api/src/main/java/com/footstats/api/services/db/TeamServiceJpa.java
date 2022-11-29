package com.footstats.api.services.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.footstats.api.models.Team;
import com.footstats.api.repositories.TeamRepository;
import com.footstats.api.services.InTeamService;

@Service
@Primary
public class TeamServiceJpa implements InTeamService {

  @Autowired
  private TeamRepository repository;

  @Override
  public void delete(Team team) {
    repository.delete(team);
  }

  @Override
  public List<Team> findAllByLeague_id(Integer league_id) {
    return repository.findAllUsingLeague_id(league_id);
  }

  @Override
  public List<Team> findAll() {
    return repository.findAll();
  }

  @Override
  public Team findById(Integer id) {
    Optional<Team> team = repository.findById(id);
    return team.get();
  }

  @Override
  public void save(Team team) {
    repository.save(team);
  }

}
