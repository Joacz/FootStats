package com.footstats.api.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Leagues")
public class League {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String name;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "TeamLeague", joinColumns = @JoinColumn(name = "league_id"), inverseJoinColumns = @JoinColumn(name = "team_id"))
  private List<Team> teams;

  @Override
  public String toString() {
    return "League [id=" + id + ", name=" + name + ", teams=" + teams + "]";
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Team> getTeams() {
    return teams;
  }

  public void setTeams(List<Team> teams) {
    this.teams = teams;
  }

}
