package com.capg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capg.bean.CartItem;
import com.capg.bean.Coupon;
import com.capg.bean.Customer;
import com.capg.bean.Email;
import com.capg.bean.Merchant;
import com.capg.bean.Message;
import com.capg.bean.OrderedItem;
import com.capg.bean.Product;
import com.capg.bean.Transaction;
import com.capg.bean.WishItem;
//import com.capg.service.CapgService;
import com.capg.service.CapgService;

@CrossOrigin(origins = "*")
@RestController
public class CapgController {

	@Autowired
	CapgService capgService;

	@PostMapping("/register/customer/{password}")
	public void registerCustomer(@RequestBody Customer customer, @PathVariable("password") String pass)
			throws Exception {
		capgService.registerCustomer(customer, pass);
	}

	@PostMapping("/addWish/{custId}")
	public void addCustomerWish(@PathVariable String custId, @RequestBody WishItem wish) {
		capgService.addCustomerWish(custId, wish);
	}

	@PostMapping("/register/merchant/{password}")
	public void registerMerchant(@RequestBody Merchant merchant, @PathVariable("password") String pass) {
		capgService.registerMerchant(merchant, pass);
	}

	@RequestMapping("/login/customer/{email}/{password}")
	public Customer loginCustomerByEmail(@PathVariable String email, @PathVariable String password) {
		return capgService.loginCustomer(email, password);
	}

	@RequestMapping("/login/merchant/{email}/{password}")
	public Merchant loginMerchantByEmail(@PathVariable String email, @PathVariable String password) {
		return capgService.loginMerchant(email, password);
	}

	// After Login Goto HomePage
	// ------HomePage Mapping--------
	// ----Chandan Tiwari-------
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public List<Product> findAllDetails() {
		return capgService.getAllProducts();
	}

	// ---Third party products page----
	// ABSRK
	@GetMapping("/getthirdpartyproducts")
	public List<Product> getThirdPartyProducts() {
		return capgService.getThirdPartyProducts();
	}

	// ----Sort By Module-----
	// Anusandhya
	@RequestMapping("/price/{price1}/{price2}")
	public List<Product> getProductByPriceRange(@PathVariable double price1, @PathVariable double price2) {
		return capgService.getProductByPriceRange(price1, price2);
	}

	@RequestMapping("/rating/{rate}")
	public ResponseEntity<List<Product>> getProductByRating(@PathVariable double rate) {
		List<Product> pro = capgService.getProductByRating(rate);
		return new ResponseEntity<List<Product>>(pro, HttpStatus.OK);
	}

	// ----Chat Module---
	// by Mounica siddu

	@MessageMapping("/message")
	@SendTo("/chat/messages")
	public Message getMessages(Message message) {
		System.out.println(message);
		return message;
	}

	// Merchant Module
	// Robin Singh Chauhan
	// Shashwat Pal

	@RequestMapping(value = "/merchant/addproduct", method = RequestMethod.POST)
	public Product addMerchantProduct(@RequestBody Product product) {
		return capgService.addMerchantProduct(product);
	}

	@RequestMapping(value = "/merchant/productlist/{id}")
	public List<Product> getMerchantProductsById(@PathVariable String id) {
		return capgService.getMerchantProductsById(id);
	}

	@RequestMapping(value = "/merchant/myorders/{id}")
	public List<OrderedItem> getMerchantOrdersById(@PathVariable String id) {
		return capgService.getMerchantOrdersById(id);
	}

	@RequestMapping(value = "/merchant/updateproduct", method = RequestMethod.PUT)
	public void updateMerchantProduct(@RequestBody Product product) {
		capgService.updateMerchantProduct(product);
	}

	// MAILS SERVICE
	@RequestMapping(value = "/sentbox/{emailId}", method = RequestMethod.GET)
	public List<Email> sentBox(@PathVariable String emailId) {

		return capgService.sentBox(emailId);
	}

	@RequestMapping(value = "/sendemail", method = RequestMethod.POST)
	public void sendEmail(@RequestBody Email email) {
		capgService.sendMail(email);
	}

	@RequestMapping(value = "/inbox/{emailId}", method = RequestMethod.GET)
	public List<Email> inbox(@PathVariable String emailId) {
		return capgService.inbox(emailId);
	}

	@RequestMapping(value = "/merchantcustomers/{merId}", method = RequestMethod.GET)
	public List<Customer> getCustomersByMerchant(@PathVariable String merId) {
		return capgService.getCustomersByMerchant(merId);
	}
	// -----Module 6(Raghav ANd Sumit)-------

	@RequestMapping(value = "/ecommerce/186133/deposit/{custId}/{amount}", method = RequestMethod.PUT)
	public void depositAmount(@PathVariable String custId, @PathVariable double amount) {
		System.out.println("AAA");
		Customer customer = capgService.findCustomerById(custId);
		System.out.println("AAA");
		customer.setWalletBalance(customer.getWalletBalance() + amount);
		System.out.println(customer.getWalletBalance());
		capgService.updateCustomerDeposit(customer);

	}

	@RequestMapping(value = "/ecommerce/186133/checkBalance/{custId}")
	public double checkAmount(@PathVariable String custId) {
		// System.out.println("AAA");
		Customer customer = capgService.findCustomerById(custId);
		// System.out.println("AAA");
		return customer.getWalletBalance();
		// capgService.updateCustomer( customer);

	}

	@RequestMapping(value = "ecommerce/186133/updateProfile/{custId}", method = RequestMethod.PUT)
	public void updateCustomerById(@PathVariable String custId, @RequestBody Customer updatedCustomer) {
//		Customer customer = capgService.findCustomerById(custId);
//		customer.setFirstName(updatedCustomer.getFirstName());
//		customer.setLastName(customer.getLastName());
//		customer.setPhoneNo(updatedCustomer.getPhoneNo());
//		customer.setAddress(updatedCustomer.getAddress());
		capgService.updateCustomer(updatedCustomer, custId);

	}

	@RequestMapping(value = "ecommerce/186133/getProfile/{custId}")
	public void getCustomerById(@PathVariable String custId) {
		capgService.findCustomerById(custId);
	}

	@RequestMapping(value = "ecommerce/186133/viewOrderedItems/{custId}")
	public List<OrderedItem> getListByCust(@PathVariable String custId) {
		return capgService.getListByCust(custId);
	}

//	public List<String> getOrderedItemsByCustId(@PathVariable String custId){
//		List<OrderedItem> items = capgService.getOrderedItemsByCustId();
//		List<String> custList = new ArrayList<>();
//		for(int i=0;i<items.size();i++) {
//			System.out.println(items.get(i));
//			if(items.get(i).getCustomer().getCustId().equals(custId))
//			{
//		     custList.add(items.get(i).toString());
//		}
//			}
//	    return custList;
//		
//	}

	@RequestMapping("ecommerce/186133/getcustomerwishlist/{custid}")
	public List<WishItem> getCustomerWishById(@PathVariable String custid) {
		return capgService.getWishListByCustomerId(custid);
	}

	// Cartlist
	@RequestMapping(value = "/ecommerce/addtocartlist/{custId}", method = RequestMethod.POST)
	public void addtoCart(@PathVariable String custId, @RequestBody CartItem cart) {
		capgService.addtoCart(custId, cart);
	}

	@DeleteMapping("/ecommerce/185715/deleteProduct/{cartId}")
	public List<CartItem> deleteFromCart(@PathVariable String cartId) {
		return capgService.deleteFromCart(cartId);
	}

	@RequestMapping("/ecommerce/185692/getCartList/{custId}")
	public List<CartItem> getCartProducts(@PathVariable String custId) {
		System.out.println(capgService.getCartProducts(custId));
		return capgService.getCartProducts(custId);
	}

	// Wishlist
	// Add a wish to cart
	@PostMapping("/customer/addtowishlist")
	public void addtoWishList(@RequestBody WishItem wish) {
		capgService.addtoWishList(wish);
	}

	// Add a wish to cart
	@RequestMapping(value = "/customer/addwishtocart/{custId}", method = RequestMethod.POST)
	public void addwishtoCart(@PathVariable String custId, @RequestBody CartItem cart) {
		capgService.addwishtoCart(custId, cart);
	}

	@RequestMapping("/customer/getwishlist/{custid}")
	public List<WishItem> getWishItemById(@PathVariable String custid) {
		// System.out.println(capgService.getWishListById(custid));
		return capgService.getWishListById(custid);
	}

	@DeleteMapping("/customer/deletewish/{wishId}")
	public List<WishItem> deleteWish(@PathVariable String wishId) {
		return capgService.deleteWish(wishId);
	}

	// Return Goods
	@RequestMapping(value = "ecommerce/186087/returngoods/{ordId}", method = RequestMethod.GET)
	public boolean updateInventory(@PathVariable String ordId) {
		try {
			capgService.updateInventory(ordId);
			capgService.getById(ordId);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return false;
		}
	}

	// Team apeksha
	@GetMapping("/getCustomer/{custid}")
	public Customer getCustomer(@PathVariable String custid) {
		return capgService.getCustomerById(custid);
	}

	@GetMapping("/getProduct/{prodId}")
	public Product getProduct(@PathVariable String prodId) {
		return capgService.getProductById(prodId);
	}

	@RequestMapping("/get/{id}")
	public Product getDetailsByUsername(@PathVariable String id) {
		return capgService.getProductDetailsById(id);
	}

	@GetMapping("/get")
	public List<Product> getDetails() {
		return capgService.getAllProducts();
	}

	@GetMapping("/getProductById/{productid}")
	public Product getAllDetail(@PathVariable String productid) {
		Product pr = capgService.getProductById(productid);
		return pr;
	}

	@GetMapping("/getCoupon/{couponCode}")
	public Coupon getCouponByCustomId(@PathVariable String couponCode) {
		return capgService.getCouponByCustomId(couponCode);
	}

	@PostMapping("/saveTransaction")
	public Transaction saveTransaction(@RequestBody Transaction transaction) {
		return capgService.saveTransaction(transaction);
	}

	@GetMapping("/printInvoice/{orderId}")
	public OrderedItem printInvoice(@PathVariable String orderId) {
		return capgService.printInvoice(orderId);
	}

}
