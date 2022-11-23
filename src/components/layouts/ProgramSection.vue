<script>
export default {
      name: 'ProgramSection',
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
                        <div class="col">data</div>
                        <div class="col">data</div>
                        <div class="col">data</div>
                        <div class="col">data</div>
                        <div class="col">data</div>
                        <div class="col">data</div>
                  </div>
                  <div class="row data_info">
                        <div class="col-2 details_event">
                              <div>
                                    <font-awesome-icon icon="fa-regular fa-clock" />
                                    <h5>9:00</h5>
                              </div>
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-location-arrow" />
                                    <h5>Roma</h5>
                              </div>
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-user" />
                                    <h5></h5>
                              </div>
                        </div>
                        <div class="col-10 card_event">
                              <h4>Welcoming and introduction</h4>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, ipsum! Quibusdam
                                    tempore qui repellat, dolorem ipsam sed, mollitia perferendis sint recusandae fugiat
                                    cumque voluptate, enim soluta quis possimus incidunt porro.</p>
                              <img src="/images/speaker-8-150x150.jpg" alt="">
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
                  border: 1px solid red;
                  text-align: center;
                  padding: 1rem 0;
                  background-color: $primaryDanger;
            }

            .data_info {
                  padding: 2rem;
                  background-color: $primaryLightning;

                  .details_event {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 0.5rem;
                        height: 100px;

                        div {
                              display: flex;
                              align-items: center;

                              h5 {
                                    padding: 0 0.8rem;
                                    margin-bottom: 0;
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
                              width: 50px;
                        }
                  }

            }
      }
}
</style>