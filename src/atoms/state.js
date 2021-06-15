import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
})

export const useCount = () => {
  const [count, setCount] = useRecoilState(countState)
  return {
    state: count,
    set: setCount,
  }
}
export default useCount