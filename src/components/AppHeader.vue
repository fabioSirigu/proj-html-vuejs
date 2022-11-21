<script>
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default {
      name: 'AppHeader',
      data() {
            return {
                  faMagnifyingGlass
            }
      }
}
</script>

<template>
      <header>
            <div class="container">
                  <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                              <a class="navbar-brand" href="#">
                                    <img src="images/logo.png" alt="">
                              </a>
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li class="nav-item">
                                                <a class="nav-link active" href="#">Home</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Pages</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Program</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Tickets</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Speakers</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Papares</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Blog</a>
                                          </li>
                                          <li class="nav-item">
                                                <a class="nav-link" href="#">Shortcodes</a>
                                          </li>

                                    </ul>
                                    <form class="d-flex" role="search">
                                          <input class="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search">
                                          <button class="my-btn" type="submit">
                                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </nav>

            </div>
      </header>
</template>

<style lang="scss" scoped>
header {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;

      .container-fluid {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
      }

      .navbar {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 14px;

            .navbar-collapse {
                  flex-grow: 0;
            }
      }

      .form-control {
            width: 5px;

            &:hover {
                  width: 150px;
            }
      }

      .my-btn {
            width: 50px;
            background-color: transparent;
            border: none;
      }
}
</style>