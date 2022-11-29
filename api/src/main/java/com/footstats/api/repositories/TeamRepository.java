package com.footstats.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.footstats.api.models.Team;

public interface TeamRepository extends JpaRepository<Team, Integer> {

  @Query(nativeQuery = true, value = "SELECT t.*, l.* FROM teams t INNER join leagues l INNER JOIN teamleague tl ON t.id = tl.team_id AND l.id=tl.league_id where league_id = ?")
  public List<Team> findAllUsingLeague_id(Integer league_id);

}
