<template>
  <nav class="navbar navbar-expand-lg bg-white shadow fixed-top py-3" id="scrollNavbar">
  <div class="container-fluid header-padding">
    <a class="navbar-brand" href="/"><img src="../assets/logo.png" height="22" width="180" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#banner">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#service">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#specialist">DaCode Specialists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#blog">Blog</a>
        </li>
      </ul>
      <div class="mb-4 mb-lg-0">
          <a class="cta ms-lg-4" href="#">Request a quote</a>
      </div>
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

  .navbar-toggler {
    border: none !important;
  }

  .navbar-toggler:focus {
    border: none !important;
    outline: 0 !important;
    box-shadow: none !important;
  }

</style>