const apikey = "74GE7Y1X9X8C2DI2VFZN91YGCY2TDTZ7V8"
//latestblockdiv = document.getElementById("latestblock")

la = document.getElementById('latestblock')
rest = document.getElementById("mybutton")
rest.addEventListener("click", function () {
  mostRecentBlock()
})
mostRecentBlock = async () => {
  const url = await fetch(`https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apikey}`)
  const newData = await url.json()
  const result = parseInt(newData.result)
  document.getElementById("latestblock").innerHTML = result
  // call = document.getElementById("latestblock").innerHTML = result  
}




ethSupply = document.getElementById("ethsupply")
ethSupplyButton = document.getElementById('supplybutton')
ethSupplyButton.addEventListener("click", function () {
  supplyOfEth()
})
supplyOfEth = async () => {
  const url = await fetch(`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${apikey}`)
  const firstData = await url.json()
  const firstResult = firstData.result / 1000000000000000000
  document.getElementById('ethsupply').innerHTML = firstResult
}






ethLastPrice = document.getElementById("ethprice")
ethLastPriceButton = document.getElementById('lastprice')
ethLastPriceButton.addEventListener("click", function () {
  ethLastPrice()
})
ethLastPrice = async () => {
  const url = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apikey}`)
  const data = await url.json()
  const ethUSD = await data.result.ethusd
  document.getElementById('ethprice').innerHTML = ethUSD

  console.log(ethUSD)
  //  const second = data
}




transactionApi = document.getElementById("transApi")
transactionApiButton = document.getElementById('transactionApi')
transactionApiButton.addEventListener("click", function () {
  transactionApi()
})
  transactionApi = async () => {
    const url = await fetch(`https://api.etherscan.io/api?module=transaction&action=getstatus&txhash=0x15f8e5ea1079d9a0bb04a4c58ae5fe7654b5b2b4463375ff7ffb490aa0032f3a&apikey={$apikey}`)
    const data = await url.json()
    const isError = await data.result.isError
    const errorDescription = await data.result.errDescription
    if (isError == '1') {
      document.getElementById('transApi').innerHTML = errorDescription
    } else {
      document.getElementById('transApi').innerHTML = 'no error!'

    }
  }
