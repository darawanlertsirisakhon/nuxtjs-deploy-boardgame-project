import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      //ข้อมูล
      loadData: [],
      loadDataStatus: [],
    },
    mutations: {
      // จัดการข้อมูลใน State
      setPostState(state, posts) {
        state.loadData = posts
      },
      setStatusState(state, status) {
        state.loadDataStatus = status
      },
      addPostState(state, post) {
        state.loadData.push(post)
      },
      editPostState(state, editpost) {
        const postIndex = state.loadData.findIndex(
          (post) => post.id === editpost.id
        )
        state.loadData[postIndex] = editpost
      },
      deleteItemState(state, id) {
        const Index = state.loadData.findIndex((post) => post.id === id)
        state.loadData.splice(Index, 1)
      },
    },

    actions: {
      // ทำงานร่วมกับ Backend เรียกใช้ผ่าน component
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            'https://boardgame-nuxtjs-default-rtdb.asia-southeast1.firebasedatabase.app/post.json'
          )
          .then((res) => {
            const data = []
            for (const key in res.data) {
              data.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPostState', data)
          })
          .catch((e) => context.error(e))
      },
      statusInit(vuexContext, context) {
        return axios
          .get(
            'https://boardgame-nuxtjs-default-rtdb.asia-southeast1.firebasedatabase.app/Status.json'
          )
          .then((res) => {
            const data = []
            for (const key in res.data) {
              data.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setStatusState', data)
            console.log(res)
          })
          .catch((e) => context.error(e))
      },
      addPost(vuexContext, post) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch
        const createPost = { ...post }

        return axios
          .post(
            'https://boardgame-nuxtjs-default-rtdb.asia-southeast1.firebasedatabase.app/post.json',
            createPost
          )
          .then((res) => {
            alert('เพิ่มข้อมูลสำเร็จ')
            console.log(res.data)
            vuexContext.commit('addPostState', {
              ...createPost,
              id: res.data.name,
            })
          })
      },
      editPost(vuexContext, post) {
        return axios
          .put(
            'https://boardgame-nuxtjs-default-rtdb.asia-southeast1.firebasedatabase.app/post/' +
              post.id +
              '.json',
            post
          )
          .then((res) => {
            alert('แก้ไขข้อมูลสำเร็จ')
            //commit mutation
            vuexContext.commit('editPostState', post)
          })
      },
      deleteItem(vuexContext, id) {
        if (window.confirm('คุณต้องการลบข้อมูลหรือไม่?')) {
          axios
            .delete(
              'https://boardgame-nuxtjs-default-rtdb.asia-southeast1.firebasedatabase.app/post/' +
                id +
                '.json'
            )
            .then((res) => {
              alert('ลบข้อมูลสำเร็จ')
              //commit mutation
              vuexContext.commit('deleteItemState', id)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },
    },

    getters: {
      // นำ State ไปใช้งาน
      getAllPosts(state) {
        return state.loadData
      },
      getAllStatus(state) {
        return state.loadDataStatus
      },
    },
  })
}
export default createStore
