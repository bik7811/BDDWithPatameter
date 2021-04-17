package page;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Liberary
	@FindBy(how = How.ID, using = "username")
	WebElement USER_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id='password']")
	WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[contains(text(), 'Sign in')]")
	WebElement SIGNIN_BUTTON_ELEMENT;

	// Interactive methods
	public void enterCredentials(String userName, String password) {
		USER_NAME_ELEMENT.sendKeys(userName);
		PASSWORD_ELEMENT.sendKeys(password);
		
		
	}
	
	
	public void enterUserName(String userName) {
		USER_NAME_ELEMENT.sendKeys(userName);
	}

	public void enterPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
	}

	public void clickSigninButton() {
		SIGNIN_BUTTON_ELEMENT.click();
	}
	
	public String getPageTitle() {
		return driver.getTitle();
	}
	
	public void takeScreenshotAtEndOfTest(WebDriver driver) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File SrcFile = ts.getScreenshotAs(OutputType.FILE);
		File DestFile = new File("user" + "/screenshots/" + System.currentTimeMillis() + " .png");
		FileUtils.copyFile(SrcFile, DestFile);
		
	}
	
	
	

}