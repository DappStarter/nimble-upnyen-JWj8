require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rival script song grace immense army gesture'; 
let testAccounts = [
"0x7e6e49da13da21f307f427e47c45136e94dbd234b623a27ea7a6d5863486451a",
"0x6de6eb618faac92806ca8461a87465220fe0d0e3a18cca6c591eba5438109ccd",
"0x59fcd93edd612af164431ae90a0dcd6b1391544ea07cfa99700661a787c4a0c4",
"0x8316523822c883ac8dccc68349aa5eff5cfd79162a1c191f8ae68a9fe4751cfb",
"0x098cedf9ab58fd236920dd0592200d07f3529af986b657d2808345da1f6450d2",
"0xca41d603d97cf37528a24e4d527b39c639f012ab3f4db9e885f247511da7b8f3",
"0x481453d1679ffb374743c502778545e1ca83712634311dea704d1a47bf67d2ca",
"0xd4d8682940a0f72687e34e67a045a3916d7f07d84c9e897dee0f02dd43db54b4",
"0x724c36ace59465fed52f214dc0468461d0ba996eab3b83d461470819ef8b9d93",
"0xcc7f932b5eadce0a10e480a549049cf5b3223d9210fdb205449f305d978fe410"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

