<template>
  <PageLayout :state="state">
    <PModal v-if="showModal" @close="showModal = false" title="Confirmation Modal">
      <template #default>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo?</p>
      </template>
    </PModal>
    <PCard class="col-start-1 col-end-3" @open-modal="showModal = true">
      <h2 class="card-title">Welcome Aboard !</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt minus nam quasi suscipit numquam blanditiis,
        accusamus, nesciunt fugit eligendi pariatur ducimus atque esse voluptates, recusandae modi quaerat cum accusantium fuga ex
        doloremque inventore nostrum ipsum dicta. Minus id totam, aliquid magni modi voluptatem vero eaque nobis odio corporis
        sapiente voluptatibus accusantium neque doloribus ut quasi culpa atque, earum quisquam! Illum, enim eaque, facere totam
        minima ipsam quia dicta nisi accusantium explicabo rem reprehenderit eum, architecto porro doloremque cupiditate ipsum
        ipsa quae sit dolore optio ratione dolorem quas! Maxime reprehenderit molestias dolore. Molestias, nobis eius dolores
        laudantium atque accusantium repellendus est aut nisi earum, expedita impedit voluptatem quaerat quibusdam quod velit
        excepturi voluptatibus assumenda minus neque possimus facilis illum debitis? Velit accusantium veritatis quaerat ea autem
        dicta? Incidunt culpa voluptatum sint. Vitae odio ut velit quam omnis ad ullam qui doloribus quae. Magnam possimus
        similique natus repellendus. Laudantium architecto sunt alias, corporis est quisquam deserunt laborum, autem sed provident
        obcaecati, accusamus ducimus molestias ullam magnam sit id non. Nulla harum repellat dolorem in culpa! Ut, modi? Fugiat
        odio nihil hic pariatur, magnam quaerat modi provident quibusdam cum deserunt harum officia illo dignissimos ratione
        corrupti. Eligendi deleniti maxime vel laborum sed a beatae, nesciunt expedita voluptatum! At repellat dicta fuga maiores
        eos iusto ad odit eaque vitae rem natus, laborum earum fugit, quas dolores consequuntur quisquam, vero tempora sed
        incidunt nobis qui! Sed quo sunt officia quasi culpa quia quae soluta. Impedit fuga velit at odio in omnis, corporis unde
        perspiciatis quidem fugit, molestiae consequuntur voluptas, quibusdam maiores aspernatur.
      </p>
    </PCard>
    <PCard @open-modal="showModal = true" v-for="i in 6" :key="i">
      <h2 class="card-title">Cell {{ i }}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempora quam, eos quisquam dolorum repellendus
        possimus neque in velit alias?
      </p>
      <template #card-actions>
        <PButton @click="showModal = true">Open Modal</PButton>
      </template>
    </PCard>
  </PageLayout>
</template>

<script setup>
import { ref } from "vue";
import { states } from "@/constants";
import PModal from "@/components/PModal.vue";
import PCard from "@/components/PCard.vue";
import PButton from "@/components/PButton.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import { createInstance } from "@/utils";

const instance = createInstance("http://localhost:3300");

const showModal = ref(false);
const state = ref(states.INIT);
const refresh = async () => {
  state.value = states.LOADING;
  try {
    const { data } = await instance.get("/users");
    console.log("🚀🚀 LOGGER : *****************************************************  🚀🚀`");
    console.log("data :", data);
    console.log("🚀🚀 ***************************************************** 🚀🚀");
    state.value = states.INIT;
  } catch (error) {
    console.error(error);
    state.value = states.EMPTY;
  } finally {
    state.value = states.INIT;
  }
};
refresh();
</script>
