package com.capg.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.Credential;

@Repository
public interface CredentialsDao extends JpaRepository<Credential, String> {
	
	@Query("select password from Credential where ID=:id")
	public String getPasswordById(@Param("id") String id);
	
	

}
