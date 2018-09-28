<template>
  <div>
    <Header/>
  
    <section>

      <div class="row" v-if="posts">
        <div class="col span-1-of-3">
          <!-- Card -->
          <div class="card" v-for="post in posts" v-bind:key="post.id">
            <h1>{{post.fields.title}}
              <span>{{post.fields.titleEnd}}</span>
            </h1>
            <img src="img/cryptolove-img.jpg" alt="crypto love image" class="crypto-image">
            <p class="card-text">
              {{post.fields.abstract}}
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

let client;

if (process.env.CTF_SPACE_ID){
  client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  })
}


export default {
  components: {
    Header,
    Footer
  },
  data(){
    return {
      posts: null
    }
  },
  asyncData(){
    return client.getEntries(
        {
          'content_type': 'article'
        }
    )
    .then((res) => {
      return {
      posts: res.items
      }
    }).catch(console.error)
  }

}
</script>

<style>

</style>
