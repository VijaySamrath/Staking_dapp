//FUNCTION CALL 

loadInitialData("sevenDays");
connectMe("metamask_wallet");
function connectWallet() {}

function openTab(event, name) {
    console.log(name);
    contractCall = name;
    getSelectedTab(name);
    loadInitialData(name);
}

async function  loadInitialData(sClass) {
    console.log(sClass);
    try {
        clearInterval(countDownGlobal);

        let cObj = new web3Main.eth.Contract(
            SELECT_CONTRACT[_NETWORK_ID].STACKING.abi,
            SELECT_CONTRACT[_NETWORK_ID].STACKING[sClass].address 
        );

        //ID ELEMENTS DATA
        let totalUsers = await cObj.methods.getTotalUsers().call();
        letcApy = await cObj.methods.getAPY().call();
        //GET USER
        let userDetail = await cObj.methods.getUser(currentAddress).call();

        const user = {
            lastRewardCalculationTime: userDetail.lastRewardCalculationTime,
            lastStakeTime: userDetail.lastStakeTime,
            rewardAmount: userDetail.rewardAmount,
            rewardsClaimedSoFar: userDetail.rewardsClaimedSoFar,
            stakeAmount: userDetail.stakeAmount,
            address: currentAddress
        };
        localStorage.setItem("User", JSON.stringify(user));

        let userDetailBal = userDetail.stakeAmount / 10 ** 18;

        document.getElementById(
            "total-locked-user-token"
        ).innerHTML = `${userDetailBal}`;

        //ELEMENT --ID
        document.getElementById(
            "num-of-staking-value"
        ).innerHTML = `${totalUsers}`;
        document.getElementById("apy-value-feature").innerHTML = `${cApy} % `;

        //Class ELEMENT DATA 
        let totalLockedTokens = await cObj.methods.getTotalStakedTokens().call();
        let earlyUNstakeFee = await cObj.methods.getEarlyUnstakeFeePercentage().call();

        //ELEMENT --CLASS
        document.getElementById("total-locked-tokens-value").innerHTML = `${
            totalLockedTokens / 10 ** 18
        } ${SELECT_CONTRACT[_NETWORK_ID].TOKEN.symbol}`;

        document
          .querySelectorAll(".early-unstake-fee-value")
          .forEach(function (element) {
            element.innerHTML = `${earlyUnstakeFee / 100}%`;
          });

        let minStakeAmount = await cObj.methods.getMinimumStakingAmount().call();
        minStakeAmount = Number(minStakeAmount);
        let minA;
        
        if (minStakeAmount) {
            minA = `${(minStakeAmount/ 10 ** 18).toLocaleString()} ${
                SEELECT_CONTRACT[_NETWORK_ID].TOKEN.symbol
            }`;
        } else {
            minA ="N/A";
        }

        document
          .querySelectorAll(".Minimum-Staking-Amount")
          .forEach(function (element) {
            element.innerHTML = `{minA}`;
          });
          document
            .querySelectorAll(".Maximum-Staking-Amount")
            .forEach(function (element) {
               element.innerHTML = `${(0000000).toLocaleString()} ${
                SEELECT_CONTRACT[_NETWORK_ID].TOKEN.symbol
               }`;
            });
        
        let isStakingPaused = await cObj.methods.getStakingStatus().call();
        let isStakingPausedText;

        let startDate = await cObj.methods.getStakingStatus().call();
        startDate = Number(startDate) * 1000;

        let endDate = await cObj.methods.getStakeEndDate().call();
        endDate = Number(endDate) * 1000;

        let stakeDays =  await cObj.methods.getStakeDays().call();

        let days = Math.floor(Number(stakeDays) / (3600 * 24));

        let daysDisplay = days > 0 ? days + (days == 1 ? " day, " : " days, ") : "";

        document.querySelectorAll(".Lock-period-value").forEach(function (element) {
            element.innerHTML = `${dayDisplay}`;
        });

        let rewardBal = await cObj.methods
          .getUserEstimatedRewards()
          .call({ from: currentAddress });
        
        document.getElementById("user-reward-balance-value").value = `Reward: ${
          rewardBal / 10 ** 18
        } ${SELECT_CONTRACT[_NETWORK_ID].TOKEN.symbol}`;

        //USER
        let balMainUser = currentAddress
         ? await oContractToken.methods.balanceOf(currentAddress).call()
         : "";
        
        balMainUser = Number(balMainUser) / 10 ** 18;

        document.getElementById(
            "user-token-balance"
        ).innerHTML = `Balance: ${balMainUser}`;

        let currentDate = new Date().getTime();

        if (isStakingPaused) {
            isStakingPausedText  ="Paused";
        } else if (currentDate < startDate) {
            
        }

    }
}
