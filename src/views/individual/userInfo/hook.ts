import { ref } from 'vue'

export function getProfileInfo(original: any) {
  const { email, hobby, introduction, job, location, registerTime, tel, avatarUrl } = original
  return ref({ email, hobby, introduction, job, location, registerTime, tel, avatarUrl })
}
