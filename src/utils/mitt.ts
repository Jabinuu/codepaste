import mitt from 'mitt'

// type EventType = string | string[]
type EventName = 'jiabin' | 'search' | 'langFilter' | 'openEditor'
const emitter = mitt<Record<EventName, any>>()
export default emitter
