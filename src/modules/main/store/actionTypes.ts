import { IExpert } from '../../../lib/types';

export enum LoadData {
  LOAD_NEWEST = 'LOAD_NEWEST',
  LOAD_IMPORTANT = 'LOAD_IMPORTANT',
  LOAD_EXPERTS = 'LOAD_EXPERTS',
}

export interface INewestItem {}

export interface IImportantItem {}

export interface INewestAction {
  type: LoadData.LOAD_NEWEST;
  value: INewestItem[];
}

export interface IImportantAction {
  type: LoadData.LOAD_IMPORTANT;
  value: IImportantItem[];
}

export interface IExpertsAction {
  type: LoadData.LOAD_EXPERTS;
  value: IExpert[];
}

export type MainActions = INewestAction | IImportantAction | IExpertsAction;
