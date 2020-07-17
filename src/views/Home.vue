<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <b-card no-block>
    <b-tabs>
      <b-tab title="Tab 1">
        Tab 1 Contents
      </b-tab>
      <b-tab title="Tab 2">
        Tab 2 Contents <b-button size="md">Boop</b-button>
      </b-tab>
      <b-tab title="Tab 3" disabled>
        Tab 3 Contents
      </b-tab>
    </b-tabs>
  </b-card>
  </div>

</template>

<script>
export default {
  name: 'Home',
}
</script>
