<template>
<header>
  <div class="container">
    <div class="logo">
      <a href="/"><img src="img/duck.svg" alt="img">The<span>fungible</span></a>
    </div>

    <!-- crypto tickers -->
    <!-- <div class="numbers">
      <div class="btc">
        <p v-if="btc">BTC <span>{{ btc.price_usd | decimal }}$</span></p>
      </div>
      <div class="eth">
        <p v-if="eth">ETH <span>{{ eth.price_usd | decimal }}$</span></p>
      </div>
      <div class="eos">
        <p v-if="eos">EOS <span>{{ eos.price_usd | decimal }}$</span></p>
      </div>

    </div> -->

    <!-- searchbar -->
    <!-- <div class="spacer"></div> -->
    <!-- <form action="#" class="search-bar">
      <input type="text" class="search-input" placeholder="">
      <button class="search-button">
        <img src="img/search-icon.png" alt="img">
      </button>
    </form> -->
  </div>
</header>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      btc: null,
      eth: null,
      eos: null
    }
  },
  filters: {
    decimal (value) {
      return parseFloat(value).toFixed(0)
    }
  },
  mounted () {
    // axios
    //   .get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
    //   .then(response => (this.btc = response.data[0]))
    // axios
    //   .get('https://api.coinmarketcap.com/v1/ticker/ethereum/')
    //   .then (response => (this.eth = response.data[0]))
    // axios
    //   .get('https://api.coinmarketcap.com/v1/ticker/eos/')
    //   .then (response => (this.eos = response.data[0]))
  }
}
</script>


<style>
.spacer{
  width: 170px;
}
.numbers {
  margin-right: 10px;
}
.logo a {
  font-size: 31px;
  font-family: bergenmono;
  font-weight: bold;
  color: #818991 !important;
  line-height: 31px;
  display: flex;
  text-decoration: none;
}
.logo {
  text-transform: uppercase;
}

.logo img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.logo span {
  color: #CE242B;
}
</style>
