import { SYS_URL } from '../const';
/**
 * 获取图片地址
 * @param name 名称：币名称或交易所名称
 * @param type 类型：币 or 交易所
 */
export function getImage(name: string, type: string = 'coin'): string {
  return SYS_URL.image + type + name.toLowerCase().split(' ').join('');
}