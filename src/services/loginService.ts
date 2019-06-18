export function login(userName: string): Promise<boolean> {
  if (!userName) {
    return Promise.reject('username is empty');
  }
  return Promise.resolve(userName === 'kim');
}
