const routes = [
  {
    path: '/',
    component: {
      template: `
        <div class="home container text-center">
          <div class="list">
            <ul>
              <li>Newborns</li>
              <li><i class="fas fa-square-full"></i></li>
              <li>Families</li>
              <li><i class="fas fa-square-full"></i></li>
              <li>Senior Photos</li>
              <li><i class="fas fa-square-full"></i></li>
              <li>Models</li>
            </ul>
          </div>
          <img src="images/model1.jpg" width="100%" height="auto">
        </div>
      `,
      props: [""],
      data: function() {
        return {

        }
      },
      created: function() {
        this.$parent.showNav = false
        document.getElementById("body").classList.remove("noscroll")
      }
    }
  },
  {
    path: '/newborns',
    component: {
      template: `
      <div>
        <div class="gallery container text-center">
          <h1 class="title">Newborns</h1>
          <hr class="hr">
          <p class="expand">(click image to expand)</p>
          <div class="row">
            <div class="col-md-4" v-for="image in images">
              <img v-bind:src="image.url" width="100%" height="auto" v-on:click="openModal(image.url)">
            </div>
          </div>
        </div>

        <div class="modal" v-if="showModal">
          <div class="close-modal" v-on:click="closeModal()">
            <i class="fas fa-times"></i>
          </div>

          <img v-bind:src="modalUrl" class="modal-image"/>

          </div>
        </div>
      </div>
      `,
      props: [""],
      data: function() {
        return {
          images: [
            { url: "images/newborns5.jpg" },
            { url: "images/newborns4.jpg" },
            { url: "images/newborns6.jpg" },
            { url: "images/newborns1.jpg" },
            { url: "images/newborns3.jpg" },
            { url: "images/newborns2.jpg" },
          ],
          showModal: false,
          modalUrl: ''
        }
      },
      methods: {
        openModal: function(url) {
          this.showModal = true
          this.modalUrl = url
          document.getElementById("body").classList.add("noscroll")
        },
        closeModal: function() {
          this.showModal = false
          document.getElementById("body").classList.remove("noscroll")
        }
      },
      created: function() {
        this.$parent.showNav = false
        document.getElementById("body").classList.remove("noscroll")
      }
    }
  },
  {
    path: '/families',
    component: {
      template: `
      <div>
        <div class="gallery container text-center">
          <h1 class="title">Families</h1>
          <hr class="hr">
          <p class="expand">(click image to expand)</p>
          <div class="row">
            <div class="col-md-4" v-for="image in images">
              <img v-bind:src="image.url" width="100%" height="auto" v-on:click="openModal(image.url)">
            </div>
          </div>
        </div>

        <div class="modal" v-if="showModal">
          <div class="close-modal" v-on:click="closeModal()">
            <i class="fas fa-times"></i>
          </div>

          <img v-bind:src="modalUrl" class="modal-image"/>

          </div>
        </div>
      </div>
      `,
      props: [""],
      data: function() {
        return {
          images: [
            { url: "images/family1.jpg" },
            { url: "images/family4.jpg" },
            { url: "images/family3.jpg" },
            { url: "images/family2.jpg" },
            { url: "images/family5.jpg" },
            { url: "images/family6.jpg" },
          ],
          showModal: false,
          modalUrl: ''
        }
      },
      methods: {
        openModal: function(url) {
          this.showModal = true
          this.modalUrl = url
          document.getElementById("body").classList.add("noscroll")
        },
        closeModal: function() {
          this.showModal = false
          document.getElementById("body").classList.remove("noscroll")
        }
      },
      created: function() {
        this.$parent.showNav = false
        document.getElementById("body").classList.remove("noscroll")
      }
    }
  },
  {
    path: '/senior-photos',
    component: {
      template: `
      <div>
        <div class="gallery container text-center">
          <h1 class="title">Senior Photos</h1>
          <hr class="hr">
          <p class="expand">(click image to expand)</p>
          <div class="row">
            <div class="col-md-4" v-for="image in images">
              <img v-bind:src="image.url" width="100%" height="auto" v-on:click="openModal(image.url)">
            </div>
          </div>
        </div>

        <div class="modal" v-if="showModal">
          <div class="close-modal" v-on:click="closeModal()">
            <i class="fas fa-times"></i>
          </div>

          <img v-bind:src="modalUrl" class="modal-image"/>

          </div>
        </div>
      </div>
      `,
      props: [""],
      data: function() {
        return {
          images: [
            { url: "images/seniors6.jpg" },
            { url: "images/seniors3.jpg" },
            { url: "images/seniors4.jpg" },
            { url: "images/seniors2.jpg" },
            { url: "images/seniors7.jpg" },
            { url: "images/seniors5.jpg" },
          ],
          showModal: false,
          modalUrl: ''
        }
      },
      methods: {
        openModal: function(url) {
          this.showModal = true
          this.modalUrl = url
          document.getElementById("body").classList.add("noscroll")
        },
        closeModal: function() {
          this.showModal = false
          document.getElementById("body").classList.remove("noscroll")
        }
      },
      created: function() {
        this.$parent.showNav = false
        document.getElementById("body").classList.remove("noscroll")
      }
    }
  },
  {
    path: '/models',
    component: {
      template: `
      <div>
        <div class="gallery container text-center">
          <h1 class="title">Models</h1>
          <hr class="hr">
          <p class="expand">(click image to expand)</p>
          <div class="row">
            <div class="col-md-4" v-for="image in images">
              <img v-bind:src="image.url" width="100%" height="auto" v-on:click="openModal(image.url)">
            </div>
          </div>
        </div>

        <div class="modal" v-if="showModal">
          <div class="close-modal" v-on:click="closeModal()">
            <i class="fas fa-times"></i>
          </div>

          <img v-bind:src="modalUrl" class="modal-image"/>

          </div>
        </div>
      </div>
      `,
      props: [""],
      data: function() {
        return {
          images: [
            { url: "images/model3.jpg" },
            { url: "images/model7.jpg" },
            { url: "images/model4.jpg" },
            { url: "images/model5.jpg" },
            { url: "images/model2.jpg" },
            { url: "images/model6.jpg" },
          ],
          showModal: false,
          modalUrl: ''
        }
      },
      methods: {
        openModal: function(url) {
          this.showModal = true
          this.modalUrl = url
          document.getElementById("body").classList.add("noscroll")
        },
        closeModal: function() {
          this.showModal = false
          document.getElementById("body").classList.remove("noscroll")
        }
      },
      created: function() {
        this.$parent.showNav = false
        document.getElementById("body").classList.remove("noscroll")
      }
    }
  },
  {
    path: '/about-contact',
    component: {
      template: `
      <div>
        <div class="container text-center">
          <h1 class="title">About</h1>
          <hr class="hr">
          <div class="row about">
            <div class="col-md-6">
              <img src="images/headshot.jpg" width="80%" height="auto" />
            </div>
            <div class="col-md-6 text-left">
              <p>Jessica Grever is an experienced photographer located in Palatine, Illinois. Jessica has been studying the fine art of photography since her freshman year of highschool, and cherishes every moment that she gets to spend developing her skills and technique.<br><br> Some of Jessica's favorite areas of photography are newborns, families, senior photos, professional models, pets, and engagement photos, although she has a passion for capturing any and every aspect of life with her camera.<br><br> Jessica is currently available to hire for almost any occasion. She prefers to be contacted by the phone number and email address listed below.</p>
            </div>
          </div>
          <h1 class="title">Contact</h1>
          <hr class="hr">
          <div class="row contact">
            <div class="col-md-4">
              <i class="fas fa-map-marker-alt"></i>
              <p>Palatine, Illinois</p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-mobile-alt"></i>
              <p>(847)347-4597</p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-envelope"></i>
              <p>jessica.grever97@gmail.com</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      `,
      props: [""],
      data: function() {
        return {

        }
      },
      created: function() {
        this.$parent.showNav = false
        document.getElementById("body").classList.remove("noscroll")
      }
    }
  },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  el: '#app',
  data: {
    showNav: false
  },
  methods: {
    openNav: function() {
      this.showNav = true
      document.getElementById("body").classList.add("noscroll")
    },
    closeNav: function() {
      this.showNav = false
      document.getElementById("body").classList.remove("noscroll")
    }
  },
  router
}).$mount('#app')
