<script>
import { store } from '../../store.js'
export default {
      name: 'NewsSection',
      data() {
            return {
                  store
            }

      }
}
</script>

<template>
      <section class="news_section">
            <div class="container head_news">
                  <div class="row ">
                        <div class="title_news col">
                              <h3>recent news</h3>
                        </div>

                        <div class="all_news col">
                              <a href="">read all news</a>
                        </div>
                  </div>

            </div>
            <div class="container news">
                  <div class="row row-cols-3">
                        <div class="col" v-for="post in store.news">
                              <div class="my_card">
                                    <div class="card_head">
                                          <img :src="post.image" alt="">
                                          <div class="sticky_post">
                                                <font-awesome-icon icon="fa-solid fa-bullhorn" />
                                                <small>sticky post</small>
                                          </div>
                                    </div>
                                    <div class="card_body">
                                          <small>{{ post.date }} / {{ post.comments }} comments</small>

                                          <h5>{{ post.title }}</h5>
                                          <p>{{ post.description }}</p>
                                          <a href="">read more</a>
                                    </div>
                              </div>
                        </div>


                  </div>

            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.news_section {
      padding: 2rem 0;

      .head_news {

            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;

            .row {
                  width: 100%;
                  align-items: center;

                  .title_news {
                        h3 {
                              text-transform: uppercase;
                              font-weight: 800;
                        }
                  }

                  .all_news {
                        text-align: end;

                        a {
                              color: $primaryDanger;
                              text-transform: capitalize;
                              font-style: italic;
                        }
                  }

            }


      }

      .news {

            .row {
                  width: 100%;

                  .my_card {
                        width: 100%;

                        .card_head {
                              position: relative;

                              img {
                                    width: 100%;
                              }

                              .sticky_post {
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
                                    background-color: black;
                                    padding: 0.4rem 0.8rem;
                                    width: 150px;
                                    text-align: center;
                                    color: $primaryLight;
                                    text-transform: uppercase;
                                    display: none;

                                    small {
                                          padding-left: 0.8rem;
                                          font-weight: 800;
                                    }
                              }

                              &:hover .sticky_post {
                                    display: block;
                              }
                        }

                        .card_body {
                              padding-top: 1rem;

                              h5 {
                                    text-transform: uppercase;
                                    font-weight: 800;
                              }

                              p {
                                    padding: 1rem 0;
                              }

                              a {
                                    color: $primaryDanger;
                                    text-transform: capitalize;
                                    font-style: italic;
                              }
                        }


                  }

            }
      }

}
</style>