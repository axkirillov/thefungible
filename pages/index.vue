<template>
  <div>
    <Header/>
  
    <section>

      <div class="row" v-if="posts">
        <div class="col span-1-of-3">
          <!-- Card -->
          <div class="card" v-for="post in posts" v-bind:key="post.id">
            <nuxt-link :to="{path: '/'+post.url}">
              <h1>{{post.fields.title}}
                <span>{{post.fields.titleEnd}}</span>
              </h1>
              <img src="img/bear1.png" alt="crypto love image" class="crypto-image">
              <p class="card-text">
                {{post.fields.abstract}}
                <br />
              </p>
            </nuxt-link>
            
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

import {createClient} from '~/plugins/contentful.js'




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
    const client = createClient()
    return client.getEntries(
        {
          'content_type': 'article'
        }
    )
    .then((res) => {
      res.items.forEach(post =>{
        post.url = post.fields.title.replace(/\s/g, '-')
      })
      return {
      posts: res.items
      }
    }).catch(console.error)
  }

}
</script>

<style>
 a {
  text-decoration: none;
  color: white;
}
</style>
