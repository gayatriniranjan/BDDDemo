package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page(){
		System.setProperty("webdriver.chrome.driver","C:\\Users\\gayat\\OneDrive\\Desktop\\Local Repo\\chromedriver\\chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("https://www.freecrm.com/index.html");
	    String actual=driver.getTitle();
		String expected ="Free CRM software for any business with sales, support and customer relationship management";
		Assert.assertEquals(expected,actual);
		WebElement loginLink= driver.findElement(By.linkText("Login"));
		loginLink.click();
		String actualLoginTitle=driver.getTitle();
		String expectedLoginTitle="Cogmento CRM";
		Assert.assertEquals(actualLoginTitle,expectedLoginTitle);
	}

	@When("^User Enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Enters_and(String arg1, String arg2) throws Throwable {
		WebElement email= driver.findElement(By.name("email"));
		WebElement password= driver.findElement(By.name("password"));
		email.sendKeys(arg1);
		password.sendKeys(arg2);
	}


	@Then("^User logs in$")
	public void user_logs_in() throws Throwable {
		String actualLoginTitle=driver.getTitle();
		String expectedLoginTitle="Cogmento CRM";
		Assert.assertEquals(actualLoginTitle,expectedLoginTitle);
	  
	}

	@Given("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		Actions actions =new Actions(driver);
		
		WebElement conLink=driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[3]/a/i"));
		conLink.click();
	    
	}

	@When("^User is on Contacts Page$")
	public void user_is_on_Contacts_Page() throws Throwable {
	    
	}

	@Then("^User creates contact$")
	public void user_creates_contact() throws Throwable {
	    
	}




}
