package com.footstats.api.services;

import java.util.List;

import com.footstats.api.models.Player;

public interface InPlayerService {

  public void save(Player league);

  public Player findById(Integer id);

  public List<Player> findAll();

  public void delete(Player league);

  public List<Player> findByTeam(Integer team_id);

}
