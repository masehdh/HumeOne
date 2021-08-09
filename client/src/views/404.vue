<template>
  <div class="section">
    <div class="container page-not-found-container">
      <div class="h-mg-10">
        <h1>404: Page Not Found</h1>
        <h2>
          If you have any questions, you can reach us at
          <a href="mailto:team@humeone.com">team@humeone.com</a>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data() {
    return {
      name: "",
      email: "",
      messages: [],
      validationMessages: {}
    };
  }
};
</script>

<style scoped lang="scss">
.page-not-found-container {
  color: #444450;
  display: flex;
  flex-direction: column;
  padding: 30vh 0;
  margin-bottom: 32px;
  text-align: center;
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  h2 {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>