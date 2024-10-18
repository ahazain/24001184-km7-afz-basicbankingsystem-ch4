const express = require("express");
const router = express.Router();
const users = require("../controllers/usersControllers");
const akun = require("../controllers/akunControlers");
const transaksi = require("../controllers/transaksiControllers");

//route user
router.get("/users", users.showUsers);
router.get("/users/:usersId", users.showUsersId);
router.post("/users", users.createUsers);
router.put("/users/:usersId", users.updateUsers);
router.delete("/users/:usersId", users.destroyUsers);
//route akun
router.get("/accounts", akun.showAccounts);
router.get("/accounts/:accountsId", akun.showAccountsId);
router.post("/accounts", akun.createAccounts);
router.put("/accounts/:accountsId", akun.updateAccounts);
router.delete("/accounts/:accountsId", akun.destroyAccounts);
//route transaksi
router.get("/:transactions", transaksi.showTransaksi);
router.get("/:transactions/:transactionId", transaksi.showTransaksiId);
router.post("/:transactions", transaksi.createTransaksi);
router.put("/transactions/:transactionId", transaksi.updateTransaksi);
router.delete("/:transactions/:transactionId", transaksi.destroyTransaksi);

module.exports = router;
