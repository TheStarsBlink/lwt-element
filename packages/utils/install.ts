/*
 * @Author: liwentao 1765909120@qq.com
 * @Date: 2024-10-12 22:23:48
 * @LastEditors: liwentao 1765909120@qq.com
 * @LastEditTime: 2024-10-12 22:24:00
 * @FilePath: \lwt-element\packages\utils\install.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by liwentao 1765909120@qq.com, All Rights Reserved. 
 */
import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const install = (app: App) =>
    each(components, (c) => {
      app.use(c);
    });

  return install;
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};