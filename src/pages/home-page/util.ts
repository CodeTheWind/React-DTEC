export function isPhone(phone: string): boolean {
  let reg = /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/;
  if (!reg.test(phone)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 0: 正确, 1: 密码为空, 2: 两次密码不一致
 * @param passwd 密码
 * @param cpasswd 确认密码
 */
export function checkRegisterPassword(passwd: string, cpasswd: string): number {
  if (passwd !== '') {
    if (passwd === cpasswd) {
      return 0;
    } else {
      return 2;
    }
  } else {
    return 1;
  }
}