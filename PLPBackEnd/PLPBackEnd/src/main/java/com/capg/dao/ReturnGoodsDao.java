package com.capg.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.OrderedItem;
import com.capg.bean.Product;

@Repository
public interface ReturnGoodsDao extends JpaRepository<Product, String>
{
	
	

}
