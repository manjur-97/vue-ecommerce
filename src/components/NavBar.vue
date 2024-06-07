<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="backgound-primary shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between p-2">
        <div>
          <RouterLink to="" class="text-white me-2 text-xs">
            Become a Seller
          </RouterLink>
          <RouterLink to="" class="text-white me-2 text-xs">
            Daraz Donates
          </RouterLink>
          <RouterLink to class="text-white me-2 text-xs">
            Help & Support
          </RouterLink>
        </div>
        <div>
          <RouterLink to="" class="text-white text-xs">
            Download App
          </RouterLink>
        </div>
      </div>
      <div class="">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <!-- Logo -->
            <div>
              <a href="#" class="flex items-center py-5 px-2 text-white">
                <span class="font-bold">LOGO</span>
              </a>
            </div>
            <!-- Primary Nav -->
            <div class="hidden md:flex items-center space-x-1">
              <form class="max-w-sm mx-auto">
                <div class="flex">
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none  bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie Green"
                  />
                  <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                      />
                    </svg>
                  </span>
                </div>
              </form>

              <!-- <RouterLink
                to="/"
                class="py-5 px-3 text-white hover:text-gray-900"
                >Home</RouterLink
              >
              <RouterLink
                to="/about"
                class="py-5 px-3 text-white hover:text-gray-900"
                >About</RouterLink
              >
              <RouterLink
                to="/service"
                class="py-5 px-3 text-white hover:text-gray-900"
                >Services</RouterLink
              >
              <RouterLink
                to="/contact"
                class="py-5 px-3 text-white hover:text-gray-900"
                >Contact</RouterLink
              > -->
            </div>
          </div>
          <!-- Secondary Nav -->
          <div class="hidden md:flex items-center space-x-1">
            <RouterLink
              to="/login"
              class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400"
              >Login</RouterLink
            >
            <RouterLink
              to="/sign_up"
              class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400"
              >Signup</RouterLink
            >
          </div>
          <!-- Mobile Button -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="mobile-menu-button">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="mds:hidden">
      <RouterLink to="/" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Home</RouterLink
      >
      <RouterLink to="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >About</RouterLink
      >
      <RouterLink
        to="/service"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Services</RouterLink
      >
      <RouterLink
        to="/contact"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Contact</RouterLink
      >
      <RouterLink to="/login" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Login</RouterLink
      >
      <RouterLink
        to="/sign_up"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Signup</RouterLink
      >
    </div>
  </nav>
</template>
  
  <script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
  
  <style>
/* You can add additional custom styles here */
</style>
  