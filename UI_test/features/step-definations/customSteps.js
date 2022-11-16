const { When, Then, Before, After, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const assert = require("assert");
const chai = require("chai");
const should = chai.should();

let driver;

let sum = 0;

Before(function () {
  driver = new webdriver.Builder().forBrowser("chrome").build();
});

After(function () {
  //driver.quit();
});

// Admin LogIn Functions
Given("Admin visit Shopizer", { timeout: 60 * 1000 }, async () => {
  await driver.get("http://localhost:82/#/auth");
});

When("Admin enter username", { timeout: 60 * 1000 }, async () => {
  await driver
    .findElement(By.id("inputUsername1"))
    .sendKeys("admin@shopizer.com");
});

Given("Admin enters Password", { timeout: 60 * 1000 }, async () => {
  await driver.findElement(By.name("password")).sendKeys("password");
});

Given("Admin Clicks on Login", { timeout: 60 * 1000 }, async () => {
  await driver.findElement(By.css("button")).click();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Then("Admin homepage is diplayed", { timeout: 60 * 2000 }, (done) => {
  //return
  sleep(2000).then(() => {
    driver.getCurrentUrl().then((result) => {
      expect(result).equal("http://localhost:82/#/pages/home");
      done();
    });
  });
});

// User LogIn Functions

Given("User visit Shopizer", { timeout: 60 * 1000 }, async () => {
  await driver.get("http://localhost/login");
});

When("User enters {string}", { timeout: 60 * 1000 }, async (st) => {
  // Write code here that turns the phrase above into concrete actions
  await driver.findElement(By.name("username")).sendKeys(st);
});

When("User enters pass {string}", async (st) => {
  await driver.findElement(By.name("loginPassword")).sendKeys(st);
});

When("User clicks on Login", { timeout: 60 * 1000 }, async () => {
  await driver.findElement(By.id("rcc-confirm-button")).click();
  await driver.findElement(By.xpath(".//button[@type ='submit']")).click();
});

Then("User homepage is displayed", { timeout: 60 * 2000 }, (done) => {
  sleep(2000).then(() => {
    driver.getCurrentUrl().then((result) => {
      expect(result).equal("http://localhost/my-account");
      done();
    });
  });
});

// User SignUp

Given("user navigates to register page", async () => {
  // Write code here that turns the phrase above into concrete actions
  await driver.findElement(By.linkText("Register")).click();
});

When(
  "user enters info {string}, {string}, {string}, {string}",
  async (mail, pass, fname, lname) => {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.name("email")).sendKeys(mail);
    await driver.findElement(By.name("password")).sendKeys(pass);
    await driver.findElement(By.name("repeatPassword")).sendKeys(pass);
    await driver.findElement(By.name("firstName")).sendKeys(fname);
    await driver.findElement(By.name("lastName")).sendKeys(lname);
    await driver
      .findElement(
        By.xpath(".//div [@class='login-input'][6]/select/option[2]")
      )
      .click();

    sleep(1000).then(() => {
      driver
        .findElement(
          By.xpath(".//div [@class='login-input'][7]/select/option[2]")
        )
        .click();
    });
  }
);

When("user cliks on register", function () {
  // Write code here that turns the phrase above into concrete actions
  sleep(2000).then(() => {
    driver
      .findElement(By.xpath("(.//div [@class='button-box']/button)[2]"))
      .click();
  });
});

Then("account is registered", { timeout: 60 * 3000 }, (done) => {
  sleep(3000).then(() => {
    driver.getCurrentUrl().then((result) => {
      expect(result).equal("http://localhost/my-account");
      done();
    });
  });
});

//Delete Account

When("User clicks on Account Management", { timeout: 60 * 2500 }, (done) => {
  // await driver.findElement(By.xpath("(.//button[@type='button'])[5]")).click();
  //return "pending";
  sleep(2500).then(() => {
    driver.findElement(By.xpath("(.//button[@type='button'])[5]")).click();
    done();
  });
});

When("User clicks on Delete Your Account", { timeout: 60 * 2500 }, (done) => {
  sleep(2500).then(() => {
    driver.findElement(By.xpath("(.//button[@type='button'])[6]")).click();
    //driver.findElement(By.className("btn btn-lg btn-danger  ")).click();
    done();
  });
});

When("User confirms Deletetion", { timeout: 60 * 3000 }, (done) => {
  sleep(3000).then(() => {
    driver.findElement(By.className("btn btn-lg btn-danger  ")).click();
    done();
  });
});

Then("Account is Deleted", { timeout: 60 * 3500 }, (done) => {
  sleep(3500).then(() => {
    driver.getCurrentUrl().then((result) => {
      expect(result).equal("http://localhost/");
      done();
    });
  });
});

//Product CLick
Given("User visits Shopizer homepage", async () => {
  await driver.get("http://localhost/");
});

When("User Clicks on a Product", { timeout: 60 * 1000 }, (done) => {
  driver.sleep(1000).then(() => {
    driver.findElement(By.xpath("(.//img)[4]")).click();
    done();
  });
  // console.log("First Product Clicked");
  // done();
});

Then(
  "Product description page is displayed",
  { timeout: 60 * 2000 },
  (done) => {
    // Write code here that turns the phrase above into concrete actions
    driver.sleep(2000).then(() => {
      driver.getCurrentUrl().then((result) => {
        expect(result).equal("http://localhost/product/olive-table");
        done();
      });
    });
  }
);

//ADD to CART
Given("User visits Product page", (done) => {
  driver.get("http://localhost/product/olive-table");
  done();
});

Given("User clicks on cart button", { timeout: 60 * 1000 }, (done) => {
  sleep(1000).then(() => {
    driver.findElement(By.className(".//a[@class='icon-cart']")).click();
    done();
  });
});

Given("User clicks on View Cart button", { timeout: 60 * 1500 }, (done) => {
  sleep(1500).then(() => {
    driver.findElement(By.xpath(".//a[text()='View Cart']")).click();
    done();
  });
});

Then(
  "Cart is diplayed",
  function () {
    timeout: 60 * 2000;
  },
  (done) => {
    driver.sleep(2000).then(() => {
      driver.getCurrentUrl().then((result) => {
        expect(result).equal("http://localhost/cart");
        done();
      });
    });
  }
);

// delivery adrees updtae
When("user clicks on delivery address", { timeout: 60 * 2500 }, (done) => {
  sleep(2500).then(() => {
    driver.findElement(By.xpath("(.//button[@variant='link'])[3]")).click();
    done();
  });
});
When("user inputs all info", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("user clicks on continue", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
Then("delivery address will be update", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
