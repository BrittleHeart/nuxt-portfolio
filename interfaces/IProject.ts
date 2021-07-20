export default interface IProject {
  id: number;
  name: string;
  description: string;
  /**
   * project statuses
   * 
   * done
   * preparing
   */
  project_status: 'preparing' | 'done';
  /**
   * If targetable, add link
   */
  targetable?: boolean | undefined;
  project_url?: string;
}