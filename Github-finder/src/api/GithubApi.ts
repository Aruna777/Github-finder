import axios from "axios";

const API_BASE_URL = "https://api.github.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

export interface Follower {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers_url: string;
}

export const GithubApi = {
  getUser: async (username: string): Promise<GitHubUser> => {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  },

  getRepositories: async (username: string): Promise<Repository[]> => {
    const response = await axiosInstance.get(`/users/${username}/repos`);
    return response.data;
  },

  getFollowers: async (username: string): Promise<Follower[]> => {
    const response = await axiosInstance.get(`/users/${username}/followers`);
    return response.data;
  },
};
