<script>
import { store } from '../../store.js'
export default {
      name: 'SponsorSection',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <section class="sponsors">
            <div class="container">
                  <div class="title">
                        <h3>Sponsors</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit iste ipsam reprehenderit
                        </h5>

                  </div>


                  <div class="row row-cols-6">
                        <div class="col" v-for="sponsor in store.sponsors">

                              <div class="image-card">
                                    <img :src="sponsor.image" alt="">
                              </div>

                        </div>
                  </div>

            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.sponsors {
      padding: 2rem 0;
      background-color: $primaryLightning;

      .container {
            display: flex;
            flex-direction: column;
            align-items: center;

            .title {
                  text-align: center;
                  width: 300px;
                  padding: 2rem 0;

                  h3 {
                        text-transform: uppercase;
                        font-weight: 800;

                  }

            }


            .row {
                  width: 100%;

                  .col {

                        .my-card {

                              img {
                                    width: 100%;
                                    object-fit: cover;
                              }
                        }
                  }


            }
      }

}
</style>