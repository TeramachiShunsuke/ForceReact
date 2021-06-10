import { RecoilRoot, atom, useRecoilState } from 'recoil'
const countState = atom({
    key: 'sample/count',
    default: 0
})