package com.capg.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.Email;


@Repository
public interface CapgEmailRepo extends JpaRepository<Email, Integer> {
	@Query("from Email e where e.toMailId=:id ")
	List<Email> inbox(@Param("id") String id);

	@Query("from Email e where e.fromMailId=:id ") 
	List<Email> sentBox(@Param("id") String id);
}
