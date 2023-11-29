Feature: User login with valid credentials 

Scenario: User login with valid credentials successfully 
	Given User launch the browser 
	When User enter the url "https://admin-demo.nopcommerce.com/login" 
	Then User add the email as "admin@yourstore.com" and password as "admin" 
	And User click the login button 
	Then User validate page should be "Dashboard / nopCommerce administration" 
	And User click the logout button 
	Then User validate page should be "Your store. Login" 
	And User close the browser 
	
	
		
Scenario Outline: User login with valid credentials successfully 
	Given User launch the browser 
	When User enter the url "https://admin-demo.nopcommerce.com/login" 
	Then User add the credential email as "<email>" and password as "<password>"
	And User click the login button 
	Then User validate page should be "Dashboard / nopCommerce administration" 
	And User click the logout button 
	Then User validate page should be "Your store. Login" 
	And User close the browser 
	
	Examples: 
	
		|email|password|
		|admin@yourstore.com|admin|
		|admin@yourstore|admin12345|
		