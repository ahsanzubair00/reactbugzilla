import axios from "axios";
export const axiosRequest = axios.create({
  baseURL: "http://localhost:3000/"
});
export const getProjects = () => axiosRequest.get("/projects")
export const getProjectDetails = (id) => axiosRequest.get(`/projects/${id}`)