<template>
  <header class="is-sticky">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a ref="dashboard" class="navbar-item">
          <img
            :src="dashboardIcon"
            height="16"
            width="16"
            style="color: rgba(41, 12, 79, 1);"
          >
          <span style="padding-left: 10px;">Dashboard</span>
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div class="is-divider-vertical" />
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a
            v-for="(menuItem, index) in menuItems"
            :key="index"
            class="navbar-item"
            :class="(activeOption === menuItem.text) ? 'is-active' : ''"
            :href="menuItem.href"
          >{{ menuItem.text }}</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field">
              <div class="control has-icons-left">
                <input
                  class="input is-small is-rounded seach-field"
                  type="text"
                  placeholder="Search for a course, topic or keyword"
                >
                <span class="icon is-small is-left">
                  <img
                    :src="searchIcon"
                    height="16"
                    width="16"
                    style="color: rgba(41, 12, 79, 1);"
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
import { createPopper } from '@popperjs/core'
import { apps, search, home } from 'ionicons/icons/index'

Vue.config.ignoredElements = [/^ionic-/]

export default Vue.extend({
  components: {
  },
  props: {
    'menu-items': {
      required: false,
      type: Array,
      default: () => [
        { text: 'Learning Paths', href: '/learning' },
        { text: 'Courses', href: '/courses' },
        { text: 'Resources', href: '/resources' },
        { text: 'Career Advisors', href: '/careers' }
      ]
    },
    'active-option': { required: false, type: String, default: '' }
  },
  data () {
    return {
      dashboardIcon: apps,
      searchIcon: search,
      homeIcon: home
    }
  }
})
</script>
<style lang="scss" scoped>
header {
    border-bottom: 1px solid rgba(41, 12, 79, 1);
    box-shadow: 0 4px 4px -4px rgba(22, 1, 42, 1);
    background: white;
}
header.is-sticky {
    position: fixed;
    top: 0px;
    width: 100vw;
    overflow: hidden;
    z-index: 9999;
}
nav.navbar {
    margin: 0px 32px;
}
.navbar-brand {
    .navbar-item {
        padding: 0px 32px;
        color: rgba(41, 12, 79, 1);
        font-weight: 600;
    }
}
.navbar-start {
    .navbar-item {
        padding: 0px 32px;
        color: rgba(41, 12, 79, 1);
        font-weight: 500;
    }
    .navbar-item.is-active {
        color: white;
        background: linear-gradient(
            328deg,
            rgba(50, 20, 90, 1) 0%,
            rgba(41, 12, 79, 1) 31%,
            rgba(22, 1, 42, 1) 100%
        );
    }
    .navbar-item:hover:not(.is-active) {
        animation: smooth 500ms ease forwards;
        background: transparent;
    }

    @keyframes smooth {
        0% {
            font-weight: 500;
        }
        100% {
            font-weight: 700;
        }
    }
}
.navbar-end {
    .field {
        .control {
            .seach-field {
                min-width: 400px;
                border: 1px solid rgba(22, 1, 42, 0.1);
            }
            .seach-field:hover {
                border: 1px solid rgba(22, 1, 42, 0.3);
            }
            .seach-field:focus {
                border: 1px solid rgba(22, 1, 42, 0.8);
                box-shadow: none;
            }
        }
    }
}
</style>
