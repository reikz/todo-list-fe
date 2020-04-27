
export const ROUTES = {

  /**
   * Security
   */
  authenticate: `/authenticate`,
  refreshToken: () => `/refreshToken`,

  /**
   * Todo
   */
  getProjects: (userId: string) => `/project/getProjects/${userId}`,
  createProject: () => `/project/createProject/`,

  getTasks: (projectId: string) => `/task/getTasks/${projectId}`,
  createTask: () => `/task/createTask/`,
};
