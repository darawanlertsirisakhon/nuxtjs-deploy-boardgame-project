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

          <b-navbar-nav class="ml-auto"> </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <AdminForm @sendData="onSubmitted" />
  </div>
</template>
<script>
import AdminForm from '../../../components/admin/AdminForm.vue'
export default {
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },

  middleware: 'auth',
  components: {
    AdminForm,
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin/posts')
      })
    },
  },
}
</script>
