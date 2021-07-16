const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://www2.hm.com/en_gb/login?logout=true");

  await page.setViewport({ width: 1280, height: 689 });

  await page.waitForSelector("form #email");
  await page.click("form #email");

  await page.type("form #email", "hohieukn@gmail.com");

  await page.waitForSelector(
    ".FieldList--input__2psr9 > .Field-module--childWrapper__Rpmaa > .PasswordInput-module--inputWrapper__1GJCY > .PasswordInput-module--showHidePasswordButton__1PHk7 > .BodyText-module--general__2yKZb"
  );
  await page.click(
    ".FieldList--input__2psr9 > .Field-module--childWrapper__Rpmaa > .PasswordInput-module--inputWrapper__1GJCY > .PasswordInput-module--showHidePasswordButton__1PHk7 > .BodyText-module--general__2yKZb"
  );

  await page.waitForSelector(
    "#app > .Container-module--container__3vaRh > form > .CTA-module--action__3hGPH > span"
  );
  await page.click(
    "#app > .Container-module--container__3vaRh > form > .CTA-module--action__3hGPH > span"
  );

  await browser.close();
})();
