package org.stepdefiniton;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.pages.AddNewCustomerPage;
import org.pages.LoginPage;
import org.pages.SearchCustomerPage;

public class BaseClass {

	public static WebDriver driver;// changaed into static to avoid null pointer exception
	public LoginPage lp;

	public AddNewCustomerPage addCustomer;

	public SearchCustomerPage searchCust;

	public static String randomStringEmail() {

		String randomString = RandomStringUtils.randomAlphabetic(5);

		return randomString;
	}
	
	public void waitforElement(WebElement element) {
		
		WebDriverWait wait=new WebDriverWait(driver, 30);
		
		wait.until(ExpectedConditions.visibilityOf(element));
	}

	
	public static void implicitwait() {
		
		
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}
}
