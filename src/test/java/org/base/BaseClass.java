package org.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {
	
	
	WebDriver driver;
	
	public void initializeBrowser(String Browser) {
		
		if(Browser.equals("Chrome")) {
			
			driver=new ChromeDriver();		
		
		}else if(Browser.equals("FireFox")) {
			
			driver=new FirefoxDriver();
			
		}
		
		
		

	}
	
	public void teadDown() {
		
		driver.quit();

	}

}
