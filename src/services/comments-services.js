import axios from "axios"

export class CommentsServices{
  getComments=()=>{
    return axios.get("http://localhost:3000/comments")
  }
  postComment=(body,postId)=>{
    return axios.post("http://localhost:3000/comments",
      {
        "body": body,
        "postId": postId
      })
  }
  deleteComment=(Id)=>{
    return axios.delete("http://localhost:3000/comments/"+Id);
  }
  updateComment=(body,postId,Id)=>{
    return axios.put("http://localhost:3000/comments/"+Id,{
      "body": body,
      "postId": postId
    })
  }
}

