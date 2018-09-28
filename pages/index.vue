<template>
  <div>
    <Header/>
  
    <section>
      <div class="row">
        <div class="col span-1-of-3">
          <!-- Card Crypto Love-->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>
        <div class="col span-1-of-3">
          <!-- Card Crypto Love-->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>
        <div class="col span-1-of-3">
          <!-- Card Crypto Love-->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>  
      </div>
      <div class="row">
        <div class="col span-1-of-3">
          <!-- Card Crypto Love-->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>
        <div class="col span-1-of-3">
          <!-- Card Crypto Love-->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>
        <div class="col span-1-of-3">
          <!-- Card Crypto Love-->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>  
      </div>
      <div class="row">
        <div class="col span-1-of-3">
          <!-- Card -->
          <div class="card">
            <h2>Sub<span>title</span></h2>
            <h1>cryptolove</h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              BTC transaction fees bottomed out earlier this year in February, and since then have remained relatively stable at a median of approximately USD0.10. This is a significant climb down from last year’s all-time high of $34.00 on 23 December.
              <br />
              
            </p>
          </div>
          <!-- Card -->
        </div>
      </div>
    </section>

    <Footer/>
  </div>
  
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

export default {
  components: {
    Header,
    Footer
  },

}
</script>

<style>

</style>
