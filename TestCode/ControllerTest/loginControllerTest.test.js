const {login} = require("./loginControllerTest.js");

let loginRoute = "F:\Study\Spring 2021\CSE470-05\Avoir-master\views\Login.ejs";

test("Done testing in login", async () => {
    const logi = await login(loginRoute);
    expect(logi).not.toBe(null);
});