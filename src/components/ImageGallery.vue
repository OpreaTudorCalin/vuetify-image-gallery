<template>
<v-card class="ma-5 pa-3">
    <v-row>
        <v-col
            v-for="n in 200" :key="n"
            cols="1"
            md="1"
            sm="2"
            xs="3"
            >
            <v-card class="rounded-b-xl rounded-te-xl">
                <v-img 
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${p.isColored ? '' : '&grayscale'}`"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                    @click="copyUrl(`https://picsum.photos/500/300?image=${n * 5 + 10}${p.isColored ? '' : '&grayscale'}`)"
                >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
                </v-img>
            </v-card>
        </v-col>
    </v-row>
</v-card>
</template>

<script setup>
import { defineProps } from 'vue';
    const p = defineProps(['isColored']);

    function copyUrl(textToCopy){
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log("Textul a fost copiat în clipboard.");
            })
            .catch((error) => {
                console.error("Eroare la copierea în clipboard: ", error);
            })
        }
</script>