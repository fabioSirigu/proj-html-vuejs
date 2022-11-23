<script>
import { store } from '../store.js';
export default {
      name: 'AppFooter',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <footer>
            <div class="container">
                  <div class="row row-cols-4">
                        <div class="col">
                              <div class="title">
                                    <h4>About us</h4>
                              </div>
                              <div class="aboutUs">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore odio
                                          explicabo cupiditate exercitationem laboriosam officia placeat, recusandae aut
                                          incidunt. Incidunt voluptas quaerat dolore voluptates ullam praesentium est
                                          voluptatem minima eligendi?</p>
                              </div>
                              <div class="brands">
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" />
                                    <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
                                    <font-awesome-icon icon="fa-brands fa-pinterest-p" class="icon" />
                                    <font-awesome-icon icon="fa-brands fa-google-plus-g" class="icon" />
                                    <font-awesome-icon icon="fa-brands fa-flickr" class="icon" />
                              </div>
                        </div>
                        <div class="col">
                              <div class="title">
                                    <h4>Recent news</h4>
                              </div>
                              <div class="recentNews">
                                    <ul>
                                          <li>
                                                <font-awesome-icon icon="fa-solid fa-angle-right" class="arrow" />Lorem
                                                ipsum dolor sit amet.
                                          </li>
                                    </ul>
                              </div>

                        </div>
                        <div class="col">
                              <div class="title">
                                    <h4>Get your seat!</h4>
                              </div>
                              <div class="aboutUs">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                              </div>
                              <div class="brands">
                                    <button class="my_btn">Check out ticket!</button>
                              </div>
                        </div>
                        <div class="col">
                              <div class="title">
                                    <h4>Gallery from last year</h4>
                              </div>
                              <div class="gallery">
                                    <div class="container">
                                          <div class="row row-cols-4">
                                                <div class="col" v-for="image in store.gallery">
                                                      <img :src="image.thumb" alt="">
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
            <div class="footer_bottom">
                  <div class="container">
                        <div>
                              <p class="copyright">
                                    <font-awesome-icon icon="fa-solid fa-copyright" />
                                    Copyright GoodLayers,All Right reserved
                              </p>
                        </div>
                        <div>
                              <ul class="links">
                                    <li><a href="">About Us</a> |</li>
                                    <li><a href="">Accomodation</a> |</li>
                                    <li><a href="">Call for paper</a> |</li>
                                    <li><a href="">Contact us</a></li>
                              </ul>
                        </div>
                  </div>
            </div>
      </footer>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables.scss' as *;

footer {
      background-color: $primaryDark;

      .row {
            padding: 2rem 0;

            .title {
                  h4 {
                        font-weight: 800;
                        color: $primaryLight;
                        text-transform: uppercase;
                        font-size: 18px;
                  }
            }

            .aboutUs {
                  color: $primaryLight;
                  margin: 1.5rem 0;
                  font-size: 14px;
            }

            .brands {
                  display: flex;
                  gap: 0.5rem;

                  .icon {
                        padding: 0.5rem;
                        background-color: white;
                        aspect-ratio: 1/1;
                        border-radius: 0.5rem;
                  }
            }

            .recentNews {
                  ul {
                        padding-left: 0;
                        margin: 1.5rem 0;

                        li {
                              .arrow {
                                    padding: 0 0.5rem;
                              }

                              font-size: 14px;
                              color: $secondaryLightning;
                              text-transform: uppercase;
                        }
                  }
            }

            .my_btn {
                  padding: 0.75rem 1.25rem;
                  background-color: $primaryDanger;
                  color: $primaryLight;
                  margin: 2rem 0;
                  text-transform: uppercase;
                  font-size: 14px;
                  font-weight: 600;
                  border: none;
                  border-radius: 5px;

                  &:hover {
                        background-color: darkred;
                  }
            }

            .gallery {
                  .row {
                        .col {
                              padding: 0.5rem;

                              img {
                                    width: 100%;
                                    object-fit: cover;
                              }
                        }

                  }
            }
      }


      .footer_bottom {
            width: 100%;
            height: 80px;
            background-color: $designDark;

            .container {
                  height: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  color: $secondaryLightning;

                  .copyright {
                        margin: 0;
                        text-transform: capitalize;

                  }

                  .links {
                        display: flex;

                        a {
                              color: $secondaryLightning;
                              padding: 0 1rem;
                              text-transform: capitalize;
                        }
                  }
            }


      }


}
</style>