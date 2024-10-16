export type ButtonType = 'success' | 'info' | 'warning' | 'danger' | 'primary';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'small' | 'mini' | 'default';
export interface ButtonProps  {
  tag:'button' |string
  type?: ButtonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
    icon?: string;
    block?: boolean;
    text?: string;
    throttle?: number;
    useThrottle?:boolean;
    onClick?: (e: MouseEvent) => void;
}
export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}