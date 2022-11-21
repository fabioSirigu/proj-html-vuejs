<script>
export default {
      name: 'SpeakersSection',
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

                        <div class="col">
                              <div class="my-card">
                                    <div class="image-card">
                                          <img src="/images/speaker-1.jpg" alt="">
                                    </div>
                                    <div class="card-body">
                                          <h4>name</h4>
                                          <p>profession</p>
                                    </div>
                              </div>
                        </div>
                        <div class="col">
                              <div class="my-card">
                                    <div class="image-card">
                                          <img src="/images/speaker-2.jpg" alt="">
                                    </div>
                                    <div class="card-body">
                                          <h4>name</h4>
                                          <p>profession</p>
                                    </div>
                              </div>
                        </div>
                        <div class="col">
                              <div class="my-card">
                                    <div class="image-card">
                                          <img src="/images/speaker-3.jpg" alt="">
                                    </div>
                                    <div class="card-body">
                                          <h4>name</h4>
                                          <p>profession</p>
                                    </div>
                              </div>
                        </div>
                        <div class="col">
                              <div class="my-card">
                                    <div class="image-card">
                                          <img src="/images/speaker-4.jpg" alt="">
                                    </div>
                                    <div class="card-body">
                                          <h4>name</h4>
                                          <p>profession</p>
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

            .col {

                  .my-card {

                        img {
                              width: 100%;
                        }
                  }
            }
      }
}
</style>