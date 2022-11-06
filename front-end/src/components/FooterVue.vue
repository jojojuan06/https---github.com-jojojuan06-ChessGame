<template>
    <footer class="border-t-4 border-[#d1515a] pt-6  text-white bg-[#202124]"  style="max-height: 150px;">
            <div class="justify-center items-center">
                <!-- boucle sur chaque link (ajouter dans le futur et je les affiches   -->  
                <div  class="flex justify-center items-center">
                    <a  class="hover:text-[#ED69BD] .no-underline" href="mailto:jonh_06@live.fr">
                    <div class="flex">
                        <span class="mr-2 text-center mdi mdi-mail"></span>
                        <h2 class="text-base font-bold">Nous Contacter</h2>  
                    </div>
                    </a>
                </div>
                <div class="pb-3 text-center">
                    <strong>&copy; {{ new Date().getFullYear() }} — shop</strong>
                </div>
            </div>
    </footer>
</template>

<script>
export default {
name:'FooterVue',

}
</script>

<style scoped>
</style>