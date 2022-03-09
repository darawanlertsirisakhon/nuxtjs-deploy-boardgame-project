<template>
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
              <b-dropdown-item to="/admin/posts/create">Insert</b-dropdown-item
              ><b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item to="/login">Login</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <SinglePost :post="singlePost" />
  </div>
</template>
<script>
import SinglePost from '../../../components/posts/SinglePost.vue'
import axios from 'axios'
export default {
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },
  
  methods: {
    async logout(e) {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
  
  components: {
    SinglePost,
  },
  asyncData(context) {
    return axios
      .get(
        'https://boardgame-nuxtjs-default-rtdb.asia-southeast1.firebasedatabase.app/post/' +
          context.params.id +
          '.json'
      )
      .then((res) => {
        return {
          singlePost: {
            ...res.data,
            id: context.params.id,
          },
        }
      })
      .catch((e) => context.error(e))
  },
}
</script>
