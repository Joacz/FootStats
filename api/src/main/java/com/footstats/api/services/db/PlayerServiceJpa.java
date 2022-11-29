package com.footstats.api.services.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.footstats.api.models.Player;
import com.footstats.api.repositories.PlayerRepository;
import com.footstats.api.services.InPlayerService;

@Service
@Primary
public class PlayerServiceJpa implements InPlayerService {

  @Autowired
  private PlayerRepository repository;

  @Override
  public void delete(Player player) {
    repository.delete(player);
  }

  @Override
  public List<Player> findByTeam(Integer team_id) {
    return repository.findByUsingTeam_id(team_id);
  }

  @Override
  public List<Player> findAll() {
    return repository.findAll();
  }

  @Override
  public Player findById(Integer id) {
    Optional<Player> player = repository.findById(id);
    return player.get();
  }

  @Override
  public void save(Player player) {
    repository.save(player);
  }

}
