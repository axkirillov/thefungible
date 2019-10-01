<template>
  <div>
    <section>
      <div class="row" v-if="posts">
        <div class="col span-1-of-3" v-for="post in posts" v-bind:key="post.id">
          <!-- Card -->
          <div class="card">
            <nuxt-link :to="{path: '/'+post.url}">
              <h1>
                {{post.fields.title}}
                <span>{{post.fields.titleEnd}}</span>
              </h1>
              <img
                v-bind:src="post.fields.thumbnail.fields.file.url"
                alt="crypto love image"
                class="crypto-image"
              />
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
  </div>
</template>

<script>
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
});

export default {
  components: {},
  data() {
    return {
      posts: null
    };
  },
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: "article"
      })
      .then(res => {
        res.items.forEach(post => {
          post.url = post.fields.title.replace(/\s/g, "-");
        });
        return {
          posts: res.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style>
a {
  text-decoration: none;
  /* color: white; */
}
.card-text{
  height: 4rem;
}
</style>
