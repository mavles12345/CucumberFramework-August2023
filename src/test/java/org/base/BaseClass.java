package org.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {
	
	
	
	
	public void initializeBrowser(String Browser) {
		
		if(Browser.equals("Chrome")) {
			
			WebDriver driver=new ChromeDriver();		
		
		}else if(Browser.equals("FireFox")) {
			
			WebDriver driver=new FirefoxDriver();
			
		}
		

	}

}
