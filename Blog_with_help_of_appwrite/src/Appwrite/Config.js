import Conf from "../conf/Conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases; // properties
  bucket;
  // constructor

  constructor() {
    this.client
      .setEndpoint(Conf.appwriteUrl)
      .setProject(Conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // Post Related services
  async createPost({ title, slug, content, featuredImage, statuss, userId }) {
    try {
      return await this.databases.createDocument(
        Conf.appwriteDatabaseId,
        Conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          statuss,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Server :: CreatePost :: error : ", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, statuss }) {
    try {
      return await this.databases.updateDocument(
        Conf.appwriteDatabaseId,
        Conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          statuss,
        }
      );
    } catch (error) {
      console.log("Appwrite server :: updatePost :: error : ", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Conf.appwriteDatabaseId,
        Conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Server :: deletePost :: error :", error);
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Conf.appwriteDatabaseId,
        Conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwriter server :: getpost :: error :", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("statuss", "active")]) {
    try {
      return await this.databases.listDocuments(
        Conf.appwriteDatabaseId,
        Conf.appwriteCollectionId,
        [queries]
      );
    } catch (error) {
      console.log("Appwriter server :: getPosts :: error :: ", error);
    }
  }

  // file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        Conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwriter server :: uploadFile :: error :: ", error);
    }
  }
  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(Conf.appwriteBucketId, fileID);
    } catch (error) {
      console.log("Appwriter server :: deleteFile :: error : ", error);
      return false;
    }
  }
  getFilePreview(fileID) {
    return this.bucket.getFilePreview(Conf.appwriteBucketId, fileID);
  }
}
const service = new Service();
export default service;
