Feature: search customer 
Scenario: search customer by email
	Given User launch the browser 
	When User enter the url "https://admin-demo.nopcommerce.com/login" 
	When User add the email as "admin@yourstore.com" and password as "admin" 
	And User click the login button
	Then User view the dashboard
	When user click the customers menu
	And User click the customer menu item
	When user add the customer email
	And user click the search button
	Then user validate the email in the search table
	And User close the browser  
	
	
Scenario: search customer by name
	Given User launch the browser 
	When User enter the url "https://admin-demo.nopcommerce.com/login" 
	When User add the email as "admin@yourstore.com" and password as "admin" 
	And User click the login button
	Then User view the dashboard
	When user click the customers menu
	And User click the customer menu item
	When user add the customer first name
	When user add the customer last name
	And user click the search button
	Then user validate the name in the search table
	And User close the browser  
	