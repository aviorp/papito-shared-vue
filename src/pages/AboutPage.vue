<template>
  <PageLayout>
    <PModal
      v-if="showModal"
      @close="showModal = false"
      title="Confirmation Modal"
    >
      <template #default>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          nemo?
        </p>
      </template>
    </PModal>
    <PCard class="col-span-3" @open-modal="showModal = true">
      <h2 class="card-title">About us...</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
        reiciendis cum obcaecati facere eos porro minima voluptatum expedita!
        Sunt, officiis? Fuga sed culpa, consequuntur ea nihil nostrum alias, ex
        saepe assumenda possimus praesentium numquam ut. Voluptate cupiditate
        dolores, minima consequatur atque aspernatur modi consectetur cumque.
        Non necessitatibus veniam quis unde quam nostrum eveniet saepe ab
        recusandae, suscipit facere repellendus assumenda consequuntur ea
        aliquam earum. Quasi error mollitia magnam nesciunt adipisci tempore
        tenetur, numquam placeat, dolorem facilis iusto fuga commodi ipsum
        ducimus perspiciatis dolore, rem laborum accusamus laboriosam obcaecati?
        Molestiae, doloremque sequi nobis ipsa modi maiores temporibus odit ea
        rem suscipit eos reprehenderit deserunt beatae cumque tempore expedita
        aliquam iure eveniet nihil a voluptatibus rerum. Culpa neque aut
        deserunt facere esse, temporibus recusandae cupiditate ab saepe, dolores
        exercitationem distinctio? Ad architecto illo fugit eius natus quidem?
        Consectetur autem esse odit fugit vitae porro ipsa dicta in numquam
        doloremque impedit enim nam aliquam aperiam distinctio eos accusamus sit
        similique aut, placeat quod.
      </p>
    </PCard>
    <PCard @open-modal="showModal = true" v-for="i in 6" :key="i">
      <h2 class="card-title">Cell {{ i }}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, unde!
      </p>
    </PCard>
  </PageLayout>
</template>

<script setup>
import { ref } from "vue";
import PModal from "@/components/PModal.vue";
import PCard from "@/components/PCard.vue";
import PageLayout from "@/layouts/PageLayout.vue";
const showModal = ref(false);
</script>
