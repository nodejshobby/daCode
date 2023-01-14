<template>
  <section class="section-padding" id="service">
    <div class="section-header mb-4">
        <div class="row justify-content-center align-items-center g-3">
            <div class="col-md-6 text-center mx-auto">
                <h2 class="mb-3">Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et.</p>
            </div>
        </div>
      
    </div>
    <div class="container">
        <img src="../assets/ServiceCircle.svg" id="service-circle" alt="">

        <div class="row justify-content-center align-items-center g-4 g-lg-5" id="service-container">
            <div class="col-11 col-md-6 col-lg-4">
                <div class="service-box bg-white shadow px-5 px-lg-4 py-5 rounded">
                    <div class="service-icon mb-4">
                        <div class="circle"></div>
                        <div><span><i class="fa fa-window-maximize"></i></span></div>
                    </div>
                    <h4 class="mb-3">Wordpress Site</h4>
                    <p>Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut </p>
                </div>
            </div>
            <div class="col-11 col-md-6 col-lg-4">
                <div class="service-box bg-white shadow px-5 px-lg-4 py-5 rounded">
                    <div class="service-icon mb-4">
                        <div class="circle"></div>
                        <div><span><i class="fa fa-plug"></i></span></div>
                    </div>
                    <h4 class="mb-3">Wordpress Plugin</h4>
                    <p>Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut </p>
                </div>
            </div>
            <div class="col-11 col-md-6 col-lg-4">
                <div class="service-box bg-white shadow px-5 px-lg-4 py-5 rounded">
                    <div class="service-icon mb-4">
                        <div class="circle"></div>
                        <div><span><i class="fa fa-desktop"></i></span></div>
                    </div>
                    <h4 class="mb-3">Website Redesign</h4>
                    <p>Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut </p>
                </div>
            </div>
            <div class="col-11 col-md-6 col-lg-4">
                <div class="service-box bg-white shadow px-5 px-lg-4 py-5 rounded">
                    <div class="service-icon mb-4">
                        <div class="circle"></div>
                        <div><span><i class="fa fa-cog"></i></span></div>
                    </div>
                    <h4 class="mb-3">Wordpress Site Optimization</h4>
                    <p>Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut </p>
                </div>
            </div>
            <div class="col-11 col-md-6 col-lg-4">
                <div class="service-box bg-white shadow px-5 px-lg-4 py-5 rounded">
                    <div class="service-icon mb-4">
                        <div class="circle"></div>
                        <div><span><i class="fa fa-rocket"></i></span></div>
                    </div>
                    <h4 class="mb-3">Search Engine Optimization</h4>
                    <p>Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut </p>
                </div>
            </div>
            <div class="col-11 col-md-6 col-lg-4">
                <div class="service-box bg-white shadow px-5 px-lg-4 py-5 rounded">
                    <div class="service-icon mb-4">
                        <div class="circle"></div>
                        <div><span><i class="fas fa-layer-group"></i></span></div>
                    </div>
                    <h4 class="mb-3">Cross Platform Mobile App</h4>
                    <p>Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut </p>
                </div>
            </div>
        </div>
    </div>
    
  </section>
</template>

<script>
export default {

}
</script>

<style>
    #service {
        background-color: #E9FBF8;
        position: relative;
    }

    .section-padding {
        padding-top: 4.5rem;
        padding-bottom: 4.5rem;
    }

    .service-box {
        border-top: 5px solid #60E1CB;
        z-index: 10;
    }

    .service-icon {
        position: relative;
    }

    .service-icon .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        top: -20%;
        left: -5%;
        background: #60E1CB;
        opacity: 0.2;
    }

    .service-icon i {
        color: #60E1CB;
        font-size: 3rem;
        z-index: 8;
    }

    #service-circle {
        position: absolute;
        width: 350px;
        height: 350px;
        left: 75%;
        top: 65%;
        opacity: 0.3;
        z-index: 4;
    }

    #service-container {
        position: relative;
        z-index: 20;
    }


    @media (max-width: 991.98px){
        #service-circle {
            display: none;
        }
    }
</style>