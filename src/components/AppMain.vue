<script>
import JumboSection from './layouts/JumboSection.vue'
import InfoSection from './layouts/InfoSection.vue'
import CountdownSection from './layouts/CountdownSection.vue'
import SpeakersSection from './layouts/SpeakersSection.vue'
import ProgramSection from './layouts/ProgramSection.vue'
import MapsSection from './layouts/MapsSection.vue'
import LocationSection from './layouts/LocationSection.vue'
import NewsSection from './layouts/NewsSection.vue'
import TicketsSection from './layouts/TicketsSection.vue'
import PresentationSection from './layouts/PresentationSection.vue'
import SponsorSection from './layouts/SponsorSection.vue'
export default {
      name: 'AppMain',
      components: {
            JumboSection,
            InfoSection,
            CountdownSection,
            SpeakersSection,
            ProgramSection,
            MapsSection,
            LocationSection,
            NewsSection,
            TicketsSection,
            PresentationSection,
            SponsorSection
      }
}
</script>

<template>
      <main>
            <JumboSection />
            <InfoSection />
            <CountdownSection />
            <SpeakersSection />
            <ProgramSection />
            <MapsSection />
            <LocationSection />
            <NewsSection />
            <TicketsSection />
            <PresentationSection />
            <SponsorSection />

      </main>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables.scss' as *;
</style>