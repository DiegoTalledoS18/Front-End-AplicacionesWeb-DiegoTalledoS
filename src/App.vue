<script>
import { CommentsServices } from "@/services/comments-services";
import { ref } from "vue";
export default {
  data(){
    return {
      comments:[],
      selectedCategories: null,
      codigo:"",
      nombre:"",
      abreviatura:"",
      Ruc:0,
      body:"",
      postId:"",
      Id:"",
      fecha: null,
      categories: [
        {name: 'Lacteos', code: 'NY'},
        {name: 'verduras', code: 'RM'},
        {name: 'Bebidas', code: 'LDN'},
        {name: 'Alcohol', code: 'IST'},
        {name: 'Carnes', code: 'PRS'}
      ],
      estados: [ "Activo","Suspendido","De baja"],
      estadoSeleccionado: ref("true"),
      price: ref(3),
      color: '1976D2',
      impuesto:false,
      descriptionValue:""
    }
  },
  created() {
    new CommentsServices().getComments()
      .then(response=>{
        console.log(response.status)
        console.log(response.data)
        this.comments=response.data;
    })
  },
  methods:{
    createComment:function(){
      new CommentsServices().postComment(this.body,this.postId)
        .then(response=>{
          console.log("post ",response)
        })
    },
    updateComment:function(){
      new CommentsServices().updateComment(this.body,this.postId,this.Id)
        .then(response=>{
          console.log("update",response)
        }).catch(error=>{
        console.log(error)
      })
    },
    deleteComment: function(){
      new CommentsServices().deleteComment(this.Id)
        .then(response=>{
          console.log("delete",response)
        })
        .catch(error=>{
          console.log(error)
      })
    }
  }
}
</script>

<template>
  <nav class="flex  gap-4">
    <router-link to="/home">To Home</router-link>
    <router-link to="/product">To product</router-link>
    <router-link to="/comment">To comment</router-link>
    <router-link to="/post">To post</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
</style>
