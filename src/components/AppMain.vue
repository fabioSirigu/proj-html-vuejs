<script>
import JumboSection from './layouts/JumboSection.vue'
import InfoSection from './layouts/InfoSection.vue'
import CountdownSection from './layouts/CountdownSection.vue'
import SpeakersSection from './layouts/SpeakersSection.vue'
export default {
      name: 'AppMain',
      components: {
            JumboSection,
            InfoSection,
            CountdownSection,
            SpeakersSection
      }
}
</script>

<template>
      <main>
            <JumboSection />
            <InfoSection />
            <CountdownSection />
            <SpeakersSection />

      </main>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables.scss' as *;
</style>