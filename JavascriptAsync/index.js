const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    const error = true;

    if(error){
      onError(new Error('Error in login'))
    }
    console.log('User logged!')
    onSucess({ email });
  }, 1500)

  console.log('After setTimeout')
}

const user = loginUser('aaa@gmail.com', '156165', 
(user) => {
   console.log({ user })
}, (error) => {
  console.log({ error })
})
