package com.wlindner;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ThoughtRepository extends JpaRepository<Thought, Long> {
    public List<Thought> findAllByOrderByIdAsc();
}
