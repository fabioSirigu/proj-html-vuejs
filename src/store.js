import { reactive } from 'vue'

export const store = reactive({
      navbar: {
            link1: 'Home',
            link2: 'Pages',
            link3: 'Program',
            link4: 'Tickets',
            link5: 'Speakers',
            link6: 'Papares',
            link7: 'Blog',
            link8: 'Shortcodes'
      },
      speakers: [
            {
                  img: '/images/speaker-1.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-2.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-3.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-4.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-5.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-6.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-7.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-8.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
      ],
      news: [
            {
                  image: '/images/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg',
                  title: 'lorem ipsum',
                  date: '23 December',
                  comments: '0',
                  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis illo nobis eveniet quisquam beatae. Aperiam commodi consequatur'
            },
            {
                  image: '/images/photodune-8522811-speaker-at-business-conference-and-present.jpg',
                  title: 'lorem ipsum',
                  date: '23 December',
                  comments: '2',
                  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis illo nobis eveniet quisquam beatae. Aperiam commodi consequatur'
            },
            {
                  image: '/images/photodune-8797753-multiethnic-people-with-startup-business-t.jpg',
                  title: 'lorem ipsum',
                  date: '23 May',
                  comments: '0',
                  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis illo nobis eveniet quisquam beatae. Aperiam commodi consequatur'
            }
      ],
      tickets: [
            {
                  name: 'one day pass',
                  type: 'free',
                  description: {
                        offer1: 'one day access',
                        offer2: 'coffee break',
                        offer3: 'lunch(international buffet)',
                        offer4: 'documents sheets',
                        offer5: '50usd voucher for next event'

                  },
                  link: 'book now'


            },
            {
                  name: 'four day passes',
                  type: '750.00 usd',
                  description: {
                        offer1: 'four day access',
                        offer2: 'coffee break',
                        offer3: 'lunch(international buffet)',
                        offer4: 'documents sheets',
                        offer5: '100usd voucher for next event'

                  },
                  link: 'book now'


            },
            {
                  name: 'two day passes',
                  type: 'free',
                  description: {
                        offer1: 'two day access',
                        offer2: 'coffee break',
                        offer3: 'lunch(international buffet)',
                        offer4: 'documents sheets',
                        offer5: '70usd voucher for next event'

                  },
                  link: 'book now'


            }
      ],
      twitterFeed: [
            {
                  logo: '/images/twitterLogo.png',
                  feed: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquamcumque quas commodi nam nostrum, @Envato consectetur nesciunt quam Eius illum voluptas autem? Cupiditate maxime animi quisquam voluptate asperiores! Sapiente, maiores.',
                  link: 'https://t.co/GsdBgsa',
                  date: '3 days ago'
            },
            {
                  logo: '/images/twitterLogo.png',
                  feed: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..Cupiditate maxime animi quisquam voluptate asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquamcumque quas commodi nam nostrum',
                  link: 'https://t.co/BsdAxsa',
                  date: '9 days ago'
            },
            {
                  logo: '/images/twitterLogo.png',
                  feed: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..Cupiditate maxime animi quisquam voluptate asperiores! Lorem verded srumLorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquamcumque quas commodi nam nostrum',
                  link: 'https://t.co/BGaHs',
                  date: '11 days ago'
            }
      ],
      sponsors: [
            { image: '/images/banner-1.jpg' },
            { image: '/images/banner-2.jpg' },
            { image: '/images/banner-3.jpg' },
            { image: '/images/banner-4.jpg' },
            { image: '/images/banner-5.jpg' },
            { image: '/images/banner-6.jpg' }
      ],
      gallery: [

            { thumb: '/images/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg' },
            { thumb: '/images/photodune-8523683-speaker-at-business-convention-and-present.jpg' },
            { thumb: '/images/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg' },
            { thumb: '/images/photodune-8522811-speaker-at-business-conference-and-present (1).jpg' },
            { thumb: '/images/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg' },
            { thumb: '/images/card04-150x150.jpg' },
            { thumb: '/images/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg' },
            { thumb: '/images/photodune-6745585-modern-creative-workspace-m-150x150.jpg' },
            { thumb: '/images/6426608875_186070f8ca_o-150x150.jpg' },
            { thumb: '/images/card01-150x150.jpg' },
            { thumb: '/images/13349065283_64d09b067c_o-150x150.jpg' },
            { thumb: '/images/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg' }

      ]

})