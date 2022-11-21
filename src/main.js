import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faFlickr } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


// <font-awesome-icon icon="fa-solid fa-question" />
//<font-awesome-icon icon="fa-solid fa-angle-right" />
//<font-awesome-icon icon="fa-solid fa-angle-left" />
//<font-awesome-icon icon="fa-solid fa-location-arrow" />
//<font-awesome-icon icon="fa-regular fa-clock" />
//<font-awesome-icon icon="fa-solid fa-user" />
//<font-awesome-icon icon="fa-solid fa-phone" />
//<font-awesome-icon icon="fa-solid fa-envelope" />
//<font-awesome-icon icon="fa-solid fa-bullhorn" />
//<font-awesome-icon icon="fa-brands fa-facebook-f" />
//<font-awesome-icon icon="fa-brands fa-twitter" />
//<font-awesome-icon icon="fa-brands fa-linkedin-in" />
//<font-awesome-icon icon="fa-brands fa-pinterest-p" />
//<font-awesome-icon icon="fa-brands fa-google-plus-g" />
//<font-awesome-icon icon="fa-solid fa-copyright" />
//<font-awesome-icon icon="fa-brands fa-flickr" />


/* add icons to the library */
library.add(faMagnifyingGlass, faBolt, faTrophy, faQuestion, faAngleLeft, faAngleRight, faLocationArrow, faClock, faUser, faPhone, faEnvelope, faBullhorn, faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faGooglePlusG, faFlickr, faCopyright)


createApp(App)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mount('#app')
