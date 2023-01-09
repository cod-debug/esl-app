<template>
  <div
    class="page-header"
    style="background: url('~assets/img/upper-bg.png') contain"
  >
    <div class="text-center text-white q-pa-xl">
      <div class="text-h1 text-bold">WELCOME TO ESL</div>
      <div class="text-small text-bold">SAMPLE TEXT HERE...</div>
      <q-btn
        unelevated
        rounded
        color="grey-1"
        class="text-blue-12 shadow-2 q-my-sm q-px-xl text-bold text-h5 q-my-lg"
        label="Sign Up"
        icon="check_circle"
        glossy
      />
    </div>
  </div>

  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-12 col-md-5">
      <div class="q-pa-lg">
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide :name="1" img-src="~assets/img/ad1.jpg" />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <div class="flex flex-center text-white col-12 col-md-5">
      <div class="q-mt-md bg-white text-black text-justify q-py-md q-px-lg">
        <h4 class="q-pa-none q-my-md">About Us</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    slide: 1,
  }),
};
</script>
