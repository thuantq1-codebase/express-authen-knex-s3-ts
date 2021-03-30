import logger from '@shared/Logger'

export const pErr = (err: Error) => {
  if (err) {
    logger.err(err)
  }
}

export const getRandomInt = () => {
  return Math.floor(Math.random() * 1_000_000_000_000)
}

export const getTimestamp = () => {
  return Date.now()
}
