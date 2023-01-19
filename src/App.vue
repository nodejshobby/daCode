<template>
  <div >
    <NavbarSection />
    <BannerSection />
    <ServiceSection />
    <PortfolioSection />
  </div> 
</template>

<script>
import NavbarSection from './components/NavbarSection'
import BannerSection from './components/BannerSection'
import ServiceSection from './components/ServiceSection'
import PortfolioSection from './components/PortfolioSection'

export default {
  name: 'App',
  components: {
    NavbarSection,
    BannerSection,
    ServiceSection,
    PortfolioSection
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body{
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    position: relative;
    margin-top: 7rem !important;
    overflow-x: hidden;
  }

  h1 {
    line-height: 1.5 !important;
  }


  @media (min-width: 992px) {
    .header-padding {
      padding-left: 6rem !important;
      padding-right: 6rem !important;
    }
  }
</style>
