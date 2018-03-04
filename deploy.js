const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/TipketToken.json');

const provider = new HDWalletProvider(
    'under reopen child knee horn silver trim cannon brief heart wish witness',
    'https://rinkeby.infura.io/qCPxJQV2ZokAOV6SzbMG'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Deployment Account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to:', result.options.address); 
    
};
deploy();

// Contract token address TipketToken
// 0x12C758E673C43Be753c7ceF339bb36eF60500Ee4

// Owner
// 0x6141735DB60092f7d92e38485966086423316233
