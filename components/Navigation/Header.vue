<template>
  <b-navbar toggleable="md" class="main-nav">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/"><img src="@/assets/img/logo.svg" alt=""></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-3">
          <b-nav-item href="#">Teknoloji</b-nav-item>
          <b-nav-item href="#">Yaşam</b-nav-item>
          <b-nav-item href="#">Yemek</b-nav-item>
          <b-nav-item href="#">Hobi</b-nav-item>
          <b-nav-item href="#">Spor</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
