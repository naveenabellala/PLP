package com.capg.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.capg.bean.Customer;

@Repository
public interface CapgCustomerRepo extends JpaRepository<Customer, String>{
	
	@Query("from Customer where EMAILID=:email")
	public Customer getCustomerByEmail(@Param("email") String email);
		
	
	

	
}
