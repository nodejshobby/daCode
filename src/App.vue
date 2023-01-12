<template>
  <div>
    <NavbarSection />
    <BannerSection />
  </div> 
</template>

<script>
import NavbarSection from './components/NavbarSection'
import BannerSection from './components/BannerSection'

export default {
  name: 'App',
  components: {
    NavbarSection,
    BannerSection
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body{
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
  }

  h1 {
    line-height: 1.5 !important;
  }


  @media (min-width: 992px) {
    .header-padding {
      padding-left: 10rem !important;
      padding-right: 10rem !important;
    }
  }
</style>
