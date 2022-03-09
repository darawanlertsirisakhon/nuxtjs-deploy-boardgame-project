<template>
  <div>
    <b-container fluid="md" class="py-3"
      >{{ form.Status }}
      <h2 align="center">{{post ? 'แก้ไขข้อมูล':"เพิ่มข้อมูล"}}</h2>
      <b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-group label="ชื่อบอร์ดเกม">
          <b-form-input
            type="text"
            placeholder="ระบุชื่อบอร์ดเกม"
            v-model="form.title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="รายละเอียดบอร์ดเกม">
          <b-form-textarea
            placeholder="ระบุรายละเอียดบอร์ดเกม"
            v-model="form.content"
            rows="8"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group label="วิธีการเล่น">
          <b-form-textarea
            placeholder="ระบุวิธีการเล่น"
            v-model="form.hplay"
            rows="8"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group label="รูปภาพ (URL)">
          <b-form-input
            type="text"
            placeholder="ระบุ URL รูปภาพ"
            v-model="form.image"
          ></b-form-input>
          <!-- <b-form-group label="Status">
            <b-form-select
              v-model="form.status"
              :options="option1"
            ></b-form-select>
          </b-form-group> -->
          <b-form-group label="ประเภท">
            <b-form-select
              v-model="form.type"
              :options="option2"
            ></b-form-select>
          </b-form-group>
          <b-form-group label="จำนวน">
            <b-form-select
              v-model="form.value"
              :options="option3"
            ></b-form-select>
          </b-form-group>
        </b-form-group>
        <b-button type="submit" variant="primary">บันทึก</b-button>
        <b-button type="reset" variant="danger">ล้าง</b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn,
      option1: [
        { value: 'ว่าง', text: 'ว่าง' },
        { value: 'ไม่ว่าง', text: 'ไม่ว่าง' },
        { value: 'ชำรุด', text: 'ชำรุด' },
        { value: 'จอง', text: 'จอง' },
      ],
      option2: [
        { value: 'Party', text: 'Party' },
        { value: 'Cassic', text: 'Cassic' },
      ],
      option3: [
        { value: '0', text: '0' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
      ],
      form: this.post
        ? { ...this.post }
        : {
            title: '',
            content: '',
            image: '',
            author: '',
            hplay: '',
            status: '',
            type: '',
            value: '',
          },
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
    onSubmit(evt) {
      if (
        this.form.title != '' &&
        this.form.image != '' &&
        this.form.hplay != ''
      )
        if (evt) {
          this.$emit('sendData', this.form)
          this.$router.push('/posts')
        }
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.content = ''
      this.form.image = ''
      this.form.hplay = ''
    },
  },
  computed: {
    loadDataStatus() {
      return this.$store.getters.getAllStatus
    },
  },
  mounted() {
    document.querySelectorAll('textarea').forEach((element) => {})
  },
}
</script>
