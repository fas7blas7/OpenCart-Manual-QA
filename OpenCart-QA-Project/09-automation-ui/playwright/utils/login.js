async function adminLogin(page) {

  await page.goto('http://localhost:80/opencart/upload/adminqa');

  await page.fill('#input-username', 'admin');

  await page.fill('#input-password', 'admin');

  await page.click('button[type="submit"]');
}

module.exports = { adminLogin };