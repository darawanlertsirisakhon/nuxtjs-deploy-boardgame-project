<template>
  <div class="bg-light py-3">
    <b-container fluid="md" class="py-2 bg-white">
      <b-row>
        <b-breadcrumb class="bg-white">
          <b-breadcrumb-item to="/posts">Home</b-breadcrumb-item>
          <b-breadcrumb-item active>{{ singlePost.title }}</b-breadcrumb-item>
        </b-breadcrumb>

        <b-col lg="12"
          ><h1 class="mt-2">{{ singlePost.title }}</h1>
          <p>
            ประเภท <b>{{ singlePost.type }}</b>
          </p>
          <hr
        /></b-col>

        <b-col lg="6" class="mt-2"
          ><b-img :src="singlePost.image" height="400px"></b-img
        ></b-col>
        <b-col lg="6" class="mt-2"
          ><h3>รายละเอียด</h3>
          <p>{{ singlePost.content }}</p>
          <h3>วิธีการเล่น</h3>
          <p v-nl2br>{{ singlePost.hplay }}</p>
          <b-row>
            <b-co><h5>จำนวนที่ให้บริการ:</h5> </b-co>

            <p>&nbsp; {{ singlePost.value }} ชิ้น</p>

            <p></p>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singlePost: { ...this.post },
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  directives: {
    nl2br: {
      inserted(el) {
        el.innerHTML = el.textContent.replace(/\n/g, '<br />')
      },
    },
  },
  methods: {
    async logout(e) {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
