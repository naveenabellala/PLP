package com.capg.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.Product;


@Repository
public interface CapgProductRepo extends JpaRepository<Product, String>  {
	
	
	
    @Query("from Product where MERCHANT_MERID IN (:merId)")
    List<Product> getThirdPartyProducts(List<String> merId);
    
    
    @Query("from Product where price BETWEEN :p1 AND :p2")  
	List<Product> getProductByPriceRange(@Param("p1") double min, @Param("p2") double max);
	
	@Query("select p.product from  Rating p  where p.currRating =:r1")
	List<Product> getProductByRating(@Param("r1") double rate);
	
	@Query("from Product where MERCHANT_MERID=:mid")
	public List<Product> getMerchantProductsById(@Param("mid") String mid);
	
	@Query("from Product where MERCHANT_MERID=:mid AND PRODID=:pid")
	public Product getProductById(@Param("mid") String mid, @Param("pid") String pid);

	
	
	
	
	@Query("from Product where UPPER(prodCategory)=:prodCategory")
	List<Product> getProductDetailsbyCategory(@Param("prodCategory") String prodCategory);
	
	@Query("from Product where UPPER(prodName)=:prodName")
	List<Product> getProductDetailsbyName(@Param("prodName") String prodName);
	
	@Query("from Product where UPPER(prodCategory)=:prodCategory and merchant_merId=:merchantId")
	List<Product> getMerchantProductDetailsbyCategory(@Param("prodCategory") String prodCategory,@Param("merchantId") String merchantId);
	
	@Query("from Product where UPPER(prodName)=:prodName and merchant_merId=:merchantId")
	List<Product> getMerchantProductDetailsbyName(@Param("prodName") String prodName,@Param("merchantId") String merchantId);
	
	
	
	
	
}
