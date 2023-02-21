import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [{
      id: 1,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000289/hcv/IMG_8298_ioai92.jpg'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000289/hcv/IMG_1218_opa4oj.jpg'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000289/hcv/20200919_142340_yfxhy4.jpg'
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000288/hcv/DSC_0765_o5izam.jpg'
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000288/hcv/20200808_195811_vbk5ab.jpg'
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000288/hcv/school_outside_of_Durban_uirdwu.jpg'
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/20200607_172218-2_hpe1pb.jpg'
    },
    {
      id: 8,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/20191229_120351_ywotuv.jpg'
    },
    {
      id: 9,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/Children-Standing-Desks_yavcsf.jpg'
    },
    {
      id: 10,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/nathan-dumlao-71u2fOofI-U-unsplash_lnsqhm.jpg'
    },
    {
      id: 11,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000286/hcv/good-faces-xmSWVeGEnJw-unsplash_oqzpv2.jpg'
    },
    {
      id: 12,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000286/hcv/PlaylistCareerReadiness_aghbjt.png'
    },
    {
      id: 13,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000285/hcv/IMG_7355_Original_y1k8wx.jpg'
    },
    {
      id: 14,
      url: 'https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000285/hcv/11_year_olds_tweents_tojwcu.jpg'
    }],
    currentImage: {}
  },
  getters: {
  },
  mutations: {
    LOAD_IMAGES (state, images) {
      state.images = images
    }
  },
  actions: {
  },
  modules: {
  }
})
