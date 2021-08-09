import stream from '../apis/stream';
import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, SIGN_IN, SIGN_OUT } from "./types"
import history from '../history';

export const signIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = formValues => async (dispatch, getState) => {
  const { id } = getState().auth.user;
  const response = await stream.post('/streams', { ...formValues, userId: id });
  dispatch({ type: CREATE_STREAM, payload: response.data })
  history.push('/');
}

export const fetchStreams = () => async dispatch => {
  const response = await stream.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = id => async dispatch => {
  const response = await stream.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const deleteStream = id => async dispatch => {
  await stream.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id })
}

export const editStream = (streamId, formValue) => async dispatch => {
  const response = await stream.patch(`/streams/${streamId}`, formValue);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
}