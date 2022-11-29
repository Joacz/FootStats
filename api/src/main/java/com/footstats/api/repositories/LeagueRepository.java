package com.footstats.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.footstats.api.models.League;

public interface LeagueRepository extends JpaRepository<League, Integer> {

  @Query(value = "SELECT l.id, l.name FROM leagues l inner JOIN teams t JOIN teamleague tl on t.id = tl.team_id and l.id = tl.league_id WHERE team_id = ?", nativeQuery = true)
  public League findUsingTeam_id(Integer team_id);

}
