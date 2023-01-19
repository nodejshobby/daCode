<template>
    <section class="contaner-fluid section-padding" id="portfolio">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 mx-auto mb-2 text-center">
                <h6>Portfolio</h6>
                <h2>Our Great Work</h2>
                <ul class="nav nav-pills mb-3 justify-content-center align-items-center mt-5 mt-md-" id="pills-tab" role="tablist">
                        <li class="nav-item mx-3" role="presentation">
                          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Website Optimization</button>
                        </li>
                        <li class="nav-item mx-3" role="presentation">
                          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Redesign</button>
                        </li>
                        <li class="nav-item mx-3 mt-3 mt-sm-0" role="presentation">
                          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Search Engine Optimization</button>
                        </li>
                    </ul>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12 mx-auto">
                    <div class="tab-content mt-5" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="row justify-content-center align-items-center">
                            <div class="owl-carousel">
                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>
                            </div>
                        </div>
                        </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"> <div class="row justify-content-center align-items-center">
                            <div class="owl-carousel">
                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>
                            </div>
                        </div></div>
                      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"> <div class="row justify-content-center align-items-center">
                            <div class="owl-carousel">
                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-under"></div>
        <img src="../assets/PortfolioCircle.svg" alt="Portfolio circle" id="portfolio-circle">
        <a href="#" id="portfolio-button">See All</a>

    </section>
</template>

<script>

export default {
    
}
</script>

<style>
    #portfolio h6 {
        color: #7BC0E3 !important;
        font-size: 1rem;
        width: 100%;
    }

    #portfolio .nav-item button {
        background-color: #fff;
        color: #7BC0E3 !important;
    } 

    #portfolio .nav-link.active {
        border: 2px solid #7BC0E3;
        border-radius: 1000px;
    }

    #portfolio {
        position: relative;
    }

    .bg-under {
        background-color: #60E1CB !important;
        width: 100%;
        height: 40%;
        position: absolute;
        top: 60%;
        right: 0;
    }

    #portfolio-circle {
        width: 25%;
        height: 25%;
        position: absolute;
        top: 30%;
        right: 77%;
    }

    #portfolio-button {
        position: absolute;
        width: 10rem;
        padding: 1rem 1.2rem;
        display: inline-block;
        text-align: center;
        left: 50%;
        right: 50%;
        bottom: -3%;
        text-decoration: none;
        color: #fff;
        background: #292525;
        box-shadow: 0px 46px 52px rgba(96, 225, 203, 0.56);
        border-radius: 1000px;
        transform: translateX(-50%);
        border-radius: 1000px;
    }
</style>