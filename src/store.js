import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [
      { name: 'Home', link: '/' },
      { name: 'About Us', link: '#' },
      { name: 'Contact Us', link: '#' },
    ],
    slides: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
  },
  mutations: {

  },
  actions: {

  }
})
