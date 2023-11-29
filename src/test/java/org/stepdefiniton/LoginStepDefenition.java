package org.stepdefiniton;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import static org.junit.Assert.assertEquals;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.pages.AddNewCustomerPage;
import org.pages.LoginPage;
import org.pages.SearchCustomerPage;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;

public class LoginStepDefenition extends BaseClass {

	@Before
	public void setup() {

		WebDriverManager.chromedriver().setup();

		driver = new ChromeDriver();

		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		lp = new LoginPage(driver);

	}

	@After
	public void tearddown() {

		// driver.close();

	}

	@Given("User launch the browser")
	public void user_launch_the_browser() {

		driver = new ChromeDriver();

		lp = new LoginPage(driver);
	}

	@When("User enter the url {string}")
	public void user_enter_the_url(String Url) {

		driver.get(Url);

	}

	@Then("User add the email as {string} and password as {string}")
	public void user_add_the_email_as_and_password_as(String username, String password) {

		lp.setUsername(username);
		lp.setPassword(password);
	}

	@Then("User click the login button")
	public void user_click_the_login_button() {

		lp.setLogin();

	}

	@Then("User validate page should be {string}")
	public void user_validate_page_should_be(String title) {

		if (driver.getPageSource().equalsIgnoreCase("Login was unsuccessful. ")) {

			Assert.assertTrue(false);
		} else {

			Assert.assertEquals(driver.getTitle(), title);
		}

	}

	@Then("User click the logout button")
	public void user_click_the_logout_button() {

		lp.setLogout();

	}

	@Then("User close the browser")
	public void user_close_the_browser() {

		driver.close();

	}

	@Then("User add the credential email as {string} and password as {string}")
	public void user_add_the_credential_email_as_and_password_as(String email, String password) {
		lp.setUsername(email);
		lp.setPassword(password);
	}

	@When("user click the customers menu")
	public void user_click_the_customers_menu() {

		lp.click_CustomerMenu();

	}

	@Then("User view the dashboard")
	public void user_view_the_dashboard() {

		Assert.assertEquals("Dashboard / nopCommerce administration", lp.getPageTitle());

	}

	@When("User click the customer menu item")
	public void user_click_the_customer_menu_item() {

		lp.click_CcustomerMenuItem();
	}

	@When("user click the add new item")
	public void user_click_the_add_new_item() {

		lp.click_BtnAddnew();
	}

	@When("User click the custome info")
	public void user_click_the_custome_info() throws Throwable {

		String email = randomStringEmail() + "@gmail.com";

		lp.set_Emailcust(email);

		lp.set_Passwordcust("test123");

		lp.set_FirstName("jack");

		lp.set_LastName("mavles");

		lp.Set_Gender("Male");

		lp.set_DOB("8/10/2023");

		lp.set_Company("ThishiHenikSoftware");

		// lp.set_phoneNumber(78888888888l);
		lp.set_TaxExempt();

		Thread.sleep(5000);

		// lp.set_CustomerRoles("Administrators");

//		lp.set_ManagerofVendor("Vendor1");
//
//		List<WebElement> customerrolesoption = driver
//				.findElements(By.xpath("//ul[@id='SelectedCustomerRoleIds_listbox']//li"));
//
//		lp.set_Cust_Roles(customerrolesoption, "Forum Moderators");
//
	}

	@When("User click the save button")
	public void user_click_the_save_button() throws InterruptedException {

		lp.buttonsave();

		Thread.sleep(5000);

	}

	@Then("User verify the confirmation message {string}")
	public void user_verify_the_confirmation_message(String message) {

		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
				.contains("The new customer has been added successfully."));

	}

	@When("user add the customer email")
	public void user_add_the_customer_email() {

		searchCust = new SearchCustomerPage(driver);

		searchCust.set_Email("james_pan@nopCommerce.com");

	}

	@When("user click the search button")
	public void user_click_the_search_button() {

		searchCust.searchButton();

	}

	@Then("user validate the email in the search table")
	public void user_validate_the_email_in_the_search_table() {

		implicitwait();

		boolean status = searchCust.searchByCustomerEmail("james_pan@nopCommerce.com");
		Assert.assertEquals(true, status);

	}

	@When("user add the customer first name")
	public void user_add_the_customer_first_name() {

		searchCust = new SearchCustomerPage(driver);

		searchCust.set_FirstName("James");

	}

	@When("user add the customer last name")
	public void user_add_the_customer_last_name() {

		searchCust.set_LastName("Pan");
	}

	@Then("user validate the name in the search table")
	public void user_validate_the_name_in_the_search_table() {

		implicitwait();

		boolean status = searchCust.search_CustomerByName("James Pan");
		Assert.assertEquals(true, status);

	}

}
