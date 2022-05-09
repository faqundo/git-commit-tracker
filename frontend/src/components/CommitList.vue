<template>
  <div>
    <div>main</div>
    <div>
      <ul class="list-group table-hover">
        <li
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
          "
          style="padding: 8px 16px"
          v-for="(oneCommit, index) in commits"
          :key="index"
        >
          <div>
            <!-- Commit name -->
            <p class="mb-1">
              <b>{{ oneCommit.commit.message }}</b> /
            </p>

            <div class="d-flex mt-1">
              <!-- Avatar -->
              <div>
                <a :href="'https://github.com/' + oneCommit.author.login" target="_blank">
                  <img
                    :src="oneCommit.author.avatar_url"
                    :alt="'@' + oneCommit.commit.author.name"
                    width="20"
                    height="20"
                    style="border-radius: 35px"
                  />
                </a>
              </div>
              <div>
                <!-- Author name -->
                <a
                  :href="'https://github.com/' + oneCommit.author.login"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  class="px-2"
                >
                  <b>{{ oneCommit.commit.author.name }}</b>
                </a>
                <!-- Date -->
                <time> {{ oneCommit.commit.author.date }}/ </time>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <a
              :href="oneCommit.html_url"
              target="_blank"
              style="text-decoration: none"
            >
              <button type="button" class="btn btn-secondary btn-sm">
                <span style="color: #58a6ff">
                  {{ oneCommit.sha.substr(0, 7) }}
                </span>
              </button>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center p-4">
      <button type="button" class="btn btn-primary" @click="forceRerender">
        <div class="d-flex justify-content-center">
          <span class="material-symbols-outlined"> refresh </span>
          <span> Refresh </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { getCommits } from "@/services/CommitService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "tasks-list",
  data() {
    return {
      componentKey: 0,
      commits: [] as any[],
    };
  },
  methods: {
    async loadCommits() {
      try {
        const res = await getCommits();
        this.commits = res.data; 
      } catch (error) {
        console.error(error);
      }
    },
    async forceRerender() {
      await this.loadCommits();
    },
  },
  mounted() {
    this.loadCommits();
  },
});
</script>