export const createProject = (project) => {
    return (dispatch , getState , {getFirebase , getFirestore}) =>{
      // async code  implemented
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorID = getState().firebase.auth.uid;
      firestore.collection('projects').add({
        ...project,
        authorFirstName:profile.firstName,
        authorLastName: profile.lastName,
        authorID,
        createdAt : new Date()

      }).then(() => {

        dispatch({
          type:'CREATE_PROJECT',
          project
      })

      }).catch((err) => {

        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          err
        })

      })
      
    }
}