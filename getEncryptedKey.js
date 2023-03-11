const ethers = require('ethers');
const fs = require('fs');
require('dotenv').config()

async function main() {
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
  const encryptedKey = await wallet.encryptSync(process.env.PRIVATE_KEY_PASSWORD, process.env.PRIVATE_KEY)
  fs.writeFileSync('./encryptedKey.json', encryptedKey)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1)
  })