export default {

    setVideos: ((state, videos) => state.videos = videos),

    setEditedVideoId: ((state, id) => state.editedVideoId = id),

    setEditedVideo: ((state, video) => {
        Object.assign(state.editedVideo, video)
    }),

    resetEditedVideoId: ((state) => state.resetEditedVideoId = ''),

    resetEditedVideo: ((state) => {
        for (const key in state.editedVideo) {
            state.editedVideo[key] = '';
        }
        if (state.editedVideo.id) {
            delete state.editedVideo.id;
        }
    }),

    editVideo: ((state, video) => {
        const index = state.videos.findIndex(p => p.id === video.id)// function (p) {if (p.id === user.id) return indexOf(p))
        state.videos.splice(index, 1, video)
    }),
    deleteVideo: ((state) => {
        const index = state.videos.findIndex(p => p.id === state.editedVideoId)
        state.videos.splice(index, 1)
    }),
    insertVideo: ((state, video) => {
        state.videos.push(video)
    })
}
