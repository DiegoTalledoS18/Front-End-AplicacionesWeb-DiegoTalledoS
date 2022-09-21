<template>

    <div class="col-12 md:col-10">
      <pv-dropdown v-model="SelectedPost" id="PostId" placeholder="PostTitle" optionLabel="title" :options="posts"></pv-dropdown>
    </div>
  <div class="col-12 md:col-10">
    <input-text id="Body" placeholder="Body" type="text" v-model="body"></input-text>
  </div>
  <div class="flex justify-content-center flex-wrap mb-2 md:mb-5">
    <Button class="flex align-items-center justify-content-center m-2" @click="save">Send</Button>

  </div>
</template>

<script>
import { CommentsServices } from "@/services/comments-services";
import { PostServices } from "@/services/post-services";
export default {
  name: "NewComment",
  data(){
    return{
      body:"",
      SelectedPost:null,
      posts:null
    }
  },
  methods:{
    save:function(){
      console.log(this.body)
      console.log(this.postId)
      new CommentsServices().postComment(this.body,this.SelectedPost.id).then(
        console.log("posted"),
        this.$router.push("/comment")
      )
    }
  },
  created() {
    new PostServices().getPosts().then(response=>{
      this.posts=response.data
    })
  }
};
</script>

<style scoped>

</style>