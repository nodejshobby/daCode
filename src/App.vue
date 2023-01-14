<template>
  <div>
    <NavbarSection />
    <BannerSection />
    <ServiceSection />
  </div> 
</template>

<script>
import NavbarSection from './components/NavbarSection'
import BannerSection from './components/BannerSection'
import ServiceSection from './components/ServiceSection'


export default {
  name: 'App',
  components: {
    NavbarSection,
    BannerSection,
    ServiceSection
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
      padding-left: 7rem !important;
      padding-right: 7rem !important;
    }
  }
</style>
