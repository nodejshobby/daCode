<template>
        <div class="container-fluid banner my-5 my-lg-4 px-lg-0" id="banner">
            <img src="../assets/CircleLeft.svg" id="first-circle" alt="Banner left svg">
            <img src="../assets/CircleRight.svg" id="second-circle" alt="Banner right svg">
            <div class="row justify-content-center align-items-center header-padding">
                    <div class="col-11 col-lg-6">
                        <div class="banner-left">
                            <h1 class="fw-bold">We help you create <br class="d-none d-lg-block"> your <span class="highlight">Website</span></h1>
                            <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
                            <div class="pt-4">
                                <a href="#" class="cta-secondary">Get Started</a>
                                <a href="#" class="cta-outline-secondary ms-4">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-lg-6">
                        <div class="banner-right">
                            <img src="../assets/Analyse.png"  class="img-fluid" alt="Banner rigth images">
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .banner {
        position: relative;
    }

    .banner-left {
        position: relative;
    }

    .banner-left::before {
        content: '';
        position: relative;
        left: 0;
        top: 0; 
        display: block;
        height: 5px;
        width: 4rem;
        margin-bottom: .8rem !important;
        background: #7BC0E3;
        border-radius: 1000px;
    }

    .highlight {
        color: #60E1CB;
    }

    .cta-secondary {
        background: #60E1CB;
        border-radius: 1000px;
        padding: .8rem 1.6rem;
        color: #fff !important;
        border : none;
        text-decoration: none;
        box-shadow: 0px 46px 52px rgba(96, 225, 203, 0.56);
        display: inline-block;
        transition: 300ms;
    }

    .cta-secondary:hover {
        color: #fff;
        transform: translateY(-8px);
    }

    .cta-outline-secondary {
        color: #60E1CB;
        padding: .8rem 1.6rem;
        border-radius: 1000px;
        text-decoration: none;
        border: 1px solid rgba(7, 0, 59, 0.17);
        filter: drop-shadow(0px 14px 39px rgba(15, 35, 37, 0.3));
        display: inline-block;
        transition: 300ms;
    }

    .cta-outline-secondary:hover {
        color: #60E1CB;
        transform: translateY(-8px);
    }

    #first-circle {
        position: absolute;
        width: 400px;
        height: 400px;
        left: -8%;
        top: 52%;
        opacity: 0.2;
        z-index: -11;
    }

    #second-circle {
        position: absolute;
        width: 293.8px;
        height: 163.8px;
        right:  5%;
        top:  20%;
        opacity: 0.7;
        z-index: -99;
    }

    @media (max-width: 991.98px) { 
       .banner-right {
            display: none;
        }

        #second-circle {
            display: none;
        }

        .banner-left::before {
            display: none;
        }
     }

</style>