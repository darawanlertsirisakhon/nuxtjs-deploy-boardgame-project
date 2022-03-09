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
    <header class="masthead d-flex align-items-center">
      <div class="container px-4 px-lg-5 text-center">
        <h1 class="mb-1">บริการบอร์ดเกม</h1>
        <h3 class="mb-5">
          <em
            >สำนักวิทยบริการและเทคโนโลยีสารสนเทศ
            มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา</em
          >
        </h3>
        <b-button to="/posts" class="btn btn-dark" size="lg"
          >เข้าสู่เว็บไซต์</b-button
        >
      </div>
    </header>
    <section class="content-section bg-light" id="about">
      <div class="container px-4 px-lg-5 text-center">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-10">
            <h2>วัตถุประสงค์</h2>
            <p class="lead mb-5">
              เว็บไซต์นี้จัดทำขึ้นเพื่อพัฒนาบริการบอร์ดเกม การจัดทำฐานข้อมูล
              การจัดบริการ และประชาสัมพันธ์
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Map-->
    <div class="map" id="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.2015741012144!2d98.95327550260947!3d18.810406700764553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a43cfcd65b5%3A0x1c0026152fc6a3df!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4Lil4Lil4LmJ4Liy4LiZ4LiZ4Liy!5e0!3m2!1sth!2sth!4v1645600652659!5m2!1sth!2sth"
        width="400"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <br />
      <small
        ><a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.2015741012144!2d98.95327550260947!3d18.810406700764553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a43cfcd65b5%3A0x1c0026152fc6a3df!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4Lil4Lil4LmJ4Liy4LiZ4LiZ4Liy!5e0!3m2!1sth!2sth!4v1645600652659!5m2!1sth!2sth"
        ></a
      ></small>
    </div>
    <!-- Footer-->
    <footer class="footer text-center">
      <div class="container px-4 px-lg-5">
        <p class="text-muted small mb-0">
          สำนักวิทยบริการและเทคโนโลยีสารสนเทศ : 128 ถ.ห้วยแก้ว ต.ช้างเผือก
          อ.เมือง จ.เชียงใหม่ 50300 โทรศัพท์ : 0 5392 1444 ต่อ 1619 , โทรสาร : 0
          53921 444 ต่อ 1630
        </p>
      </div>
    </footer>
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
    async logout(e) {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
<style scoped>
.masthead {
  min-height: 20rem;
  position: relative;
  display: table;
  width: 100%;
  height: auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    url('https://firebasestorage.googleapis.com/v0/b/boardgame-nuxtjs.appspot.com/o/4562472.jpg?alt=media&token=98558d69-3313-4507-80fd-17fdf4498624');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.masthead h1,
.masthead .h1 {
  font-size: 3rem;
  margin: 0;
  padding: 0;
  color: white;
}
h3 {
  color: white;
}

.content-section {
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
}
footer.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
footer.footer .social-link {
  display: block;
  text-decoration: none;
  height: 4rem;
  width: 4rem;
  line-height: 4.3rem;
  font-size: 1.5rem;
  background-color: #1d809f;
  transition: background-color 0.15s ease-in-out;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
}
footer.footer .social-link:hover {
  background-color: #155d74;
  text-decoration: none;
}

.map {
  height: 30rem;
}
.map iframe {
  pointer-events: none;
  height: 100%;
  width: 100%;
  border: 0;
}

@media (max-width: 992px) {
  .map {
    height: 75%;
  }
}
</style>
