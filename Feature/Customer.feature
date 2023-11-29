Feature: Add customer 
Scenario: Add new customer 
	Given User launch the browser 
	When User enter the url "https://admin-demo.nopcommerce.com/login" 
	When User add the email as "admin@yourstore.com" and password as "admin" 
	And User click the login button
	Then User view the dashboard
	When user click the customers menu
	And User click the customer menu item
	When user click the add new item
	When User click the custome info
	And User click the save button
	Then User verify the confirmation message " The new customer has been added successfully"
	
	
