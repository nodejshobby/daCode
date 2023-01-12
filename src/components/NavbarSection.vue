<template>
  <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid header-padding">
    <a class="navbar-brand" href="/"><img src="../assets/logo.png" height="23" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Case</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DaCode Specialists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>

      <a class="cta ms-lg-4" href="#">Request a quote</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
 .nav-link {
    color: #60E1CB !important;
  }

 .nav-link:hover {
    color: #000 !important;
  }

  .nav-link.active {
    color: #000 !important;
  }

 .cta {
    background: #7BC0E3;
    border-radius: 1000px;
    padding: .8rem 1.6rem;
    color: #fff !important;
    border : none;
    text-decoration: none;
  }

  .cta:hover {
    color: #fff;
  }

</style>