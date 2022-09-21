<template>
  <router-link to="/new-comment">New comment</router-link>
  <pv-dataTable :value="comments">
    <pv-column field="id" header="id"></pv-column>
    <pv-column field="body" header="body"></pv-column>
    <pv-column field="postId" header="post Id">
      <template #body="slotProps">
        <Button @click="deleteComment(slotProps.id)">Eliminar</Button>
      </template>
    </pv-column>

  </pv-dataTable>

</template>

<script>
import { CommentsServices } from "@/services/comments-services";

export default {
  name: "Comment",
  components: {},

  data(){
    return{
      comments:null
    }
  },
  methods:{
    deleteComment: function(id){
      console.log("Eliminar")
    }
  },
  created() {
    new CommentsServices().getComments().then(response=>{
      this.comments=response.data
    })
  }
};
</script>

<style scoped>

</style>