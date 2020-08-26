package com.capg.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.CartItem;

@Repository
public interface CapgCartItemRepo extends JpaRepository<CartItem, String> {

	
	@Query("from CartItem where CUSTOMER_CUSTID=:cid")
    public List<CartItem> getCartListById(@Param("cid") String cid);

}
