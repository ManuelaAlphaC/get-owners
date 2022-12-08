const { Alchemy, Network } = require("alchemy-sdk");

const config = {
    apiKey: "API-KEY",
    network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {

    // The pond contract address
    const address = "CONTRACT-ADDRESS";

    // Block number or height
    const block = "NUMBER-BLOCK";

    // Get owners 
    const owners = await alchemy.nft.getOwnersForContract(address, false, block);
    console.log(owners);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();