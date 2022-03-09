<template>
  <div>
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand to="/">BoardGame</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        
      </b-collapse>
    </b-navbar>
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Welcome back!</h3>

                  <!-- Sign In Form -->
                  <form @submit="login">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        v-model="email"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div class="d-grid">
                      <button
                        class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div class="text-center">
                        <a class="small" href="#">Forgot password?</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()

      const payload = {
        email: this.email,
        password: this.password,
      }

      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        // this.$router.push('/')
      } catch (e) {
        // this.$router.push('/login')
      }
    },
  },
}
</script>

<style>
.login {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://source.unsplash.com/WEQbe2jBg40/600x1200');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>
