//package org.stepdefiniton;
//
//import org.junit.Assert;
//import org.pages.AddNewCustomerPage;
//
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//
//public class AddNewCustomerStepDefinition extends BaseClass {
//
//	@Given("User launch the browser")
//	public void user_launch_the_browser() {
//
////		WebDriverManager.chromedriver().setup();
////
////		driver = new ChromeDriver();
////
////		lp = new LoginPage(driver);
//	}
//
//	@When("User enter the url {string}")
//	public void user_enter_the_url(String Url) {
//
//		driver.get(Url);
//
//	}
//
//	@Then("User add the email as {string} and password as {string}")
//	public void user_add_the_email_as_and_password_as(String username, String password) {
//
//		// lp = new LoginPage(driver);
//
//		lp.setUsername(username);
//		lp.setPassword(password);
//	}
//
//	@Then("User click the login button")
//	public void user_click_the_login_button() {
//
//		// lp=new LoginPage(driver);
//
//		lp.setLogin();
//
//	}
//
//	@Then("User validate page should be {string}")
//	public void user_validate_page_should_be(String title) {
//
//		if (driver.getPageSource().equalsIgnoreCase("Login was unsuccessful. ")) {
//
//			Assert.assertTrue(false);
//		} else {
//
//			Assert.assertEquals(driver.getTitle(), title);
//		}
//
//	}
//
//	@Then("User click the logout button")
//	public void user_click_the_logout_button() {
//
//		lp.setLogout();
//
//	}
//
//	// Add new customer page
//	@Then("User view the dashboard")
//	public void user_view_the_dashboard() {
//
////addcustomer = new AddNewCustomerPage(driver);
//
//		// Assert.assertEquals("Add a new customer / nopCommerce administration",
//		// addcustomer.getPageTitle());
//
//	}
//
//	@When("user click the customers menu")
//	public void user_click_the_customers_menu() {
//
//		// addcustomer.click_CustomerMenu();
//
//	}
//
////	@When("User click the customer menu item")
////	public void user_click_the_customer_menu_item() {
////
////		addcustomer.click_CcustomerMenuItem();
////	}
////
////	@When("user click the add new item")
////	public void user_click_the_add_new_item() {
////
////		addcustomer.click_BtnAddnew();
////	}
////
////	@When("User click the custome info")
////	public void user_click_the_custome_info() throws Throwable {
////		
////		String email=randomStringEmail()+"@gmail.com";
////		
////		addcustomer.set_Email(email);
////		
////		addcustomer.set_Password("test123");
////		
////		addcustomer.set_FirstName("jack");
////		
////		addcustomer.set_LastName("mavles");
////		
////		addcustomer.Set_Gender("Male");
////		
////		addcustomer.set_DOB("8/10/2023");
////		
////		addcustomer.set_Company("ThishiHenikSoftware");
////		
////		addcustomer.set_TaxExempt();
////		
////		Thread.sleep(5000);
////		
////		addcustomer.set_CustomerRoles("Guests");
////		
////		//addcustomer.set_Cust_Roles(, email)
////		
////		addcustomer.set_ManagerofVendor("Vendor1");
////
////		
////		
////
////	}
////
////	@When("User click the save button")
////	public void user_click_the_save_button() throws InterruptedException {
////		
////		addcustomer.buttonsave();
////		
////		Thread.sleep(5000);
////
////	}
////
////	@Then("User verify the confirmation message {string}")
////	public void user_verify_the_confirmation_message(String message) {
////		
////		Assert.assertEquals(message, driver.findElement(By.tagName("body")).getText().contains(" The new customer has been added successfully"));
////	}
////
//
//}
