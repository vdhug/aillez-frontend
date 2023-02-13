<template>
  <div>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Carregando...</span>
        </div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar Start -->
   <div class="container-fluid bg-dark p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>{{ response.data.attributes.endereco }} </small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>{{ response.data.attributes.horario }}</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>{{ response.data.attributes.telefone }}</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-square btn-link rounded-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <a href="/" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
          <h2 class="m-0 text-primary">Aillez</h2>
      </a>
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
              <a id="home-link" href="/" class="nav-item nav-link active">Home</a>
              <a id="sobre-link" href="/sobre" class="nav-item nav-link">Sobre</a>
              <a id="servicos-link" href="/servicos" class="nav-item nav-link">Serviços</a>
              <a id="projetos-link" href="/projetos" class="nav-item nav-link">Projetos</a>
              <!-- <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div class="dropdown-menu bg-light m-0">
                      <a href="feature.html" class="dropdown-item">Feature</a>
                      <a href="quote.html" class="dropdown-item">Free Quote</a>
                      <a href="team.html" class="dropdown-item">Our Team</a>
                      <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                      <a href="404.html" class="dropdown-item">404 Page</a>
                  </div>
              </div> -->
              <a id="contato-link" href="/contato" class="nav-item nav-link">Contato</a>
          </div>
          <a href="" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Peça Um Orçamento<i class="fa fa-arrow-right ms-3"></i></a>
      </div>
    </nav>
    <!-- Navbar End -->

    <slot></slot>

    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Endereço</h5>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>{{ response.data.attributes.endereco }}</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>{{ response.data.attributes.telefone }}</p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>{{ response.data.attributes.email }}</p>
                <div class="d-flex pt-2">
                    <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Links Rápidos</h5>
                <a class="btn btn-link" href="/sobre">Sobre Nós</a>
                <a class="btn btn-link" href="/contato">Nos Contate</a>
                <a class="btn btn-link" href="/servicos">Nossos Serviços</a>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Galeria de Projetos</h5>
                <div class="row g-2">
                    <div class="col-4">
                        <img class="img-fluid rounded" src="/static/img/gallery-1.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="/static/img/gallery-2.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="/static/img/gallery-3.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="/static/img/gallery-4.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="/static/img/gallery-5.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded" src="/static/img/gallery-6.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Newsletter</h5>
                <p>Fique por dentro do que ocorre na Aillez Engenharia.</p>
                <div class="position-relative mx-auto" style="max-width: 400px;">
                    <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Seu Email">
                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Registrar</button>
                </div>
            </div>
        </div>
        </div>
        <div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="https://github.com/vdhug">Vitor Hugo</a>, Todos os direitos reservados.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                    Design Feito Por <a href="https://htmlcodex.com">Codex</a>
                </div>
            </div>
        </div>
        </div>
    </div>
    
    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>
</template>

<script setup>
const { data: response } = await useFetch("https://strapi-production-b8ce.up.railway.app/api/configuracao")
</script>