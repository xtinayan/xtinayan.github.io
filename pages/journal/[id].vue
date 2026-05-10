<!-- catch route  -->

<script setup >
    const route = useRoute();
    const nuxt = useNuxtApp();
    console.log(nuxt);
</script>

<template> 
    <div> 
        journal id: {{$route.params.id}}
    </div>
</template>
