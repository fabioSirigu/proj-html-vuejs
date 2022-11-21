<script>
export default {
      name: 'AppMain'
}
</script>

<template>
      <main>
            <section>

                  <div class="container-fluid">
                        <div class="title_jumbo">
                              <h2>Conference on</h2>
                              <h1>social network</h1>
                        </div>
                        <div>
                              <img src="/images/1-item-2.jpg" alt="">
                        </div>
                        <div class="info_section">
                              <div class="info">
                                    <ul>
                                          <li>23 - 26 may 2019</li>
                                          <li>/</li>
                                          <li>Sans Francisco</li>
                                          <li>/</li>
                                          <li>8 speakers</li>
                                    </ul>
                              </div>
                        </div>
                        <div>
                              <button class="my_btn">Register Online</button>
                        </div>
                  </div>

            </section>
      </main>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

section {
      height: 600px;
      background-image: url('/images/slider-1-bg.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;



      .container-fluid {
            text-align: center;

            .title_jumbo {
                  text-transform: uppercase;
                  color: $primaryLight;

                  h1 {
                        font-weight: 700;
                        font-size: 72px;
                  }
            }

            .info_section {
                  display: flex;
                  justify-content: center;

                  .info {
                        ul {
                              display: flex;
                              flex-direction: row;
                              flex-wrap: nowrap;
                              padding-left: 0;

                              li {
                                    list-style: none;
                                    text-transform: uppercase;
                                    color: $primaryLight;
                                    padding: 0 1rem;
                                    font-weight: 600;
                              }
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
            }
      }


}
</style>