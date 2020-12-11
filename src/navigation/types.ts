export interface IRouterConfig {
  component: React.ComponentType<{
    routes?: IRouterConfig[];
  }>;
  path: string;
  key?: string;
  exact?: boolean;
  title?: string;
  routes?: IRouterConfig[];
}
