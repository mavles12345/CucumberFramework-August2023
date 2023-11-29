package org.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.stepdefiniton.BaseClass;

public class AddNewCustomerPage extends BaseClass{
	
	//public WebDriver driver;
	
	public AddNewCustomerPage(WebDriver rdriver) {
		
		this.driver=rdriver;
		
		PageFactory.initElements(driver, this);
	}

	
	By lnk_CustomerMenuItem = By.xpath("//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]");//Customer menu
	By lnk_CustomerMenu = By.xpath("//a[@href='#']//p[contains(text(),'Customers')]");//customer menu item
	By btnAddnew = By.xpath("//a[@href='/Admin/Customer/Create']");//add new button
	By txtEmail = By.id("Email");//Email
	By txtPassword = By.id("Password");//password
	By txtcustomerroles = By.xpath("//div[@class='input-group-append input-group-required']//div[@role='listbox']");//Customer roles
	// By
	// customerrolesoption=By.xpath("//ul[@id='SelectedCustomerRoleIds_listbox']//li");
	By lstItemAdminstrator = By.xpath("//li[contains(text(),'Administrators')]");//customer role administrators
	By lstItemModerators = By.xpath("//li[contains(text(),'Forum Moderators')]");//Customer forum moderators
	By lstItemGuests = By.xpath("//li[contains(text(),'Guests')]");//Customer forum Guests
	By lstItemRegistered = By.xpath("//li[contains(text(),'Registered')]");// Customer forum Registered

	By lstItemVendors = By.xpath("//li[contains(text(),'Vendors')]");// Customer forum Vendors

	By rdMaleGender = By.id("Gender_Male");
	By rdFemaleGender = By.id("Gender_Female");
	By txtFirstName = By.id("FirstName");//firstname
	By txtLastName = By.id("LastName");//last name
	By txtDOB = By.id("DateOfBirth");//date of birth

	By txtCompany = By.id("Company");
	By drpmgrofVendor = By.id("VendorId");

	By txtAdminComment = By.id("AdminComment");

	By txtIsTaxExempt = By.id("IsTaxExempt");
	
	By phoneNumber=By.id("customer_attribute_1");

	By btSave = By.name("save");

	By txtNewsLetter = By.xpath("//div[@class='k-widget k-multiselect k-multiselect-clearable k-state-hover']");

//	Action Methods

	public String getPageTitle() {

		return driver.getTitle();

	}

	public void click_CcustomerMenuItem() {
		
		Actions a=new Actions(driver);
		
		WebElement lnk_CustomerMenuItem= driver.findElement(By.xpath("//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]"));//Customer menu
		
		a.moveToElement(lnk_CustomerMenuItem).click().perform();
		
		//driver.findElement(lnk_CustomerMenuItem).click();

	}

	public void click_CustomerMenu() {
		driver.findElement(lnk_CustomerMenu).click();

	}

	public void click_BtnAddnew() {
		driver.findElement(btnAddnew).click();

	}

	public void set_Email(String email) {
		driver.findElement(txtEmail).sendKeys(email);

	}

	public void set_Password(String password) {

		driver.findElement(txtPassword).sendKeys(password);
	}

	public void set_CustomerRoles(String roles) throws InterruptedException {

//		if (!roles.equals("vendors")) {
//
//			driver.findElement(By.xpath("//*[@id='SelectedCustomerRoleIds_taglist']//li/span[1]")).clear();
//		}

		driver.findElement(txtcustomerroles).click();

		WebElement listitem;

		Thread.sleep(3000);

		if (roles.equals("Administrators")) {

			listitem = driver.findElement(lstItemAdminstrator);
		}

		else if (roles.equals("Guests")) {

			listitem = driver.findElement(lstItemGuests);
		}

		else if (roles.equals("Forum Moderators")) {

			listitem = driver.findElement(lstItemModerators);
		}

		else if (roles.equals("Registered")) {

			listitem = driver.findElement(lstItemRegistered);
		}

		else {

			listitem = driver.findElement(lstItemVendors);
		}

		listitem.click();

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", listitem);
	}

	public void set_Cust_Roles(List<WebElement> element, String role1) {

		for (WebElement x : element) {

			if (x.getText().equalsIgnoreCase(role1))

				x.click();
			break;

		}

	}

	public void Set_Gender(String gender) {

		if (gender.equals("Male")) {
			driver.findElement(rdMaleGender).click();

		} else if (gender.equals("Female")) {
			driver.findElement(rdFemaleGender).click();
		} else {

			driver.findElement(rdMaleGender).click();
		}
	}

	public void set_ManagerofVendor(String vendor) {

		Select s = new Select(driver.findElement(drpmgrofVendor));

		s.selectByValue(vendor);

	}

	public void set_FirstName(String firstname) {

		driver.findElement(txtFirstName).sendKeys(firstname);

	}

	public void set_LastName(String lastname) {
		driver.findElement(txtLastName).sendKeys(lastname);

	}

	public void set_DOB(String DOB) {

		driver.findElement(txtDOB).sendKeys(DOB);
	}

	public void set_Company(String company) {
		driver.findElement(txtCompany).sendKeys(company);

	}

	public void set_AdminComment(String comment) {
		driver.findElement(txtNewsLetter).sendKeys(comment);

	}

	public void set_TaxExempt() {
		driver.findElement(txtIsTaxExempt).click();

	}

	public void buttonsave() {

		driver.findElement(btSave).click();
	}
	
	public void set_phoneNumber(Long phone) {
		
		String phoneNumber1=String.valueOf(phone);
		
		driver.findElement(phoneNumber).sendKeys(phoneNumber1);
	}

}



