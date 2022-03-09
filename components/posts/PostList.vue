<template>
  <div class="bg-white">
    <div>
      <b-navbar toggleable="lg" variant="faded" type="light">
        <b-navbar-brand to="/">BoardGame</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/posts">Home</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto"
            ><b-nav-item-dropdown text="Admin">
              <div v-if="loggedIn">
                <b-dropdown-item to="/admin">Table</b-dropdown-item>
                <b-dropdown-item to="/admin/posts">Edit</b-dropdown-item>
                <b-dropdown-item to="/admin/posts/create"
                  >Insert</b-dropdown-item
                ><b-dropdown-item @click="logout">Logout</b-dropdown-item>
              </div>
              <div v-else>
                <b-dropdown-item to="/login">Login</b-dropdown-item>
              </div>
            </b-nav-item-dropdown>
            <b-nav-form>
              <b-form-input
                class="mr-sm-2"
                placeholder="Search"
                v-model="search"
              ></b-form-input>
              <b-button
                variant="outline-dark"
                class="my-2 my-sm-0"
                type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-navbar-nav class="ml-auto"> </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <nuxt />
    </div>

    <b-container class="py-3">
      <b-row class="py-2">
        <PostConTent
          :key="post.id"
          v-for="post in filteredPosts"
          :id="post.id"
          :title="post.title"
          :content="post.content"
          :image="post.image"
          :isAdmin="isAdmin"
          :status="post.status"
          :value="post.value"
          :type="post.type"
        />
      </b-row>
    </b-container>
  </div>
</template>
<script>
import PostConTent from '../../components/posts/PostContent.vue'

export default {
  data() {
    return {
      search: '',
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },
  components: {
    PostConTent,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => post.title.includes(this.search))
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
