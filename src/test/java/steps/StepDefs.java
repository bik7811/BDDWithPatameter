package steps;


import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefs {
	 WebDriver driver;
	 LoginPage loginPage;
	
	@Before
	public void Before_run() {
		driver = BrowserFactory.init();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		
	}
	
	@Given("^user is on the TechFios Login Page$")
	public void user_is_on_the_TechFios_Login_Page() throws Throwable {
		driver.get("https://www.techfios.com/billing/?ng=admin");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	    
	}

	@When("^user enters username as \\\"([^\\\"]*)\\\"$")
	public void user_enters_username(String userName) throws Throwable {
		loginPage.enterUserName(userName);
		Thread.sleep(2000);
	    
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password(String password) throws Throwable {
		loginPage.enterPassword(password);
		Thread.sleep(2000);
	    
	}

	@When("^user click on Signin Button$")
	public void user_click_on_Signin_Button() throws Throwable {
		loginPage.clickSigninButton();

	}
	
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String userName, String password) throws Throwable {
	    loginPage.enterCredentials(userName, password);
	}

	@Then("^user should land on Dashboard Page$")
	public void user_should_land_on_Dashboard_Page() throws Throwable {
//		loginPage.getPageTitle();
		String exptectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(exptectedTitle, actualTitle );
		loginPage.takeScreenshotAtEndOfTest(driver);
		
	    
	}
	
	
	
	
		
	@After
	public void tear_down() {
		driver.close();
		driver.quit();
	}





}
