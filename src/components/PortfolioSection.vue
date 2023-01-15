<template>
    <section class="section-padding" id="portfolio">
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
                        <div class="row justify-content-center align-items-center g-5">
                                <div class="col-11 col-md-6 col-lg-4">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col-11 col-md-6 col-lg-4">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>

                                <div class="col-11 col-md-6 col-lg-4">
                                        <img class="img-fluid rounded" src="../assets/Portfolio.png" alt="Portfolio Image">
                                        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugiat incidunt accusantium animi beatae consectetur</p>
                                </div>
                               
                            </div>
                        </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit deleniti officiis, temporibus quas suscipit aut perspiciatis non hic natus autem nobis dolorem blanditiis inventore optio at dolorum ab sapiente.</div>
                      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, magnam perspiciatis nisi quo enim possimus, eaque consequatur et non aut aliquam. Inventore deserunt iusto cumque repellat beatae autem nobis eveniet.</div>
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
    #portfolio h6 {
        color: #7BC0E3 !important;
        font-size: 1rem;
    }

    #portfolio .nav-item button {
        background-color: #fff;
        color: #7BC0E3 !important;
    } 

    #portfolio .nav-link.active {
        border: 2px solid #7BC0E3;
        border-radius: 1000px;
    }

</style>