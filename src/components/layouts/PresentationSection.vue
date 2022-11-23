<script>
import { store } from '../../store.js';
export default {
      name: 'PresentationSection',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <section class="presentation">
            <div class="container">
                  <div class="row row-cols-2">
                        <div class="video_section col">
                              <h3>presentation</h3>
                              <div class="video_demo">
                                    <img src="/images/461365506_1280.jpg" alt="">
                              </div>

                        </div>

                        <div class="twitter_feed col">
                              <h3>twitter feed</h3>
                              <div>
                                    <div class="row">
                                          <div class="row" v-for="feed in store.twitterFeed">
                                                <div class="col-2 logo">
                                                      <img :src="feed.logo" alt="">
                                                </div>
                                                <div class="col-10 feed">
                                                      <p>{{ feed.feed }}</p>
                                                      <small><a href="">{{ feed.link }}</a></small>
                                                </div>
                                                <div class="date">
                                                      <h6>
                                                            {{ feed.date }}
                                                      </h6>
                                                </div>
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

.presentation {
      padding: 2rem 0;

      h3 {
            text-transform: uppercase;
            color: $designDark;
            font-weight: 800;
            padding-right: 2rem;
      }

      .video_demo {
            padding: 2rem;

            img {
                  width: 100%;
            }


      }

      .twitter_feed {
            height: 100%;

            .row {
                  padding: 1rem 0;

                  .logo {
                        img {
                              width: 40px;
                        }
                  }

                  .feed {

                        p {
                              display: -webkit-box;
                              overflow: hidden;
                              -webkit-line-clamp: 2;
                              -webkit-box-orient: vertical;
                        }

                        a {
                              color: $primaryDanger;
                        }


                  }

                  .date {
                        h6 {

                              font-style: italic;
                              color: $secondaryLightning;
                        }
                  }

            }

      }
}
</style>