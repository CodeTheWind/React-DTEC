/*************** 资料编辑页接口约束 ****************/

import { UserType } from "../../data";

export interface IState extends UserType {
  profession: string;
  company: string;
  motto: string;
}