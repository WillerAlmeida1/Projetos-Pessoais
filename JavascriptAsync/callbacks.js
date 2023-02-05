const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    const error = false

    if (error) {
      return onError(new Error('Error in login'))
    }
    console.log('User logged!')
    onSucess({ email })
  }, 1500)
}

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3'])
  }, 2000)
}

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: 'video title' })
  }, 2500)
}

const user = loginUser(
  'aaa@gmail.com',
  '156165',
  user => {
    getUserVideos(user.email, videos => {
      console.log({videos})
      getVideoDetails(videos[0], (videoDetails) => {
        console.log({ videoDetails })
      })
    })
  },
  error => {
    console.log({ error })
  }
)
