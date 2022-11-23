<script>
import { store } from '../../store.js'
export default {
      name: 'TicketsSection',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <section class="tickets">
            <div class="title">
                  <h3>Tickets</h3>
            </div>
            <div class="container">
                  <div class="row row-cols-3">
                        <div class="col" v-for="ticket in store.tickets">
                              <div class="my_card">
                                    <div class="card_head">
                                          <small class="featured"
                                                v-if="ticket.name === 'four day passes'">featured</small>
                                          <h4>{{ ticket.name }}</h4>
                                          <h6>{{ ticket.type }}</h6>
                                    </div>
                                    <div class="card_body">
                                          <ul>
                                                <li v-for="offer in ticket.description">{{
                                                            offer
                                                }}
                                                </li>

                                          </ul>
                                    </div>
                                    <div class="card_footer">
                                          <h6><a href="">{{ ticket.link }}</a> </h6>
                                    </div>
                              </div>
                        </div>


                  </div>

            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.tickets {
      background-image: url('/images/ticket-bg.jpg');
      height: 500px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
            text-align: center;
            color: $primaryLight;
            padding: 2rem 0;

            h3 {
                  text-transform: uppercase;
                  font-weight: 800;
            }


      }



      .my_card {
            text-align: center;

            .card_head {
                  text-transform: uppercase;
                  background-color: $secondaryLightning;
                  padding: 0.8rem 0;
                  position: relative;

                  .featured {
                        background-color: $primaryDanger;
                        color: $primaryLight;
                        text-transform: uppercase;
                        padding: 0.5rem;
                        position: absolute;
                        transform: rotate(45deg);
                        right: -70px;
                        top: 15px;
                        width: 200px;
                        clip-path: polygon(19.43% 108.5%, 72.68% 193px, 78.34% 97.12%, 69.5% 39.1%, 123px -10.68%, 37.96% -6.11%, 35.66% 5.89%, 31.27% 33.37%, 24.4% 78.47%);
                        font-size: 10px;
                  }

                  h4 {
                        font-weight: 800;

                  }

                  h6 {
                        font-weight: 800;
                        color: $primaryDanger;
                  }
            }

            .card_body {
                  background-color: $primaryLight;
                  padding: 0.8rem 0;

                  li {
                        font-style: italic;
                        text-transform: capitalize;
                        color: $primaryLighter;
                        padding: 0.5rem 0;
                  }
            }

            .card_footer {
                  background-color: $primaryDanger;

                  h6 {
                        padding: 0.8rem 0;
                        font-weight: 800;
                        text-transform: uppercase;

                        a {

                              color: $primaryLight;
                        }
                  }
            }
      }
}
</style>