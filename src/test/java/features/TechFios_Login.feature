@Login
Feature: Validate Login Functionality 

Background: 
	Given user is on the TechFios Login Page       
	
@Scenario1	
Scenario: user should be able login with valid credentials 
	When user enters username as "demo@techfios.com"  
	When user enters password as "abc123" 
	And user click on Signin Button        
	Then user should land on Dashboard Page     

@Scenario2	
Scenario: user should be able login with valid credentials 
	When user enters username as "demo@techfios.com"  
	When user enters password as "abc124" 
	And user click on Signin Button      
	Then user should land on Dashboard Page	
	
	
@Scenario3
Scenario Outline: user should be able to login with valid credentials(Keeping variables and Placeholders separated)
	When user enters "<userName>" and "<password>"  
	And user click on Signin Button       
	Then user should land on Dashboard Page 
	Examples:
	|userName|password|
	|demo@techfios.com|abc123|
	|demo@techfios.com|abc124|
#	|dem@techfios.com|abc123|
#	|dem@techfios.com|abc124|