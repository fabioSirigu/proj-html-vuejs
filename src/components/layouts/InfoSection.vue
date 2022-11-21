<script>
export default {
      name: 'InfoSection',
}
</script>

<template>
      <section>
            <div class="container">
                  <div class="row">
                        <div class="col-4">
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-trophy" />
                              </div>
                              <div class="card text-left">
                                    <div class="card-body">
                                          <h4 class="card-title">who we are</h4>
                                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Dolores est debitis, animi accusamus velit provident dicta
                                                corrupti error tempore? </p>
                                          <a href="#">learn more</a>
                                    </div>
                              </div>
                        </div>
                        <div class="col-4">
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-bolt" />
                              </div>
                              <div class="card text-left">
                                    <div class="card-body">
                                          <h4 class="card-title">who we are</h4>
                                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Dolores est debitis, animi accusamus velit provident dicta
                                                corrupti error tempore? </p>
                                          <a href="#">learn more</a>
                                    </div>
                              </div>
                        </div>
                        <div class="col-4">
                              <div>
                                    <font-awesome-icon icon="fa-solid fa-question" />
                              </div>
                              <div class="card text-left">
                                    <div class="card-body">
                                          <h4 class="card-title">who we are</h4>
                                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Dolores est debitis, animi accusamus velit provident dicta
                                                corrupti error tempore? </p>
                                          <a href="#">learn more</a>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      </section>

</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

section {
      padding: 2.5rem 0;

      .col-4 {
            display: flex;

            .card {
                  border: none;

                  .card-body {
                        padding: 0 1rem;
                  }
            }
      }
}
</style>