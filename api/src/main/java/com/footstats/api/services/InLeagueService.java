package com.footstats.api.services;

import java.util.List;

import com.footstats.api.models.League;
import com.footstats.api.models.Team;

public interface InLeagueService {

  public void save(League league);

  public League findById(Integer id);

  public List<League> findAll();

  public void delete(League league);

  public League findByTeam(Integer team_id);

}
