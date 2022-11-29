package com.footstats.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.footstats.api.models.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer> {

  @Query(value = "SELECT p.name, t.name FROM players p INNER JOIN teams t JOIN playerteam pt on p.id = pt.player_id AND t.id = pt.team_id WHERE team_id=?", nativeQuery = true)
  public List<Player> findByUsingTeam_id(int team_id);

}
