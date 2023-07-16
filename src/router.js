import {createRouter, createWebHistory} from 'vue-router';
import ImageGallery from './components/ImageGallery.vue';
const routes = [
    {path: '/colored', name: 'ColoredImages', component: ImageGallery},
    {path: '/gray', name: 'GrayImages', component: ImageGallery}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;