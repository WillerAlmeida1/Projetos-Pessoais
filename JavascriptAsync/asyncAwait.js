const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if(error){
      reject(new Error('error in login'))
    }

    console.log('user logged!')
    resolve({ email })
  })
}

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUserVideos')
      resolve(['video1', 'video2', 'video3'])
    }, 2000)
  })
}

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getVideoDetails')
      resolve({ title: 'video title' })
    }, 2500)
  })
}

const displayUser = async () => {
  try {
    const user = await loginUser('aaa@gmail.com', '123456789')
    const videos = await getUserVideos(user.email)
    const videoDetails = await getVideoDetails(videos[0])

    console.log({videoDetails})
  } catch (error) {
    console.log({ error })
  }
}

displayUser()

const retornaNumAleatorio = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false
      if(error){
        reject(new Error(error.message))
      }
      const num = Math.random()
      resolve(num)
    }, 1000)
  })
}

const retornaPromise = async () => {
  try {
    const numAleatorio = await retornaNumAleatorio()
    console.log(numAleatorio)
  } catch (e){
    console.log(e)
  }
}

retornaPromise()
