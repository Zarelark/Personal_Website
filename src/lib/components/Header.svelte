<header>
  <div class=stripe1/>
   <div class=stripe2>
    <a href="/">Home</a>
  
    <nav>
      <ul>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/resume">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class=stripe3/>
  <div class=stripe4/>
  <div class=stripe5/>
  <div class=stripe6/>
</header>

<style lang="scss">
  @use "./src/lib/styles/vars.scss";
  
  $stripe-height: 10px;
  
  header {
    
  }

  .stripe1 {
    height: $stripe-height;
    background-color: vars.$color1;
  }

  .stripe2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: vars.$color2;
    height: 23px;
  }

  .stripe3 {
    height: $stripe-height;
    background-color: vars.$color3;
  }

  .stripe4 {
    height: $stripe-height;
    background-color: vars.$color4;
  }

  .stripe5 {
    height: $stripe-height;
    background-color: vars.$color5;
  }

  .stripe6 {
    height: $stripe-height;
    background-color: vars.$color6;
  }


  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>