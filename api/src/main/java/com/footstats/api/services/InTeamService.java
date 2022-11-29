package com.footstats.api.services;

import java.util.List;

import com.footstats.api.models.Team;

public interface InTeamService {
  
  public void save(Team team);

  public Team findById(Integer id);

  public List<Team> findAll();

  public void delete(Team team);

  public List<Team> findAllByLeague_id(Integer league_id);

}
