package com.capg.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capg.bean.Transaction;

public interface TransactionDao extends JpaRepository<Transaction, String>{

}
