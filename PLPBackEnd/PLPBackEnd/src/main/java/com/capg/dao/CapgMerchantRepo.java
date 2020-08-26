package com.capg.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.Customer;
import com.capg.bean.Merchant;

@Repository
public interface CapgMerchantRepo extends JpaRepository<Merchant, String>{
	
	@Query("from Merchant where EMAILID=:email")
	public Merchant getMerchantByEmail(@Param("email") String email);
	
	
	
	@Query("select merId FROM Merchant WHERE merType='TP'")
    public List<String> getThirdPartyMerchants();


}
