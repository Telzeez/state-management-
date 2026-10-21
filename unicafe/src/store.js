import { create } from 'zustand'

const useAnecdoteStore = create((set) => ({
    counters: {
        numOfGood: 0,
        numOfBad: 0,
        numOfNeutral: 0
    },
    actions: {
        increGood: () => set(state => ({counters: {...state.counters, numOfGood: state.counters.numOfGood + 1},})),
        increBad:() => set(state => ({counters: {...state.counters, numOfBad: state.counters.numOfBad+1}})),
        increNeutral: () => set(state => ({counters: {...state.counters, numOfNeutral: state.counters.numOfNeutral + 1}}))
    }
}))


export const useCounters = () => useAnecdoteStore(state=> state.counters)
export const useControls = () => useAnecdoteStore(state=> state.actions)