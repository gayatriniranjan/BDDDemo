package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepDefinition {
	WebDriver driver;
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
	    System.setProperty("webdriver.chrome.driver","C:\\Users\\gayat\\OneDrive\\Desktop\\Local Repo\\chromedriver\\chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("https://www.freecrm.com/index.html");
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable {
		String actual=driver.getTitle();
		String expected ="Free CRM software for any business with sales, support and customer relationship management";
		Assert.assertEquals(expected,actual);
		WebElement loginLink= driver.findElement(By.linkText("Login"));
		loginLink.click();
		String actualLoginTitle=driver.getTitle();
		String expectedLoginTitle="Cogmento CRM";
		Assert.assertEquals(actualLoginTitle,expectedLoginTitle);
		
	    
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
		WebElement email= driver.findElement(By.name("email"));
		WebElement password= driver.findElement(By.name("password"));
		email.sendKeys(arg1);
		password.sendKeys(arg2);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		WebElement submitButton=driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]"));
		submitButton.click();
	    System.out.println("in click");
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		//WebElement nameSpan=driver.findElement(By.xpath("//*[@id=\"top-header-menu\"]/div[2]/span[1]"));
		//String actualText=nameSpan.getText();
		//String expectedText="g g";
		//Assert.assertEquals(expectedText,actualText);
	   
	}


}
