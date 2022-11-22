<script>
import JumboSection from './layouts/JumboSection.vue'
import InfoSection from './layouts/InfoSection.vue'
import CountdownSection from './layouts/CountdownSection.vue'
import SpeakersSection from './layouts/SpeakersSection.vue'
import ProgramSection from './layouts/ProgramSection.vue'
export default {
      name: 'AppMain',
      components: {
            JumboSection,
            InfoSection,
            CountdownSection,
            SpeakersSection,
            ProgramSection
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

      </main>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables.scss' as *;
</style>