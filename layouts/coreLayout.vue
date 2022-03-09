<template>
  <div>
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="/">BoardGame</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav><b-nav-item href="/posts">Home</b-nav-item></b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Admin">
            <div v-if="loggedIn">
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item to="/login">Login</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
