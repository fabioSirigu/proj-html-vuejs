<script>
export default {
      name: 'LocationSection',
}
</script>

<template>
      <section class="location">
            <div class="text">
                  <h3>location</h3>
                  <h5>gd building, grand conference room</h5>
                  <address>
                        <font-awesome-icon icon="fa-solid fa-location-arrow" />
                        11 GD Building, RIver Mall, New York, USA 8879
                  </address>
                  <p class="check_accomodation">
                        <a href="">check for accomodations here</a>
                  </p>
                  <div>
                        <img src="/images/1-item-2.jpg" alt="">
                        <div class="contacts">
                              <span>
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                    <a href="">+1-112-222-3344</a>
                              </span>
                              <span>
                                    <font-awesome-icon icon="fa-solid fa-envelope" />
                                    <a href="">Contact@TheKeynoteTheme.com</a>
                              </span>
                        </div>
                  </div>
            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.location {
      background-image: url('/images/location-bg.jpg');
      height: 500px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
            text-align: center;
            color: $primaryLight;

            h3 {
                  text-transform: uppercase;
                  font-weight: 800;
            }

            h5 {
                  text-transform: uppercase;
                  font-size: 40px;

            }

            .check_accomodation {
                  a {
                        color: $primaryDanger;
                        text-transform: capitalize;
                  }
            }

            .contacts {
                  span {
                        padding: 0.5rem;

                        a {

                              color: $primaryLight;
                              margin: 0 0.5rem;
                        }
                  }
            }
      }
}
</style>