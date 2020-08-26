package com.capg.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.WishItem;

@Repository
public interface CapgWishItemRepo extends JpaRepository<WishItem, String>{
	
	@Query("from WishItem where CUSTOMER_CUSTID=:cid")
    public List<WishItem> getWishesById(@Param("cid") String cid);
}
