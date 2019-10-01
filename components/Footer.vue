<template>
<footer>
  <div class="container">
    <div class="logo-footer">
      <a href="/"><img src="img/grey-duck.svg" alt="logo">The<span>fungible</span></a>
    </div>
    <div class="copyright">
      Copyright © 2018 TheFungible.org
    </div>
    <div class="social">
      <a href="https://twitter.com/thefungible"><img src="img/twitter-icon.png" alt="img"/></a>
      <!-- <a href="https://www.instagram.com/thefungible"><img src="img/instagram-icon.png" alt="img"/></a>
      <a href="https://www.facebook.com/thefungible"><img src="img/facebook-icon.png" alt="img"/></a> -->
    </div>
  </div>
</footer>
</template>

<style>
.logo-footer {
  text-transform: uppercase;
}

.logo-footer a {
  font-size: 31px;
  font-family: bergenmono-regular;
  font-weight: bold;
  color: #CFD6D3 !important;
  line-height: 31px;
  display: flex;
  text-decoration: none;
}

.logo-footer img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

footer {
  font-family: bergenmono-regular;
  height: 120px;
  background-color: #fff;
  width: 100%;
  padding-top: 44px;
}

footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}



.copyright {
  color: #818991;
  font-size: 12px;
}

footer .social {
  display: flex;
  align-items: center;
}

footer .social a:not(:last-child) {
  margin-right: 10px;
}

footer .social a {
  width: 26.639px;
  height: 26.639px;
}

footer .social a:hover {
  opacity: .9;
}
</style>
