import { ENTITIES } from '../constants'

export function handleEntities(array) {
  return ENTITIES.filter((option) => {
    if (array.find((e) => e.name === option.value)) {
      return option
    }
  })
}
