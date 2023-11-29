package org.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.stepdefiniton.BaseClass;

public class SearchCustomerPage extends BaseClass {

	public SearchCustomerPage(WebDriver driver) {

		PageFactory.initElements(driver, this);

		// waitHelper = new WaitHelper(driver);
	}

	@FindBy(how = How.ID, using = "SearchEmail")
	WebElement setEmail;

	@FindBy(how = How.ID, using = "SearchFirstName")
	WebElement SearchFirstName;

	@FindBy(how = How.ID, using = "SearchLastName")
	WebElement SearchLastName;

	@FindBy(how = How.ID, using = "search-customers")
	WebElement searchcustomers;

	@FindBy(how = How.ID, using = "customers-grid")
	WebElement table;

	@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']/tbody/tr")
	List<WebElement> tableRows;

	@FindBy(how = How.XPATH, using = "//table[@id='customers-grid']/tbody/tr/td")
	List<WebElement> tableColumn;

	public void set_Email(String email) {

		setEmail.sendKeys(email);

	}

	public void set_FirstName(String firstname) {

		SearchFirstName.clear();
		SearchFirstName.sendKeys(firstname);

	}

	public void set_LastName(String lastname) {

		SearchLastName.clear();
		SearchLastName.sendKeys(lastname);
	}

	public void searchButton() {

		searchcustomers.click();

		//waitforElement(searchcustomers, 30);
		
		//waitforElement(searchcustomers, 30);
	}

	public int getNumberOfRows() {

		return tableRows.size();
	}

	public int getNumberOfColumns(int column) {
		return tableColumn.size();
	}

	public boolean searchByCustomerEmail(String email) {

//		boolean flag = false;
//
//		for (int i = 1; i <= getNumberOfRows(); i++) {
//			
//			table[@id='customers-grid']/tbody/tr[i]/td[2]
//
//			String emailid = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr" + i + "/td[2]"))
//					.getText();
//
//			System.out.println(emailid);
//
//			if (emailid.equals(email)) {
//
//				flag = true;
//			}

		boolean flag = false;

		for (int i = 1; i <= getNumberOfRows(); i++) {
			String emailID = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[2]"))
					.getText();

			System.out.println(emailID);

			if (emailID.equals(email)) {

				flag = true;
			}
		}

		return flag;

	}

	public boolean search_CustomerByName(String names) {

		boolean flag = false;

		for (int i = 1; i <= getNumberOfRows(); i++) {

			String name = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[3]"))
					.getText();

			String[] splitName = name.split(" ");

			if (splitName[0].equals("James") && splitName[1].equals("pan")) {

				flag = true;
			}

		}

		return flag;
	}

}
