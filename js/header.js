const _NETWORK_ID = 80001;
let SELECT_CONTRACT = {};

SELECT_CONTRACT[_NETWORK_ID] = {
    network_name: "Polygon Mumbai",
    explorer_url: "https://mumbai.polygonscan.com",
    STAKING: {
        //0x4cA2a661F6bA50C59Eb0854ff6F1B06e228f72b6
        sevenDays: {
            address: "0x51168d2D1B935932959Bd7617892a5C1DB7Fb0AA",
        },
        tenDays: {
            address: "0x18E6d0eb4Cf368b4089BdEE8158a46EAF5003aA3",
        },
        thirtyTwoDays: {
            address: "0xD4623098a915D254810dc9E8f210733E4108ebaD",
        },
        ninetyDays: {
            address: "0x4aafc4309Decf7Fc9cBD560a9c65A0052486f97b",
        },
        abi: [],
    },

    TOKEN: {
        symbol: "TBC",
        address: "",
        abi: [],
    },
};

let countDownGlobal;

/* wallet connection */

let web3;

let oContractToken;

let contractCall = "sevenDays";

let currentAddress;

let web3Main = new web3("https://rpc.ankr.com/polygon_mumbai");

// Create an instance of notyf
var notyf = new Notyf({
    duration: 3000,
    position: { x: "right", y: "bottom" },
});