<script>
import JumboSection from './layouts/JumboSection.vue'
import InfoSection from './layouts/InfoSection.vue'
import CountdownSection from './layouts/CountdownSection.vue'
export default {
      name: 'AppMain',
      components: {
            JumboSection,
            InfoSection,
            CountdownSection
      }
}
</script>

<template>
      <main>
            <JumboSection />
            <InfoSection />
            <CountdownSection />
      </main>
</template>

<style lang="scss" scoped>
@use '../assets/partials/variables.scss' as *;
</style>