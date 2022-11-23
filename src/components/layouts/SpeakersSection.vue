<script>
import { store } from '../../store.js'
export default {
      name: 'SpeakersSection',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <section class="speakers_section">
            <div class="container">
                  <div class="title_speakers">
                        <h3>speakers</h3>
                        <div class="slide_button">
                              <button>
                                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                              </button>
                              <button>
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                              </button>
                        </div>
                  </div>
                  <div class="speakers_slider">

                        <div class="row row-cols-4">
                              <div class="col" v-for="speaker in store.speakers">
                                    <div class="my-card">
                                          <div class="image-card">
                                                <img :src="speaker.img" alt="">
                                                <div class="over_social">
                                                      <a href="">
                                                            <font-awesome-icon icon="fa-brands fa-facebook-f"
                                                                  class="icon" />
                                                      </a>
                                                      <a href="">
                                                            <font-awesome-icon icon="fa-brands fa-twitter"
                                                                  class="icon" />
                                                      </a>
                                                      <a href="">
                                                            <font-awesome-icon icon="fa-brands fa-linkedin-in"
                                                                  class="icon" />
                                                      </a>
                                                </div>
                                          </div>
                                          <div class="card-body">
                                                <h4>{{ speaker.name }}</h4>
                                                <p>{{ speaker.job }}</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.speakers_section {
      padding: 2rem 0;
      background-color: $primaryLightning;

      .title_speakers {
            display: flex;
            margin-bottom: 2rem;

            justify-content: space-between;
            align-items: center;

            h3 {
                  text-transform: uppercase;
                  font-weight: 800;

            }

            .slide_button {
                  button {
                        width: 50px;
                        height: 50px;
                        background-color: $primaryDanger;
                        color: $primaryLight;
                        border: none;
                        border-radius: 3px;
                        margin: 0 0.5rem;
                  }
            }
      }

      .speakers_slider {
            display: flex;
            justify-content: space-between;
            gap: 2rem;

            .row {

                  flex-wrap: nowrap;
                  overflow-x: auto;

                  .col {

                        .my-card {

                              .image-card {
                                    position: relative;

                                    img {
                                          border-radius: 1rem;
                                          width: 100%;
                                    }

                                    &:hover .over_social {
                                          display: flex;
                                    }

                                    .over_social {
                                          width: 100%;
                                          height: 100%;
                                          background-color: $designImportant;
                                          border-radius: 1rem;

                                          filter: opacity(0.5);
                                          display: none;
                                          justify-content: center;
                                          align-items: center;
                                          position: absolute;
                                          top: 0;



                                          a {
                                                text-align: center;
                                                color: $primaryLight;
                                                scale: 1.5;
                                                padding: 0 1rem;

                                                &:hover {
                                                      scale: 2;
                                                }


                                          }

                                    }
                              }
                        }
                  }
            }

      }
}
</style>