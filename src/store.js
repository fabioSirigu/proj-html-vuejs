import { reactive } from 'vue'

export const store = reactive({

      navbar: [
            'Home',
            'Pages',
            'Program',
            'Tickets',
            'Speakers',
            'Papares',
            'Blog',
            'Shortcodes'
      ],
      speakers: [
            {
                  img: '/images/speaker-1.jpg',
                  name: 'Franco Rossi',
                  job: 'webDev',
            },
            {
                  img: '/images/speaker-2.jpg',
                  name: 'Lucas King',
                  job: 'Software CEO',
            },
            {
                  img: '/images/speaker-3.jpg',
                  name: 'Franco Rossi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-4.jpg',
                  name: 'Ciro Esposito',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-5.jpg',
                  name: 'Nenno',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-6.jpg',
                  name: 'Franco Bianchi',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-7.jpg',
                  name: 'Luca Orsolini',
                  job: 'weDev',
            },
            {
                  img: '/images/speaker-8.jpg',
                  name: 'Laurance Francis',
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
                  type: '580.00 usd',
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

      ],
      program: [
            {
                  day: '1',
                  date: '23 May 2016',
                  hour: '9:30 - 10:30',
                  location: 'Roma',
                  speakers: 'Laurent Francis',
                  image: '/images/speaker-1.jpg',
                  description: 'dolorem ipsam sed, mollitia perferendis sint Placeat, ipsum! Quibusdam tempore qui repellat, dolorem ipsam sed, mollitia perferendis sint recusandae fugiat cumque voluptate, enim soluta quis possimus incidunt porro. lorem Ipsum.'
            },
            {
                  day: '2',
                  date: '11 November 2018',
                  hour: '11:30 - 12:30',
                  location: 'Milano',
                  speakers: 'Marco Bianchi',
                  image: '/images/speaker-2.jpg',
                  description: 'Placeat, ipsum! Quibusdam tempore qui repellat, dolorem ipsam sed, mollitia perferendis sint recusandae fugiat cumque voluptate, enim soluta quis possimus incidunt porro.'
            },
            {
                  day: '3',
                  date: '23 May 2020',
                  hour: '9:00 - 11:30',
                  location: 'Torino',
                  speakers: 'Jack Doe',
                  image: '/images/speaker-3.jpg',
                  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, ipsum! Quibusdam tempore qui repellat, dolorem ipsam sed, mollitia perferendis sint recusandae fugiat cumque voluptate, enim soluta quis possimus incidunt porro.'
            },
            {
                  day: '4',
                  date: '11 May 2022',
                  hour: '9:30 - 10:30',
                  location: 'Napoli',
                  speakers: 'Ciro Esposito',
                  image: '/images/speaker-4.jpg',
                  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, ipsum! Quibusdam tempore qui repellat, dolorem ipsam sed, mollitia perferendis sint recusandae fugiat cumque voluptate, enim soluta quis possimus incidunt porro.'
            },
            {
                  day: '5',
                  date: '22 June 2023',
                  hour: '9:30 - 10:30',
                  location: 'Cagliari',
                  speakers: 'Nenno',
                  image: '/images/speaker-5.jpg',
                  description: 'Quibusdam                  tempore qui repellat, dolorem ipsam sed, mollitia perferendis sint recusandae fugiat   cumque voluptate, enim soluta quis possimus incidunt porro'
            },
            {
                  day: '',
                  date: '',
                  hour: '',
                  location: '',
                  speakers: '',
                  description: ''
            },
      ],
      programActive: {
            day: '',
            date: '',
            hour: '',
            location: '',
            speakers: '',
            image: '',
            description: ''

      },
      changeProgram: (index) => {
            store.programActive = store.program[index]
      }

})