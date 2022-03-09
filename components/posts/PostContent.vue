<template>
  <b-col md="3 d-flex align-items-stretch">
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        ประเภท:<strong>{{ type }}</strong>
      </b-card-text>

      <nuxt-link class="btn btn-success" :to="postLink">
        {{ isAdmin ? 'แก้ไข' : 'วิธีการเล่น' }}
      </nuxt-link>
      <template #footer>
        <!-- <small class="text-muted"
          >สถานะ: <strong>{{ status }}</strong
          ><br />
          คงเหลือ: <strong>{{ value }}</strong
          >/2</small
        > -->
      </template>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/posts/' + this.id : '/posts/' + this.id
    },
  },
}
</script>
