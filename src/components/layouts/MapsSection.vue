<script>
export default {
      name: 'MapsSection',
}
</script>

<template>
      <section class="maps">
            <div class="view">
                  <h5>Map</h5>
                  <h5>Satellite</h5>
            </div>
            <div class="marker">
                  <img src="/images/default_marker.png" alt="">
            </div>
            <div class="controls">
                  <div class="user_view">
                        <img src="/images/image (4).svg" alt="">
                  </div>
                  <div class="zoom">
                        <div class="zoom_in">
                              <img src="/images/image (7).svg" alt="">
                        </div>
                        <div class="zoom_out">
                              <img src="/images/image (8).svg" alt="">

                        </div>
                  </div>
            </div>
            <div class="brands">
                  <img src="/images/google4.png" alt="">
            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.maps {
      background-image: url('/images/maps.PNG');
      height: 400px;
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      .view {
            display: flex;
            padding: 1rem;

            h5 {
                  font-size: 14px;
                  padding: 0.5rem;
                  background-color: $primaryLight;
                  border: 1px solid $primaryLightning;
            }
      }

      .marker {
            position: absolute;
            top: 35%;
            left: 50%;
      }

      .controls {
            position: absolute;
            right: 1rem;
            bottom: 1rem;

            .user_view,
            .zoom_in,
            .zoom_out {
                  width: 50px;
                  aspect-ratio: 1/1;
                  padding: 0.5rem;
                  text-align: center;
                  background-color: $primaryLight;
                  border: 1px solid $primaryLightning;
            }

            .user_view {
                  margin-bottom: 2rem;
            }


      }

      .brands {
            width: fit-content;
            position: absolute;
            left: 1rem;
            bottom: 0.5rem;
      }
}
</style>