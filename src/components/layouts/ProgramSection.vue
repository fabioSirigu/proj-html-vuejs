<script>
import { store } from '../../store.js'
export default {
      name: 'ProgramSection',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <section class="program_section">
            <div class="container head_program">
                  <div class="row ">
                        <div class="title_program col-8">
                              <h3>program</h3>
                              <small class="muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ab?Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Libero quibusdam consequatur reprehenderit
                                    voluptatum.
                              </small>
                        </div>

                        <div class="full_program col-4">
                              <a href="">view full program</a>
                        </div>
                  </div>

            </div>
            <div class="container select_data">
                  <div class="row row-cols-6">
                        <div class="col" v-for="(date, i) in store.program" @click="store.changeProgram(i)">
                              <h4>{{ date.day }}</h4>
                              <p>{{ date.date }}</p>
                        </div>

                  </div>
                  <div class="row data_info">
                        <div class="col-2 details_event">
                              <div>
                                    <font-awesome-icon icon="fa-regular fa-clock" />
                                    <h5>{{ store.programActive.hour }}</h5>
                              </div>
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-location-arrow" />
                                    <h5>{{ store.programActive.location }}</h5>
                              </div>
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-user" />
                                    <h5 class="name_speakers">{{ store.programActive.speakers }}</h5>
                              </div>
                        </div>
                        <div class="col-10 card_event">
                              <h4>Welcoming and introduction</h4>
                              <p>{{ store.programActive.description }}</p>
                              <img :src="store.programActive.image" alt="">
                        </div>
                  </div>
            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.program_section {
      padding: 2rem 0;

      .head_program {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;

            .title_program {
                  display: flex;
                  padding: 0;

                  h3 {
                        text-transform: uppercase;
                        color: $designDark;
                        font-weight: 800;
                        padding-right: 2rem;
                  }
            }


            .full_program {
                  padding: 0;
                  text-align: end;

                  a {
                        color: $primaryDanger;
                        text-decoration: none;
                        font-style: italic;
                        text-transform: capitalize;
                  }
            }
      }

      .select_data {
            .col {
                  border: 2px solid darkred;
                  height: 80px;
                  padding: 0 1.25rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  background-color: $primaryDanger;
                  color: $primaryLight;

                  h4 {
                        text-transform: uppercase;
                        font-weight: 800;
                  }

                  p {
                        text-transform: capitalize;
                        font-size: 14px;
                  }

                  &:hover {
                        background-color: $designImportant;
                  }
            }

            .data_info {
                  padding: 2rem;
                  background-color: #f0f0f0;

                  .details_event {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 0.5rem;
                        height: 100px;


                        div {
                              display: flex;
                              align-items: center;
                              color: gray;
                              text-transform: capitalize;
                              font-style: italic;

                              h5 {
                                    padding: 0 0.8rem;
                                    margin-bottom: 0;
                              }

                              h5.name_speakers {
                                    color: red;
                              }
                        }
                  }

                  .card_event {
                        h4 {
                              text-transform: uppercase;
                        }

                        p {
                              padding: 2rem 0;
                        }

                        img {
                              width: 100px;
                        }
                  }

            }
      }
}
</style>