<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            :prepend-avatar="require('@/assets/autor-photo.jpg')"
            title="Tudor Oprea"
            subtitle="tudoroprea24@yahoo.ro"
          ></v-list-item>
          <v-divider></v-divider>
        </v-list>

        <v-list density="compact" nav>
          <v-list-item 
            prepend-icon="mdi-image" 
            title="Color Gallery" 
            value="color"
            @click="selectOption(true)">
          </v-list-item>

          <v-list-item 
            prepend-icon="mdi-dialpad" 
            title="Grayspace Gallery" 
            value="gray"
            @click="selectOption(false)">
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    import { defineEmits } from 'vue';
    import { useRouter } from 'vue-router';
    const emits = defineEmits(['selectOption']);
    const router = useRouter();

    function selectOption(isColor){
       emits("selectOption", isColor);
       if(isColor == true){
        router.push('/colored');
       }
       else router.push('/gray');
    }

    
</script>