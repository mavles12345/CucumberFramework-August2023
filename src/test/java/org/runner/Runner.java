package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = ".//Feature", glue = "org.stepdefiniton", monochrome = true, dryRun = false,
		strict=true,
		plugin = { "pretty", "html:test-output" }

)

public class Runner {

}
