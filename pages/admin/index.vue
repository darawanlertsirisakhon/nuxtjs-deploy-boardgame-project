<template>
  <div>
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
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <nuxt />
    </div>
    <div class="container">
      <div class="col-12"></div>

      <b-table :per-page="perPage" :current-page="currentPage" small
        ><tr :items="loadData" :key="post.id" v-for="post in loadData"></tr
      ></b-table>
      <!-- <p>{{ loadData }}</p> -->
      <b-table class="table">
        <tr>
          <th>id</th>
        </tr>
        <tr :key="post.id" v-for="post in loadData">
          <td>{{ post.id }}</td>
        </tr>
      </b-table>
      <div class="table-responsive">
        <div class="table table-bordered table-striped" id="my-table">
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อเกม</th>
            <th>ประเภท</th>
            <th>วิธีการเล่น</th>
            <th>รายละเอียด</th>

            <th>จำนวน</th>
            <th>Action</th>
          </tr>
          <tr :key="post.id" v-for="(post, id) in filteredPosts">
            <td>{{ id }}</td>
            <td>
              {{ post.title }}
            </td>
            <td>{{ post.type }}</td>
            <td>{{ post.hplay.slice(0, 50) + '...' }}</td>
            <td>{{ post.content }}</td>

            <td>{{ post.value }}</td>
            <td>
              <nuxt-link
                :to="'/admin/posts/' + post.id"
                class="btn btn-success"
                :isAdmin="isAdmin"
              >
                Edit
              </nuxt-link>
              <b-button
                type="button"
                @click.prevent="deleteItem(post.id)"
                class="btn btn-danger btn-xs delete"
                :isAdmin="isAdmin"
              >
                Delete
              </b-button>
              <nuxt-link :to="'/posts/' + post.id" class="btn btn-info">
                View
              </nuxt-link>
            </td>
          </tr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      search: '',
      perPage: 5,
      currentPage: 1,
      post: [],
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
    }
  },
  components: {},
  props: {
    isAdmin: {
      type: Boolean,
      default: true,
    },
    posts: {
      type: Array,
    },
  },
  computed: {
    loadData() {
      return this.$store.getters.getAllPosts
    },
    postLink() {
      return this.isAdmin ? '/admin/posts/' + this.id : '/posts/' + this.id
    },
    filteredPosts() {
      return this.loadData.filter((post) => post.title.includes(this.search))
    },
    rows() {
      return this.loadData.length
    },
  },
  methods: {
    deleteItem(id) {
      console.log(id)
      this.$store.dispatch('deleteItem', id)
    },
    async logout(e) {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
  created() {},
}
</script>
