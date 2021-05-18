const {getProducts} = require("./productModelTest.js");
const {getSingleProduct} = require("./productModelTest.js");
const {getCartProducts} = require("./productModelTest.js");
const {addToCart} = require("./productModelTest.js");
const {deleteFromCart} = require("./productModelTest.js");
const {updateCart} = require("./productModelTest.js");
const {getTotalPrice} = require("./productModelTest.js");
const {pay} = require("./productModelTest.js");
const {afterPay} = require("./productModelTest.js");
const {addProduct} = require("./productModelTest.js");
const {delProduct} = require("./productModelTest.js");


test("Done testing in getProducts", async () => {
    const getPro = await getProducts();
    expect(getPro).toBe("SELECT `id`, `img`, `title`, `description`, `price`, `quantity`, `status` FROM `product_info` WHERE 'status' != 'outofstock';");
});


test("Done testing in getSingleProduct", async () => {
    const getSingPro = await getSingleProduct(1395);
    expect(getSingPro).toBe("SELECT * FROM product_info WHERE id = " + 1395);
});


test("Done testing in getCartProducts", async () => {
    const getCartPro = await getCartProducts(1225);
    expect(getCartPro).toBe("SELECT *, cart_info.quantity as cqty FROM `cart_info` JOIN product_info on product_id = id WHERE user_id = " + 1225 + " AND cart_info.status = 'pending';");
});


test("Done testing in addToCart", async () => {
    const addCart = await addToCart(1339, 1456, "L", 450);
    expect(addCart).toBe("INSERT INTO `cart_info`( `user_id`, `product_id`, `product_price`, `quantity`, `status`, `cart_date`, `product_size`) VALUES (" + 1339 + ", " + 1456 + " ,"+ 450 + ", 1, 'pending', CURRENT_DATE, '"+ "L" + "');");
});

test("Done testing in deleteFromCart", async () => {
    const del = await deleteFromCart(1336);
    expect(del).toBe("DELETE FROM cart_info WHERE cart_id = " + 1336);
});


test("Done testing in updateCart", async () => {
    const upCart = await updateCart(1335, 5);
    expect(upCart).toBe("UPDATE `cart_info` SET `quantity`= "+ 5  +" WHERE cart_id = " + 1335);
});


test("Done testing in getTotalPrice", async () => {
    const totalPrice = await getTotalPrice(15898);
    expect(totalPrice).toBe("SELECT SUM(product_price * quantity) as total_price FROM `cart_info` AS ci WHERE status = 'pending' and user_id = " + 15898 + ";");
});


test("Done testing in pay", async () => {
    const payment = await pay(125658, "iuaghdgqwygeibhp", 850);
    expect(payment).toBe("INSERT INTO `payment_info`( `transation_id`, `user_id`, `amount`, `payment_date`) VALUES ('"+ "iuaghdgqwygeibhp" + "',"+ 125658 +" , " + 850 + " , CURRENT_DATE);");
});


test("Done testing in afterPay", async () => {
    const postPayment = await afterPay(14569);
    expect(postPayment).toBe("UPDATE `cart_info` AS ci SET ci.status = 'paid' WHERE user_id ="+ 14569 +";");
});


test("Done testing in addProduct", async () => {
    const login = await addProduct("Shirt01.jpeg", "Blue Shirt", "Good cotton shirt", 450, 2, "available");
    expect(login).toBe("INSERT INTO `product_info`( `img`, `title`, `description`, `price`, `quantity`, `status`, `product_type`) VALUES ('images/"+ "Shirt01.jpeg"+ "', '"+ "Blue Shirt" +"', '" + "Good cotton shirt"+ "', " + 450+ "," + 2 + ", 'instock', '"+ "available" + "')");
});


test("Done testing in delProduct", async () => {
    const login = await delProduct(1545);
    expect(login).toBe("DELETE FROM product_info WHERE id = "+1545);
});