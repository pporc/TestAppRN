export const addData = (data) => ({
  type: 'GET_DATA',
  data,
});

export const getData = () => async (dispatch) => {
  try {
    const url =
      'https://api.unsplash.com/photos/random/?count=10&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addData(responseBody));
  } catch (error) {
    console.error(error);
  }
};
