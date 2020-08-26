package com.capg.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.bean.Coupon;

@Repository
public interface CapgCouponRepo extends JpaRepository<Coupon, String>{

	@Query("from Coupon where coupCode=:code")
	public Coupon getCouponByCustomId(@Param("code") String code);
}
