/*
 * @Author: liwentao 1765909120@qq.com
 * @Date: 2024-10-12 22:31:30
 * @LastEditors: liwentao 1765909120@qq.com
 * @LastEditTime: 2024-10-12 23:40:29
 * @FilePath: \lwt-element\packages\core\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by liwentao 1765909120@qq.com, All Rights Reserved. 
 */
import { makeInstaller } from "@lwt-element/utils";
import components from "./components";
import '@lwt-element/theme/index.css'
const installer = makeInstaller(components);

export * from "@lwt-element/components";
export default installer;