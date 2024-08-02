import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.apperiteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        await this.login({ email, password });
        return userAccount;
      } else {
        throw new Error("Account creation failed");
      }
    } catch (error) {
      console.error("Error creating account:", error.message);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (session) {
        return session;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user || null;
    } catch (error) {
      console.error("Error fetching current user:", error.message);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.error("Error logging out:", error.message);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
