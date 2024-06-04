<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="backgound-primary shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div>
          <RouterLink to="" class="text-white"> Become a Seller </RouterLink>
          <RouterLink to="" class="text-white"> Daraz Donates </RouterLink>
          <RouterLink to class="text-white"> Help & Support </RouterLink>
        </div>
        <div>
          <RouterLink to="" class="text-white"> Download App </RouterLink>
        </div>
      </div>
      <div class="">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <!-- Logo -->
            <div>
              <a href="#" class="flex items-center py-5 px-2 text-white">
                <span class="font-bold">Navbar</span>
              </a>
            </div>
            <!-- Primary Nav -->
            <div class="hidden md:flex items-center space-x-1">
              <RouterLink
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
              >
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
    <div v-show="isMobileMenuOpen" class="md:hidden">
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
  