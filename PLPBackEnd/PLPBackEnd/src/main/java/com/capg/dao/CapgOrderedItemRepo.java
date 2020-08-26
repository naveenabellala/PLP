package com.capg.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.Customer;
import com.capg.bean.OrderedItem;

@Repository
public interface CapgOrderedItemRepo extends JpaRepository<OrderedItem, String>{

	
	@Query("from OrderedItem where MERCHANT_MERID=:mid")
	public List<OrderedItem> getMerchantOrdersById(@Param("mid") String mid);
	
	
	  @Query("select s.customer from OrderedItem s where s.merchant.merId=:mid")
	  public List<Customer> getMerchantCustomers(@Param("mid") String mid);
	 
	  
		@Query("select p from OrderedItem p where p.customer.custId=:id")
		List<OrderedItem> getListByCust(@Param("id") String id);

}
