require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food shoulder rescue pizza pudding ice light army gift'; 
let testAccounts = [
"0xaffcb67666369f63d74af3163e95caad90ac5e91149de8349c9a219e2c5fdf89",
"0xb8c999c31aa8a44164000cdec384931765fae81d2dcb823ece75817a8e4fe9d0",
"0x867c909e0970dadc18665493de900505a7696524042e898a8dcfb227ac078cdb",
"0xeff7659221a1f0e4badc101e51bc7722dc39feff6d4c3acfce0a62e6e967025f",
"0x888ab7e8e693d2c41c3e216c914eef022c20e95ad6e0d0c4c5d15f3ca06cce8a",
"0xf42c085f0688c0a2af6331a557f127437e99e4c58f2be423e1db7296408b79c5",
"0x785466ac748ff80e707707876489bfc6c8332b1de7bf20e2848cacd6e3524de9",
"0xb5620a47ea01412dea8960fb3a38ecbec8df024be6f9ce47fe37664db8760a6c",
"0x837ffbaf9b65945d872f99ed961083f4746eb9fc0922f2c96c4e89c7a24c7910",
"0x044bb7f96cf4f3f1736f7a51df99df6e57673a3e0f1a4780b8e5022ac93b86b2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


