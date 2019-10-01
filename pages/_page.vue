<template>
  <div>
    <Header />

    <section class="page">
      <div class="row" v-if="article">
        <div class="col span-3-of-3">
          <div class="article">
            <h1>
              {{article.fields.title}}
              <span>{{article.fields.titleEnd}}</span>
            </h1>
            <div v-html="compiledMarkdown"></div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import marked from "marked";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
});

export default {
  components: {
    Header,
    Footer,
    marked
  },
  head() {
    return {
      meta: [
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { hid: "twitter:site", name: "twitter:site", content: "@thefungible" },
        {
          hid: "twitter:author",
          name: "twitter:author",
          content: "@thefungible"
        },
        { hid: "twitter:title", name: "twitter:title", content: this.title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.fields.abstract
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "http:" + this.article.fields.preview.fields.file.url
        }
      ]
    };
  },
  data() {
    return {
      article: null
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.article.fields.text, { sanitize: true });
    }
  },
  asyncData(context) {
    let query = context.params.page.replace(/-/g, " ");
    return client
      .getEntries({
        content_type: "article",
        "fields.title[match]": query
      })
      .then(res => {
        let title =
          res.items[0].fields.title + " " + res.items[0].fields.titleEnd;
        return {
          article: res.items[0],
          title: title
        };
      })
      .catch(console.error);
  }
};
</script>

<style>
.article {
  background-color: #fff;
  width: 80%;
  padding: 30px;
  font-family: Verdana;
  line-height: 1.5rem;
}
.page {
  padding: 0px;
}

@media only screen and (max-width: 480px) {
  .article {
    width: 100%;
  }
}

img {
  width: 100%;
}

p {
  margin: 1rem 0;
}

.article h1 {
  font-size: 2.5rem;
  line-height: 3rem;
}

h3 {
  margin-top: 1rem;
}

a {
  color: #43438d;
}
a:hover{
  color: #7777dd;
}
a:visited{
  color: #70019c;
}
ul {
  margin-left: 1em;
}
ol {
  margin-left: 1.3em;
}

table {
    border: solid 1px #DDEEEE;
    border-collapse: collapse;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
}
thead th {
    background-color: #DDEFEF;
    border: solid 1px #DDEEEE;
    color: #336B6B;
    padding: 10px;
    text-align: left;
    text-shadow: 1px 1px 1px #fff;
}
tbody td {
    border: solid 1px #DDEEEE;
    color: #333;
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
}
</style>

<style scoped>

</style>
