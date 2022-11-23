<script>
export default {
      name: 'CountdownSection',
}
</script>

<template>
      <section class="countdown">
            <div class="container">
                  <div class="date">
                        <div class="days">
                              <h2>3339</h2>
                              <h4>days</h4>
                        </div>
                        <div class="hours">
                              <h2>17</h2>
                              <h4>hours</h4>
                        </div>
                        <div class="minutes">
                              <h2>28</h2>
                              <h4>mins</h4>
                        </div>
                        <div class="seconds">
                              <h2>17</h2>
                              <h4>secs</h4>
                        </div>
                  </div>
                  <div class="sign_in">
                        <h3>subscribe for uptdates</h3>
                  </div>
                  <form class="form">
                        <div class="col-auto">
                              <input type="email" class="form-control" id="inputPassword2"
                                    placeholder="Please fill your email">
                        </div>
                        <div class="col-auto">
                              <button type="submit" class="my-btn">Subscribe</button>
                        </div>

                  </form>
            </div>
      </section>
</template>

<style lang="scss" scoped>
@use '../../assets/partials/variables.scss' as *;

.countdown {
      height: 500px;
      display: flex;
      align-items: center;
      background-image: url('images/coutdown-bg1.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            .date {
                  display: flex;
                  justify-content: center;

                  div {
                        padding: 0.8rem 1.75rem;
                        background-color: rgba(0, 0, 0, 0.5);
                        margin: 0 0.5rem;
                        border-radius: 0.5rem;
                        text-align: center;
                        text-transform: uppercase;
                        color: $primaryLight;
                        font-weight: 800;

                        h2 {
                              font-size: 60px;
                        }
                  }
            }

            .sign_in {
                  margin: 3rem 0;
                  text-transform: uppercase;
                  color: $designDark;
            }

            .form {
                  display: flex;
                  align-items: center;

                  .form-control {
                        width: 300px;
                  }

                  .my-btn {
                        padding: 0.5rem 1.5rem;
                        margin-left: 1rem;
                        border: none;
                        border-bottom: 3px solid darkred;
                        color: $primaryLight;
                        background-color: $primaryDanger;
                        text-transform: uppercase;
                        font-weight: 600;
                        font-size: 14px;
                        transition: all 0.2s;

                        &:hover {
                              background-color: darkred;

                        }
                  }
            }
      }

}
</style>