import { computed, ref } from 'vue'

export default function useLoading() {
  const reqCount = ref(0)
  const isLoading = computed(() => !(reqCount.value <= 0))
  function addLoadingReq() {
    reqCount.value = reqCount.value + 1
  }

  function completeLoadingReq() {
    reqCount.value = reqCount.value - 1
  }

  // 将请求返回的promise作为参数，返回一个isLoading的值来判断请求是否完成
  async function loadingWrapper<T>(promise: Promise<T>) {
    addLoadingReq()
    // 与.then方法不同，.finally方法在无视回调函数的返回值，而是返回原promise的解决值的包装
    return promise.finally(() => {
      completeLoadingReq()
    })
  }

  return {
    loadingWrapper,
    isLoading,
  }
}
