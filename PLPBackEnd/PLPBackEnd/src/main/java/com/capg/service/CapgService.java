package com.capg.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.management.RuntimeErrorException;
import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.bean.CartItem;
import com.capg.bean.Coupon;
import com.capg.bean.Credential;
import com.capg.bean.Customer;
import com.capg.bean.Email;
import com.capg.bean.Merchant;
import com.capg.bean.OrderedItem;
import com.capg.bean.Product;
import com.capg.bean.Transaction;
import com.capg.bean.WishItem;
import com.capg.dao.CapgCartItemRepo;
import com.capg.dao.CapgCouponRepo;
import com.capg.dao.CapgCustomerRepo;
import com.capg.dao.CapgEmailRepo;
import com.capg.dao.CapgMerchantRepo;
import com.capg.dao.CapgOrderedItemRepo;
import com.capg.dao.CapgProductRepo;
import com.capg.dao.CapgWishItemRepo;
import com.capg.dao.CredentialsDao;
import com.capg.dao.ReturnGoodsDao;
import com.capg.dao.TransactionDao;

@Service
public class CapgService {

	
	@Autowired CapgCouponRepo couponRepo;
	@Autowired TransactionDao transactionDao;
	@Autowired ReturnGoodsDao returnGoodsDao;
	@Autowired CapgEmailRepo emailRepo;
	@Autowired CapgOrderedItemRepo orderRepo;
	@Autowired CapgCartItemRepo cartRepo;
	@Autowired CredentialsDao credentialDao;
	@Autowired CapgCustomerRepo customerRepo;
	@Autowired CapgWishItemRepo customerWishRepo;
	@Autowired CapgMerchantRepo merchantRepo;
	@Autowired CapgProductRepo productRepo;
	Product product;
	OrderedItem orditem;
	

	


	public void registerCustomer(Customer customer, String password) throws Exception {
		try {
		Credential cred = new Credential();
		customerRepo.save(customer);
		cred.setId(customer.getCustId());
		cred.setPassword(password);
		credentialDao.save(cred);
		}catch(Exception ex) {
			throw new Exception("Customer Registration failed");
		}
	}

	public Customer findCustomerById(String custId) {
		return customerRepo.findById(custId).get();
	}

	public void addCustomerWish(String custId, WishItem wish) {
		Customer customer = findCustomerById(custId);
		List<WishItem> wishList = customer.getWishItems();
		wishList.add(wish);
		customer.setWishItems(wishList);
		customerWishRepo.save(wish);
		customerRepo.save(customer);
	}

	public void registerMerchant(Merchant merchant, String password) {
		Credential cred = new Credential();
		merchantRepo.save(merchant);
		cred.setId(merchant.getMerId());
		cred.setPassword(password);
		credentialDao.save(cred);
	}

	public Customer loginCustomer(String email, String password) throws RuntimeException {
		Customer loginCustomer = null;
		/*
		 * try { String loginCustomerId = customerRepo.getCustId(email);
		 * if(loginCustomerId == null || loginCustomerId.length() == 0) { throw new
		 * RuntimeException("Customer with email not found"); } loginCustomer =
		 * customerRepo.findById(loginCustomerId).get(); return loginCustomer; }
		 * catch(Exception ex) { throw new RuntimeException(ex.getMessage()); }
		 */
		try {
			loginCustomer = customerRepo.getCustomerByEmail(email);
			if (credentialDao.getPasswordById(loginCustomer.getCustId()).equals(password)) {
				return loginCustomer;
			} else {
				throw new RuntimeException("Password Incorrect");
			}
		} catch (Error ex) {
			throw new RuntimeErrorException(ex, ex.getMessage());
		}
	}

	public Merchant loginMerchant(String email, String password) throws RuntimeException {
		Merchant loginMerchant = null;
		/*
		 * try { String loginCustomerId = customerRepo.getCustId(email);
		 * if(loginCustomerId == null || loginCustomerId.length() == 0) { throw new
		 * RuntimeException("Customer with email not found"); } loginCustomer =
		 * customerRepo.findById(loginCustomerId).get(); return loginCustomer; }
		 * catch(Exception ex) { throw new RuntimeException(ex.getMessage()); }
		 */
		try {
			loginMerchant = merchantRepo.getMerchantByEmail(email);
			if (credentialDao.getPasswordById(loginMerchant.getMerId()).equals(password)) {
				return loginMerchant;
			} else {
				throw new RuntimeException("Password Incorrect");
			}
		} catch (Error ex) {
			throw new RuntimeErrorException(ex, ex.getMessage());
		}
	}

	// service implement Encrypted password by SAUMYA
	public String encryptPassword(String pass) throws NoSuchAlgorithmException {

		Credential cred = new Credential();
		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(pass.getBytes());
		byte[] digest = md.digest();
		String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
		return myHash;
	}

	// service impplementation for showing the product details CHANDAN TIWARI
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	// service implementation for Third party by ABSRK

	public List<Product> getThirdPartyProducts() {
		List<String> merId = merchantRepo.getThirdPartyMerchants();
		return productRepo.getThirdPartyProducts(merId);
	}
	
	// service implementation for Sort By  by Anusandhya
	public List<Product> getProductByPriceRange(double min, double max) 
	{
		return productRepo.getProductByPriceRange(min,max);
	}
	
	public List<Product> getProductByRating(double rate)
	{
		return productRepo.getProductByRating(rate);
	}
	
	
  //Service Implementation For Merchant Dashboard
	//Robin Singh Chauhan
	//Shashwat Pal
	
	public Product addMerchantProduct( Product product) {
		try {
			return  productRepo.save(product);
	}
		catch(Exception e) {
			 e.printStackTrace();
		}
		return product;
		
		}
	
	
	public List<Product> getMerchantProductsById(String mid){
			return productRepo.getMerchantProductsById(mid);	
	}
	
	public List<OrderedItem> getMerchantOrdersById(String id){
		return orderRepo.getMerchantOrdersById(id);
	}
	
	public void updateMerchantProduct(Product product) {
		productRepo.save(product);
	}
	
	//MAIL
	public void sendMail(Email maildata) {
		emailRepo.save(maildata);
	}

	public List<Email> inbox(String emailId) {
		return emailRepo.inbox(emailId);
	}
	
	public List<Email> sentBox(String emailId) {
		return emailRepo.sentBox(emailId);
	}
	
	public List<Customer> getCustomersByMerchant(String merId) {
		return orderRepo.getMerchantCustomers(merId);
	}
	
	
	//Customer Profile Module-6
	//Raghav Sharma
	//Sumit Kumar
	public void updateCustomer(Customer updatedCustomer,String custId) {
		Customer customer = customerRepo.findById(custId).get();
		customer.setFirstName(updatedCustomer.getFirstName());
		customer.setLastName(customer.getLastName());
		customer.setPhoneNo(updatedCustomer.getPhoneNo());
		customer.setAddress(updatedCustomer.getAddress());
		customerRepo.save(customer);
	}
	
	public List<OrderedItem> getOrderedItemsByCustId() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}	

	public List<WishItem> getWishListByCustomerId(String custId){
		return findCustomerById(custId).getWishItems();
	}
	
	public void updateCustomerDeposit(Customer customer) {
		this.customerRepo.save(customer);
	}

	
	//Cart
    public void addtoCart(String custId,CartItem cart){
        Customer customer = findCustomerById(custId);
        List<CartItem> cartList = customer.getCartItems();
        cart.setCustomer(customer);
        cartList.add(cart);
        customer.setCartItems(cartList);
        cartRepo.save(cart);
        customerRepo.save(customer);       
    }

    public List<CartItem> getCartProducts(String custId){
        return cartRepo.getCartListById(custId);
    }
    
   
    public List<CartItem> deleteFromCart(String cartId){
        CartItem cart = cartRepo.findById(cartId).get();
        Customer customer = cart.getCustomer();
        if(customer.getCartItems().remove(cart)) {
          List<CartItem> updatedCartItems = customer.getCartItems();
          customer.setCartItems(updatedCartItems);
      }
        customerRepo.save(customer);
        cartRepo.delete(cart);
        return customer.getCartItems();
    }
    
    
    //Wishlist
    public void addtoWishList(WishItem wish){
        Customer customer = findCustomerById(wish.getCustomer().getCustId());
        List<WishItem> wishList = customer.getWishItems();
        wishList.add(wish);
        customerWishRepo.save(wish);
        customerRepo.save(customer);
       
    }

 public void addwishtoCart(String custId,CartItem cart){
        Customer customer = findCustomerById(custId);
        List<CartItem> cartList = customer.getCartItems();
        cart.setCustomer(customer);
        cartList.add(cart);
        customer.setCartItems(cartList);
        cartRepo.save(cart);
        customerRepo.save(customer);     
    }


 public List<WishItem> getWishListById(String custid){
     return customerWishRepo.getWishesById(custid);
 }

public List<WishItem> deleteWish(String wishId) {
    WishItem wish =  customerWishRepo.findById(wishId).get();
    Customer customer = wish.getCustomer();
    if(customer.getWishItems().remove(wish)) {
        List<WishItem> updatedWishItems = customer.getWishItems();
        customer.setWishItems(updatedWishItems);
    }
    customerRepo.save(customer);
    customerWishRepo.delete(wish);
    return customer.getWishItems();
   
}

// return goods

public void updateInventory(String ordId)
{
	orditem = orderRepo.findById(ordId).get();
	Product product=orditem.getProduct();
	String prodId=product.getProdId();
	Product pro=returnGoodsDao.findById(prodId).get();
	
	int qty=pro.getQty();
	
	pro.setQty(qty+1);

	returnGoodsDao.save(pro);
	
}
public OrderedItem getById(String ordId) 
{
	
	orditem = orderRepo.findById(ordId).get();
	orditem.setOrdStatus("RET");
	orderRepo.save(orditem);	
	System.out.println(orditem.getOrdId());
	return orderRepo.findById(ordId).get();
}

public List<OrderedItem> getListByCust(String id){
	return orderRepo.getListByCust(id);
}


//Team Apeksha Service
public Customer getCustomerById(String custId)
{
	return customerRepo.findById(custId).get();
}

public Product getProductById(String id)
{
	return productRepo.findById(id).get();
}




public Product getProductDetailsById(String id) {

	return  productRepo.findById(id).get();
}


public Coupon getCouponByCustomId(String customCouponCode)  throws RuntimeException
{
	try {
		Coupon coupon = couponRepo.getCouponByCustomId(customCouponCode);
		if(coupon == null) throw new RuntimeException("Custom Coupon Code doesn't exist");
		    return coupon;
	}catch(Exception ex) {
		
		throw new RuntimeException(ex.getMessage());
	}

}




public Transaction saveTransaction(Transaction transaction) {
	
	Customer customer = transaction.getOrdItem().getCustomer();
	System.out.println(customer);
	customerRepo.save(customer);
	//this.customerRepo.save(transaction.getOrdItem().getCustomer());
	this.orderRepo.save(transaction.getOrdItem());
	System.out.println(transaction.getOrdItem());
	this.transactionDao.save(transaction);
	return transactionDao.findById(transaction.getTransId()).get();
}

public OrderedItem printInvoice(String orderId)
{
	return orderRepo.findById(orderId).get();
}

 public void addtoCart(String custId,Product cart){
        Customer customer = findCustomerById(custId);
        List<CartItem> cartList = customer.getCartItems();
        CartItem cartItem  = new CartItem();
        cartItem.setCartProduct(cart);
        cartItem.setCustomer(customer);
        cartItem.setQty(cart.getQty());
        cartList.add(cartItem);
        customer.setCartItems(cartList);
        cartRepo.save(cartItem);
        customerRepo.save(customer);       
    }


	

}
