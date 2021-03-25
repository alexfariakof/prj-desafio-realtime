<template>
  <div class="text-center" style="background-color:#FFFFFF;margin-right:5px;height:100%;" >
    <v-btn  ef="" target="_blank"  text style="background-color:#FFFFFF;margin-right:5px;height:100%;"  @click="sheet = !sheet" >
        <v-img class="shrink mr-2" contain :src="require('@/assets/tune.png')" transition="scale-transition"  />
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        style=" display: inline; width: 30%;  float: right;"
        height="800px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false
  })
}
</script>
