<!--
 * @Author: liwentao 1765909120@qq.com
 * @Date: 2024-10-12 22:14:55
 * @LastEditors: liwentao 1765909120@qq.com
 * @LastEditTime: 2024-10-13 21:05:37
 * @FilePath: \lwt-element\packages\components\Botton\botton.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by liwentao 1765909120@qq.com, All Rights Reserved. 
-->
<script lang="ts" setup>
import { ref } from 'vue';
import type { ButtonProps, ButtonEmits } from './types';
import { throttle } from "lodash-es";
defineOptions({ name: 'ErButton' })
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  block: false,
  circle: false,
  disabled: false,
  icon: '',
  loading: false,
  nativeType: 'button',
  plain: false,
  round: false,
  size: 'default',
  text: '',
  type: 'primary',
  throttle: 500,
  useThrottle: true
})
const emits = defineEmits<ButtonEmits>()
const handleClick = (e: MouseEvent) => {
  emits('click', e)
}
const throttleClick = throttle(handleClick
  , props.throttle)
const _ref = ref<HTMLButtonElement>()
const slots = defineSlots()
defineExpose({ ref: _ref })
</script>
<template>
  <component  class="er-button" :is="tag" :type="tag === 'button' ? nativeType : null" :class="{
    [`er-button--${type}`]: type,
    [`er-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-block': block,
    'is-loading': loading,
    'is-disabled': disabled
  }" ref="_ref" :disabled="disabled" @click="(e: MouseEvent) => useThrottle ? handleClick(e) : throttleClick(e)">
    <slot></slot>
  </component>
</template>