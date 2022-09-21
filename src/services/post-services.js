import axios from "axios";
export class PostServices{
  getPosts=()=>{
    return axios.get("http://localhost:3000/posts")
  }
}