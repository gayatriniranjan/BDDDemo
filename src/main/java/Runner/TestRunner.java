package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\gayat\\eclipse-workspace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\login.Feature",
		glue= {"StepDefinitions"},
		format= {"pretty","html:test-output"},
		monochrome=true,
		strict=true,
		dryRun=false
		)

public class TestRunner {
	

}
