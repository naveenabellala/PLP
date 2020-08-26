package com.capg.bean;
import java.util.List;

 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

 

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

 

import com.fasterxml.jackson.annotation.JsonIgnore;

 

@Entity
@Table(name = "TR5Coupon")
public class Coupon {

 

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "coupon_seq")

 

    @GenericGenerator(

 

            name = "coupon_seq", 

 

            strategy = "com.capg.bean.StringPrefixedSequenceIdGenerator", 

 

            parameters = {

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "COUPON_"),

 

                    @Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
    @Column(name="COUP_CODE")
    private String id;
   
	private String coupCode;
    private int discount;
  
    public String getCoupCode() {
        return coupCode;
    }
    public void setCoupCode(String coupCode) {
        this.coupCode = coupCode;
    }
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
    public int getDiscount() {
        return discount;
    }
    public void setDiscount(int discount) {
        this.discount = discount;
    }
	@Override
	public String toString() {
		return "Coupon [id=" + id + ", coupCode=" + coupCode + ", discount=" + discount + "]";
	}
    

    
}
 